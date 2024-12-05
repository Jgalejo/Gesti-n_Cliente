import { cargarPerfil, cargarReseñas, cargarCompras, cargarArtistas } from '/controladores/controller.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarPerfil();
    cargarReseñas();
    cargarCompras();
    cargarArtistas();
});
