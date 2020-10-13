const map = L.map("mapid").setView([-21.7061839,-47.487772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28,68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    clonseButton: false,
    className: 'map-popup',
    minWidth: 240,
    minWidth: 240
}).setContent('Lar das Meninas <a href"orphanage.html?id=1" class="choose-orphanage"> <img src ="./public/images/arrow-white.svg" </a>')

L.
marker([-21.7061839,-47.487772], { icon })
  .addTo(map)
  .bindPopup(popup)

