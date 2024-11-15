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
const nav = document.querySelector("#Nav");
const abrir = document.querySelector("#Abrir");
const cerrar = document.querySelector("#Cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add(" visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove(" visible");
})