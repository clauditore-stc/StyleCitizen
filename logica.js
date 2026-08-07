// logica de StyleCitizen

let cascos = [
    { nombre: "Arden-SL", imagen: "img/cascos/arden-sl.jpg" },
    { nombre: "Novikov", imagen: "img/cascos/novikov.jpg" }
]
document.getElementById("btn-casco").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let casco of cascos) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${casco.imagen}"/> <p>${casco.nombre}</p>`
    }
})
let torsos = [
    { nombre: "Arden-SL", imagen: "img/torso/arden-sl.jpg" },
    { nombre: "Novikov", imagen: "img/torso/novikov.jpg" }
]
document.getElementById("btn-torso").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let torso of torsos) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${torso.imagen}"/> <p>${torso.nombre}</p>`
    }
})
let brazos = [
    { nombre: "Arden-SL", imagen: "img/brazos/arden-sl.jpg" },
    { nombre: "Novikov", imagen: "img/brazos/novikov.jpg" }
]
document.getElementById("btn-brazos").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let brazo of brazos) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${brazo.imagen}"/> <p>${brazo.nombre}</p>`
    }
})
let piernas = [
    { nombre: "Arden-SL", imagen: "img/piernas/arden-sl.jpg" },
    { nombre: "Novikov", imagen: "img/piernas/novikov.jpg" }
]
document.getElementById("btn-piernas").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let pierna of piernas) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${pierna.imagen}"/> <p>${pierna.nombre}</p>`
    }
})
