import Cliente from '/modelos/Cliente.js';
import Reseña from '/modelos/Reseña.js';
import HistorialCompra from '/modelos/HistorialCompra.js';
import Artista from '/modelos/Artista.js';

const cliente = new Cliente(1, "Jean Alejo", "jgalejo@utpl.com", "San Cayetano", "+593 986 477 999", "usuario-avatar.jpg");

const reseñas = [
    new Reseña(1, 1, 101, 5, "Me encantó esta obra, muy inspiradora.","obra1.jpg"),
    new Reseña(2, 1, 102, 4, "Buena abstracción, pero esperaba más.","obra2.jpg"),
];

const compras = [
    new HistorialCompra(1, 1, 101),
    new HistorialCompra(2, 1, 102),
    new HistorialCompra(3, 1, 103),
];

const artistasSeguidos = [
    new Artista(1, "Luis Alfonso", "Artista1.jpg"),
    new Artista(2, "Carlos Torres", "Artista2.jpg"),
    new Artista(3, "Lucía Méndez", "Artista3.jpg"),
];

// Métodos para cargar datos
export function cargarPerfil() {
    document.getElementById("nombre").textContent = cliente.nombre;
    document.getElementById("correo").textContent = cliente.correo;
    document.getElementById("telefono").textContent = cliente.telefono;
    document.getElementById("direccion").textContent = cliente.direccion;
}

export function cargarReseñas() {
    const listaReseñas = document.getElementById("lista-reseñas");
    reseñas.forEach(reseña => {
        const div = document.createElement("div");
        div.innerHTML = `
			<img src="/fotos/${reseña.imagenObra}" alt="Obra" class="imagen-obra">
            <p>${reseña.comentario}</p>
            <p>Calificación: ${"★".repeat(reseña.calificacion)}</p>
        `;
        listaReseñas.appendChild(div);
    });
}

export function cargarCompras() {
    const listaCompras = document.getElementById("lista-compras");
    compras.forEach(compra => {
        const div = document.createElement("div");
        div.innerHTML = `<p>Compra ID: ${compra.idCompra}</p>`;
        listaCompras.appendChild(div);
    });
}

export function cargarArtistas() {
    const carousel = document.querySelector(".carousel-content");
    artistasSeguidos.forEach(artista => {
        const div = document.createElement("div");
        div.classList.add("artista-item");
        div.innerHTML = `
            <img src="../fotos/${artista.foto}" alt="${artista.nombre}">
            <p>${artista.nombre}</p>
        `;
        carousel.appendChild(div);
    });
}
