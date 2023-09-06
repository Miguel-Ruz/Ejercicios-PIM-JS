// Elementos del DOM
const body = document.body;
const modeSelect = document.getElementById("modeSelect");
const modeForm = document.getElementById("modeForm");

// Función para cambiar el modo
function cambiarModo() {
    const selectedMode = modeSelect.value;

    if (selectedMode === "dark") {
        // Modo Oscuro
        body.style.backgroundColor = "#333";
        body.style.color = "#fff";
    } else {
        // Modo Claro (por defecto)
        body.style.backgroundColor = "#fff";
        body.style.color = "#333";
    }
}

// Agregar un evento de escucha al formulario de selección de modo
modeForm.addEventListener("change", cambiarModo);
