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

    // Esta línea alterna la clase 'light' y devuelve true si la clase fue *añadida* (nuevo tema CLARO),
    // o false si la clase fue *removida* (nuevo tema OSCURO).
    const isNowLightMode = document.body.classList.toggle('light');

    if (isNowLightMode) { // Si el tema *acaba de pasar a* CLARO
        // Estamos en modo CLARO, así que el botón debe mostrar el ícono de la LUNA (para cambiar a oscuro)
        darkBtn.style.display = 'block'; // Muestra la luna
        lightBtn.style.display = 'none'; // Oculta el sol
    } else { // Si el tema *acaba de pasar a* OSCURO
        // Estamos en modo OSCURO, así que el botón debe mostrar el ícono del SOL (para cambiar a claro)
        darkBtn.style.display = 'none'; // Oculta la luna
        lightBtn.style.display = 'block'; // Muestra el sol
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
