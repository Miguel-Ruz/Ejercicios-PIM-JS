// Preguntas y respuestas
const questions = [
    { question: "¿Cuál es la capital de Francia?", answer: "París" },
    { question: "¿Cuántas patas tiene un perro?", answer: "4" },
    { question: "¿En qué año se fundó la ONU?", answer: "1945" }
];

// Variables
let currentQuestionIndex = 0; // Aquí llevamos un registro de la pregunta actual.
let score = 0; // Guardamos cuántas respuestas correctas has dado.
let totalQuestions = questions.length; // Esto te dice cuántas preguntas hay en total.

// Elementos del DOM (Partes de la página web)
const questionText = document.getElementById("question-text"); // pregunta en la página web
const answerInput = document.getElementById("answer-input"); // campo de entrada de respuesta
const submitButton = document.getElementById("submit-button"); // verificar la respuesta
const resultText = document.getElementById("result-text"); // Mostramos si la respuesta es correcta o incorrecta
const scoreText = document.getElementById("score"); // Mostramos el puntaje total
const effectivenessText = document.getElementById("effectiveness"); // Efectividad en el juego

// Función para mostrar la siguiente pregunta
function showNextQuestion() {
    // Si no has respondido todas las preguntas, muestra la siguiente
    if (currentQuestionIndex < totalQuestions) {
        questionText.textContent = questions[currentQuestionIndex].question; // Muestra la pregunta actual
        answerInput.value = ""; // Borra la respuesta anterior
        resultText.textContent = "¡Buena suerte!"; // Te desea suerte para la siguiente pregunta
    } else {
        // Si ya respondiste a todas las preguntas termina el juego.
        finishGame();
    }
}

// Función para finalizar el juego
function finishGame() {
    questionText.textContent = "Juego terminado"; // Muestra que el juego ha terminado
    answerInput.style.display = "none"; // Oculta la casilla de respuesta
    submitButton.style.display = "none"; // Oculta el botón de enviar
    const percentage = (score / totalQuestions) * 100; // Calcula el porcentaje de respuestas correctas
    scoreText.textContent = score; // Muestra el puntaje
    effectivenessText.textContent = percentage.toFixed(2) + "%"; // Muestra la efectividad en el juego
}

// Función para verificar la respuesta
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase(); // Obtiene la respuesta 
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase(); // Obtiene la respuesta correcta en minúsculas.

    if (userAnswer === correctAnswer) {
        resultText.textContent = "¡Respuesta Correcta!"; // Si la respuesta es correcta, muestra este mensaje.
        score++; // Aumenta puntaje en una unidad
    } else {
        resultText.textContent = "¡Respuesta Incorrecta!"; // Si la respuesta está equivocada, muestra este mensaje.

        // Luego, elige una penitencia aleatoria
        const penalties = ["Canta una canción", "Baila por 30 segundos", "Habla como un robot por 1 minuto"];
        const randomPenalty = penalties[Math.floor(Math.random() * penalties.length)];
        resultText.textContent += " " + randomPenalty; // Agrega la penitencia al mensaje
    }

    currentQuestionIndex++; // Avanza a la siguiente pregunta
    showNextQuestion(); // Muestra la siguiente pregunta o finaliza el juego si ya se terminaron todas
}

submitButton.addEventListener("click", checkAnswer);

// Mostrar la primera pregunta al cargar la página
showNextQuestion();