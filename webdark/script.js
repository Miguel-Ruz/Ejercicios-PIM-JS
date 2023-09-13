// Elementos del DOM
const container = document.querySelector(".container");
const themeToggle = document.getElementById("themeToggle");

// Función para cambiar el tema
function cambiarTema() {
    if (themeToggle.checked) {
        // Modo Oscuro
        container.classList.remove("light");
        container.classList.add("dark");
    } else {
        // Modo Claro (por defecto)
        container.classList.remove("dark");
        container.classList.add("light");
    }
}

// Evento de escucha al toggle de tema
themeToggle.addEventListener("change", cambiarTema);

// Llamar a la función inicial para establecer el tema predeterminado
cambiarTema();
