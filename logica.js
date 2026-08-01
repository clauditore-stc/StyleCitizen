// logica de StyleCitizen

let cascos = [
    { nombre: "Arden-SL", imagen: "img/cascos/arden-sl.png" },
    { nombre: "Novikov", imagen: "img/cascos/novikov.png" }
]

document.getElementById("btn-casco").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let casco of cascos) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${casco.imagen}"/> <p>${casco.nombre}</p>`
    }
})
