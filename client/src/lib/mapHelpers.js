export const animateMap = (mapRef, longitude, latitude, zoom) => {
    mapRef.current.easeTo({
        center: [longitude, latitude],
        duration: 2000,
        zoom: zoom
    });
}