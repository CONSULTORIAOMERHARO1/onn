
/*INTERCAMBIO DE IMAGENES EN EL INICIO O EL CUERPO*/
document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const images = ['imagenes/hero-background.jpg', 'imagenes/hero-background-2.jpg', 'imagenes/hero-background-3.jpg', 'imagenes/hero-background-4.jpg'];
    let index = 0;

    function changeBackground() {
        hero.classList.add('fade-out'); // Agregar clase para desvanecer la imagen actual
        setTimeout(function () {
            hero.style.backgroundImage = `url('${images[index]}')`; // Cambiar la imagen de fondo
            index = (index + 1) % images.length; // Avanzar al siguiente índice de imagen
            hero.classList.remove('fade-out'); // Eliminar clase para mostrar la nueva imagen
        }, 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000); // Tiempo de espera antes de cambiar la imagen (en milisegundos)
    }

    // Cambiar automáticamente las imágenes cada 2 segundos
    setInterval(changeBackground, 4000);
});


const input = document.querySelector('#buscador input');

input.addEventListener('keyup', () => {
  const busqueda = input.value.toLowerCase();
  const sitiosWeb = ['index.html', 'servicios.html', 'metodologias.html', 'nosotros.html'];


  for (const sitioWeb of sitiosWeb) {
    fetch(sitioWeb)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const elementos = doc.querySelectorAll('.contenido');

        for (const elemento of elementos) {
          const texto = elemento.textContent.toLowerCase();

          if (texto.includes(busqueda)) {
            // Mostrar resultado
            console.log(`Encontrado en ${sitioWeb}: ${elemento.textContent}`);
          }
        }
      });
  }
});



// Obtener la referencia al ícono de WhatsApp
const whatsappIcon = document.getElementById('whatsapp-icon');

// Agregar un event listener para detectar el desplazamiento de la página
window.addEventListener('scroll', function() {
    // Obtener la posición vertical actual de la página
    const scrollY = window.scrollY || window.pageYOffset;

    // Mostrar u ocultar el ícono de WhatsApp dependiendo del desplazamiento
    if (scrollY > 100) {
        whatsappIcon.style.display = 'block';
    } else {
        whatsappIcon.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-menu');
  const navLinks = document.querySelector('.nav-links');
  
  toggleButton.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});

if (window.innerWidth <= 768) {
  document.querySelectorAll('.expandible').forEach(item => {
      item.addEventListener('click', function() {
          this.classList.toggle('expandido'); // Alternar la clase "expandido" al hacer clic
          this.classList.toggle('mostrar'); // Agregar/Quitar la clase "mostrar" al hacer clic
      });
  });
}