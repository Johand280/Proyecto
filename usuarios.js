let indice = 0;
    function cambiarImagen(direccion) {
        const imagenes = document.querySelector('.imagenes');
        const totalImagenes = document.querySelectorAll('.imagen').length;
        indice += direccion;
        if (indice < 0) {
            indice = totalImagenes - 1;
        } else if (indice >= totalImagenes) {
            indice = 0;
        }
        const desplazamiento = -indice * 100;
        imagenes.style.transform = `translateX(${desplazamiento}%)`;
    }
let nav = document.querySelectorAll("#Nav");
let abrir = document.querySelectorAll("#Abrir");
let Cerrar = document.querySelectorAll("#Cerrar");

abrir.addeventlistener("click", () => { 
    nav.classList.add("visible");});

Cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});