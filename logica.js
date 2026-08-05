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


let torso = [
    { nombre: "Arden-SL", imagen: "img/torso/arden-sl.png" },
    { nombre: "Novikov", imagen: "img/torso/novikov.png" }
]

document.getElementById("btn-torso").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let torso of torso) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${torso.imagen}"/> <p>${torso.nombre}</p>`
    }
})


let brazos = [
    { nombre: "Arden-SL", imagen: "img/brazos/arden-sl.png" },
    { nombre: "Novikov", imagen: "img/brazos/novikov.png" }
]

document.getElementById("btn-brazos").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let brazos of brazos) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${brazos.imagen}"/> <p>${brazos.nombre}</p>`
    }
})


let piernas = [
    { nombre: "Arden-SL", imagen: "img/piernas/arden-sl.png" },
    { nombre: "Novikov", imagen: "img/piernas/novikov.png" }
]

document.getElementById("btn-piernas").addEventListener("click", function() {
    document.getElementById("lista-piezas").innerHTML = ""
    for (let piernas of piernas) {
        document.getElementById("lista-piezas").innerHTML += `<img src="${piernas.imagen}"/> <p>${piernas.nombre}</p>`
    }
})
