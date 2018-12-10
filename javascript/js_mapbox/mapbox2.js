function start() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5vbmVoZWltIiwiYSI6ImNqcGRxYXdlOTBqcWozdW8zYXVtcXR0cnoifQ.vpS1zcqEyq6rlgzAuzEOfw';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: [18.049062, 59.340245], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });

    let positioner = [
        [18.0461584, 59.3366555],
        [18.0474068, 59.3402368],
        [18.0482761, 59.3431251],
        [18.054259, 59.343845]
    ];

    let beskrivningar = [
        "Min skola",
        "La Grande",
        "Subway",
        "Kebab kungen"
    ];

    for (let index = 0; index < positioner.length; index++) {
        let popup = new mapboxgl.Popup({
                offset: 25
            })
            .setText(beskrivningar[index]);

        let marker = new mapboxgl.Marker()
            .setLngLat(positioner[index])
            .setPopup(popup)
            .addTo(map);
    }
}
start();