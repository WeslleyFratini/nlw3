const { orphanage } = require("../../src/pages");

const map = L.map("mapid").setView([-21.7061839,-47.487772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28,68],
    popupAnchor: [170, 2]
})

function addMarker({ id, name, lat, lng }){   

    const popup = L.popup({
        clonseButton: false,
        className: 'map-popup',
        minWidth: 240,
        minWidth: 240
    }).setContent(`${name} <a href"orphanage?id=${id}"></a><img src ="/images/arrow-white.svg" </a>`)
    
    L.
    marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanageSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }

    addMarker(orphanage)

})


