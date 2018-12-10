function start()
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5vbmVoZWltIiwiYSI6ImNqcGRxYXdlOTBqcWozdW8zYXVtcXR0cnoifQ.vpS1zcqEyq6rlgzAuzEOfw';
        let map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [18.056501, 59.312719], // starting position [lng, lat]
            zoom: 15// starting zoom
    });    
    
    let popup1 = new mapboxgl.Popup()
        .setHTML("<p>Här bor jag</p>")
        .addTo(map);
    
    let marker1 = new mapboxgl.Marker()
        .setLngLat([18.056501, 59.312719]) 
        .setPopup(popup1)
        .addTo(map);
    
    let popup2 = new mapboxgl.Popup()
        .setHTML("<p>Här är tantolunden</p>")
        .addTo(map);
    
    let marker2 = new mapboxgl.Marker()
        .setLngLat([18.049107, 59.313086])
        .setPopup(popup2)
        .addTo(map);
}
start();