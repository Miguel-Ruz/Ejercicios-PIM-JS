// Preguntas y respuestas
const questions = [
    { question: "¿Cuál es la capital de Francia?", answer: "París" },
    { question: "¿Cuántas patas tiene un perro?", answer: "4" },
    { question: "¿En qué año se fundó la ONU?", answer: "1945" }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;

// Elementos del DOM
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score");
const effectivenessText = document.getElementById("effectiveness");

// Función para mostrar la siguiente pregunta
function showNextQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        questionText.textContent = questions[currentQuestionIndex].question;
        answerInput.value = "";
        resultText.textContent = "¡Buena suerte!";
    } else {
        finishGame();
    }
}

// Función para finalizar el juego
function finishGame() {
    questionText.textContent = "Juego terminado";
    answerInput.style.display = "none";
    submitButton.style.display = "none";
    const percentage = (score / totalQuestions) * 100;
    scoreText.textContent = score;
    effectivenessText.textContent = percentage.toFixed(2) + "%";
}

// Función para verificar la respuesta
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultText.textContent = "¡Respuesta Correcta!";
        score++;
    } else {
        resultText.textContent = "¡Respuesta Incorrecta!";
        // Generar penitencia aleatoria
        const penalties = ["Canta una canción", "Baila por 30 segundos", "Habla como un robot por 1 minuto"];
        const randomPenalty = penalties[Math.floor(Math.random() * penalties.length)];
        resultText.textContent += " " + randomPenalty;
    }

    currentQuestionIndex++;
    showNextQuestion();
}

// Agregar evento de clic al botón de enviar
submitButton.addEventListener("click", checkAnswer);

// Mostrar la primera pregunta al cargar la página
showNextQuestion();
