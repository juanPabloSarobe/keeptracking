let lastPosition = []


function getLastPosition(){

    fetch('./ultimaPosicion.json')
    .then(resp => resp.json())
    .then(data => {
        lastPosition = data.GPS
        console.log(lastPosition);

        lastPosition.forEach(element => {
            const lat = element.latitud
            const lon = element.longitud
            var marker = L.marker([ lat, lon], {title : element.patente, riseOnHover: true})
            .bindPopup(element.patente)
            .addTo(map);

            console.log(lat, lon)

        });
    })

}

getLastPosition()