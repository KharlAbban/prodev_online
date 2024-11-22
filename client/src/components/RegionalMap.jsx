import { useEffect, useRef } from 'react'
import { useRegionContext } from '../contexts/RegionProvider';
import RegionGeoBoundaries from "/region_geo_boundaries.geojson?url"
import mapboxgl from "mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import { getOvrScoreInsights } from '../lib/scoreLegend';
import { animateMap } from '../lib/mapHelpers';

const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
if (!mapboxToken) throw new Error('Missing MAPBOX_ACCESS_TOKEN environment variable');
mapboxgl.accessToken = mapboxToken;

const RegionalMap = ({regionalScores}) => {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const customPopup = new mapboxgl.Popup();

    const {selectedRegion, setSelectedRegion} = useRegionContext();

    const getColorForScore = (score) => {
        const scoreInsight = getOvrScoreInsights(score);

        return scoreInsight.color;
    }

    useEffect(() => {
        if (mapRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-1.0800271, 8.030028399390375],
            style: "mapbox://styles/mapbox/light-v11",
            zoom: 6,
            minZoom: 5.5,
        });

        mapRef.current.on("load", () => {
            
            mapRef.current.addSource("regionBoundarySource", {
                type: "geojson",
                data: RegionGeoBoundaries
            });

            if (regionalScores) {
                // dynamically color each feature based on their ovr scores
                const fillExp = [
                    "match",
                    ["get", "slug"],
                    ...Object.entries(regionalScores).flatMap(([slug, data]) => [
                        slug,
                        getColorForScore(data.ovrScore)
                    ]),
                    "#CCCCCC"
                ];

                mapRef.current.addLayer({
                    id: "region_score_layer",
                    type: "fill",
                    source: "regionBoundarySource",
                    paint: {
                        "fill-color": fillExp
                    }
                });
            }

            mapRef.current.addLayer({
                id: "region_boundary_layer",
                type: "line",
                source: "regionBoundarySource",
                paint: {
                    "line-color": "#000000",
                    "line-width": 1
                }
            });

        });
        
        mapRef.current.on("click", "region_score_layer", (Event) => {
            const regionName = Event.features[0].properties.slug;
            const {lng, lat} = Event.lngLat;

            setSelectedRegion(regionName);
            animateMap(mapRef, lng, lat, 7.5);


        });

        mapRef.current.on("mousemove", "region_score_layer", (Event) => {
            const regionName = Event.features[0].properties.name;
            const regionSlug = Event.features[0].properties.slug;

            const regionOvrScore = regionalScores[regionSlug].ovrScore;

            customPopup
                .setLngLat(Event.lngLat)
                .setHTML(`Region: <strong>${regionName}</strong> <br /> Score: ${Number(regionOvrScore).toFixed(2)}`)
                .addTo(mapRef.current);

        });

        mapRef.current.on("mouseleave", "region_score_layer", (Event) => {
           customPopup.remove()

        });
        
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        }

    }, [regionalScores]);

    useEffect(() => {
        if (!mapRef.current || !selectedRegion) return;
    
        // Gray out all other regions and highlight the selected one
            mapRef.current.setPaintProperty("region_score_layer", "fill-opacity", [
                "match",
                ["get", "slug"],
                selectedRegion, // Highlight the selected region
                1, // Full opacity for the selected region
                0.1 // Reduced opacity for other regions
            ]);
        
            mapRef.current.setPaintProperty("region_boundary_layer", "line-opacity", [
                "match",
                ["get", "slug"],
                selectedRegion, // Highlight boundary of the selected region
                1, // Full opacity for the selected region
                0.2 // Reduced opacity for other regions
            ]);
    
        return () => {
            // Reset opacity when no region is selected
            if (mapRef.current) {
                mapRef.current.setPaintProperty("region_score_layer", "fill-opacity", 1);
                mapRef.current.setPaintProperty("region_boundary_layer", "line-opacity", 1);
            }
        };
    }, [selectedRegion]);
    

  return (
    <div className='flex-1' ref={mapContainerRef} />
  )
}

export default RegionalMap