import { useEffect, useRef } from 'react'
import DistrictGeoBoundaries from "/districts_geo_boundaries.geojson?url"
import RegionGeoBoundaries from "/region_geo_boundaries.geojson?url"
import mapboxgl from "mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import { getOvrScoreInsights } from '../lib/scoreLegend';
import { animateMap } from '../lib/mapHelpers';
import { useDistrictContext } from '../contexts/DistrictProvider';

const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
if (!mapboxToken) throw new Error('Missing MAPBOX_ACCESS_TOKEN environment variable');
mapboxgl.accessToken = mapboxToken;

const DistrictMap = ({districtScores, regionalScores}) => {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const customPopup = new mapboxgl.Popup();

    const {selectedDistrict, setSelectedDistrict} = useDistrictContext();

    const getColorForScore = (score) => {
        const scoreInsight = getOvrScoreInsights(score * 100);

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
                data: RegionGeoBoundaries,
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
                    maxzoom: 7.2,
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

            // mapRef.current.addSource("districtBoundarySource", {
            //     type: "geojson",
            //     data: DistrictGeoBoundaries
            // });

            if (districtScores) {
                // dynamically color each feature based on their ovr scores
                const fillExp = [
                    "match",
                    ["get", "slug"],
                    ...Object.entries(districtScores).flatMap(([slug, data]) => [
                        slug,
                        getColorForScore(data.ovrScore)
                    ]),
                    "#CCCCCC"
                ];

                mapRef.current.addLayer({
                    id: "district_score_layer",
                    type: "fill",
                    source: "districtBoundarySource",
                    paint: {
                        "fill-color": fillExp
                    }
                });
            }

            mapRef.current.addLayer({
                id: "district_boundary_layer",
                type: "line",
                source: "districtBoundarySource",
                paint: {
                    "line-color": "#000000",
                    "line-width": 1
                }
            });

        });

        mapRef.current.on("click", "region_score_layer", (Event) => {
            const {lng, lat} = Event.lngLat;

            animateMap(mapRef, lng, lat, 7.5);
        });

        mapRef.current.on("zoom", () => {
            
        });

        mapRef.current.on("click", "district_score_layer", (Event) => {
            const districtName = Event.features[0].properties.slug;
            const {lng, lat} = Event.lngLat;

            animateMap(mapRef, lng, lat, 8);

            setSelectedDistrict(districtName);

        });

        mapRef.current.on("mousemove", "district_score_layer", (Event) => {
            const districtName = Event.features[0].properties.Region;
            const regionSlug = Event.features[0].properties.slug;

            // const regionOvrScore = districtScores[regionSlug].ovrScore;

            customPopup
                .setLngLat(Event.lngLat)
                .setHTML(`Region: <strong>${districtName}</strong> <br />`)
                .addTo(mapRef.current);

        });

        mapRef.current.on("mouseleave", "district_score_layer", (Event) => {
           customPopup.remove()

        });
        
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        }

    }, [districtScores]);

    useEffect(() => {
        if (!mapRef.current || !selectedDistrict) return;
    
        // Gray out all other regions and highlight the selected one
        mapRef.current.setPaintProperty("district_score_layer", "fill-opacity", [
            "match",
            ["get", "slug"],
            selectedDistrict, // Highlight the selected region
            1, // Full opacity for the selected region
            0.2 // Reduced opacity for other regions
        ]);
    
        mapRef.current.setPaintProperty("region_boundary_layer", "line-opacity", [
            "match",
            ["get", "slug"],
            selectedDistrict, // Highlight boundary of the selected region
            1, // Full opacity for the selected region
            0.2 // Reduced opacity for other regions
        ]);
    
        return () => {
            // Reset opacity when no region is selected
            if (mapRef.current) {
                mapRef.current.setPaintProperty("district_score_layer", "fill-opacity", 1);
                mapRef.current.setPaintProperty("region_boundary_layer", "line-opacity", 1);
            }
        };
    }, [selectedDistrict]);
    

  return (
    <div className='flex-1' ref={mapContainerRef} />
  )
}

export default DistrictMap