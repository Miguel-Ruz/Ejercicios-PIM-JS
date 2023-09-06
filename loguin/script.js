// Datos de usuarios y contraseñas almacenados en un map
const usuarios = new Map();
usuarios.set("usuario1", "contrasena1");
usuarios.set("usuario2", "contrasena2");
usuarios.set("usuario3", "contrasena3");

// Función para validar el inicio de sesión
function validarInicioSesion(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

// Dentro de la función validarInicioSesion() después de la validación exitosa
if (usuarios.has(username) && usuarios.get(username) === password) {
    // Redireccionar a la página de bienvenida
    window.location.href = "bienvenida.html";
} else {
    // Mostrar mensaje de error
    const errorElement = document.getElementById("error");
    errorElement.textContent = "Usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.";
}

}

// Agregar un evento de escucha al formulario
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", validarInicioSesion);
