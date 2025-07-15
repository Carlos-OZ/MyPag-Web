// Typed animation
var typed = new Typed("#typed", {
    strings: ["Desarrollador Full-Stack", "Análisis de Datos", "Planeamiento y Mejora Continua"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
});

// Theme toggle function
function theme() {
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');

    const isLight = document.body.classList.toggle('light');

    if (isLight) {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
    } else {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    }
}

// Menú toogle

const menuItem = document.querySelectorAll('.nav .item');

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menuItem.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});
