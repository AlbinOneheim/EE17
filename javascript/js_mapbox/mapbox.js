function start()
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5vbmVoZWltIiwiYSI6ImNqcGRxYXdlOTBqcWozdW8zYXVtcXR0cnoifQ.vpS1zcqEyq6rlgzAuzEOfw';
        let map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [18.056501, 59.312719], // starting position [lng, lat]
            zoom: 15// starting zoom
    });    
    
    let marker1 = new mapboxgl.Marker() // är skapar vi en marker
        .setLngLat([18.056501, 59.312719]) // Här ger vi markern en position
        .addTo(map); // Här läger vi till markern på kartan
    
    let marker2 = new mapboxgl.Marker()
        .setLngLat([18.046501, 59.312619])
        .addTo(map);
}
start();