const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scroolWheelZoom: false,
    zoomControl: false

}

const map = L.map('mapid', options).setView([-21.7061839,-47.487772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28,68],
    popupAnchor: [170, 2]
})

const icon = L.icon({
  //Peagando a imagem do ícone
  iconUrl: "/images/map-marker.svg",
  // Tamanho do ícone 
  iconSize: [58, 68],
  //Aonde ele vai estar
  iconAnchor: [29,68],
  //Para o popup ficar ao lado 
  popupAnchor: [170, 2]
})


L.
marker([-21.7061839,-47.487772], { icon })
  .addTo(map)
  .bindPopup(popup)

  function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
      button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da imagem
    imageContainer.src = image.src

    // Adicionar a classe .active para o novo botão
    button.classList.add('active')
 }