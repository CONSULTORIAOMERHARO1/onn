document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('#titulo');
    const images = ['imagenes/1b.png', 'imagenes/2b.png', 'imagenes/3b.png'];

    // Crear objetos Image para pre-cargar las imágenes
    const imageObjects = [];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        imageObjects.push(img);
    });

    let index = 0;

    function changeBackground() {
        hero.classList.add('fade-out'); // Agregar clase para desvanecer la imagen actual
        setTimeout(function () {
            hero.style.backgroundImage = `url('${images[index]}')`; // Cambiar la imagen de fondo
            index = (index + 1) % images.length; // Avanzar al siguiente índice de imagen
            hero.classList.remove('fade-out'); // Eliminar clase para mostrar la nueva imagen
        }, 2000); // Cambiar cada 2 segundos (2000 milisegundos)
    }

    // Cambiar automáticamente las imágenes cada 2 segundos
    setInterval(changeBackground, 2000); // Cambiar cada 2 segundos (2000 milisegundos)
});