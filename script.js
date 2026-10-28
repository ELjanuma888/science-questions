const preguntasFacil = [
    {
        question: "¿Qué gas absorben las plantas para hacer fotosíntesis?",
        answers: [
            { text: "Oxígeno", correct: false},
            { text: "Dióxido de carbono", correct: true},
            { text: "Nitrógeno", correct: false},
            { text: "Helio", correct: false},
        ],
        imagen: "imagenes/img-pregunta1-facil.jpg"
    },
    {
        question: "¿Qué cambio de estado ocurre cuando el hielo se derrite?",
        answers: [
            { text: "Fusión", correct: true},
            { text: "Evaporación", correct: false},
            { text: "Solidificación", correct: false},
            { text: "Condensación", correct: false},
        ],
        imagen: "imagenes/img-cuboshielo-facil.jpg"
    },
    {
        question: "¿Qué fuerza permite atraer a un imán un clip de hierro?",
        answers: [
            { text: "Gravedad", correct: false},
            { text: "Fricción", correct: false},
            { text: "Magnetismo", correct: true},
            { text: "Flotación", correct: false},
        ],
        imagen: "imagenes/img-iman-facil.avif"
    },
    {
        question: "¿Cuál de estos materiales conduce mejor el calor?",
        answers: [
            { text: "Madera", correct: false},
            { text: "Plástico", correct: false},
            { text: "Corcho", correct: false},
            { text: "Cobre", correct: true},
        ],
        imagen: "imagenes/img-termometro-facil.jpg"
    },
    {
        question: "¿En qué órganos ocurre principalmente el intercambio de oxígeno y dióxido de carbono?",
        answers: [
            { text: "Riñones", correct: false},
            { text: "Estómago", correct: false},
            { text: "Pulmones", correct: true},
            { text: "Hígado", correct: false},
        ],
        imagen: "imagenes/img-intercambiogaseoso-facil.png"
    },
    {
        question: "¿Qué células transportan principalmente el oxígeno a la sangre?",
        answers: [
            { text: "Neuronas", correct: false},
            { text: "Glóbulos rojos", correct: true},
            { text: "Plaquetas", correct: false},
            { text: "Glóbulos blancos", correct: false},
        ],
        imagen: "imagenes/img-celulasangre-facil.jpg"
    },
    {
        question: "¿A qué temperatura hierve el agua pura?",
        answers: [
            { text: "50 °C", correct: false},
            { text: "67 °C", correct: false},
            { text: "90 °C", correct: false},
            { text: "100 °C", correct: true},
        ],
        imagen: "imagenes/img-aguahierve-facil.webp"
    },
    {
        question: "¿Cuál es el símbolo químico del oxígeno?",
        answers: [
            { text: "Ox", correct: false},
            { text: "Og", correct: false},
            { text: "O", correct: true},
            { text: "H", correct: false},
        ],
        imagen: "imagenes/img-oxigeno-facil.jpg"
    },
    {
        question: "¿Qué parte de la planta absorbe principalmente el agua?",
        answers: [
            { text: "Flores", correct: false},
            { text: "Frutos", correct: false},
            { text: "Hojas", correct: false},
            { text: "Raíces", correct: true},
        ],
        imagen: "imagenes/img-arbol-facil.jpg"
    },
    {
        question: "¿Qué fuerza mantiene a la luna en órbita alrededor de la Tierra?",
        answers: [
            { text: "Fricción", correct: false},
            { text: "Gravedad", correct: true},
            { text: "Magnetismo", correct: false},
            { text: "Fuerza eléctrica", correct: false},
        ],
        imagen: "imagenes/img-lunatierra-facil.webp"
    }
];

const preguntasMedio = [
    {
        question: "¿Qué orgánulo celular realiza la fotosíntesis?",
        answers: [
            { text: "Mitocondria", correct: false},
            { text: "Cloroplasto", correct: true},
            { text: "Ribosomas", correct: false},
            { text: "Núcleo", correct: false},
        ],
        imagen: "imagenes/img-celulavegetal-medio.jpg"
    },
    {
        question: "¿Qué molécula contiene la información genética de los seres vivos?",
        answers: [
            { text: "Glucosa", correct: false},
            { text: "ADN", correct: true},
            { text: "Hemoglobina", correct: false},
            { text: "Almidón", correct: false},
        ],
        imagen: "imagenes/img-cromosoma-medio.jpg"
    },
    {
        question: "¿Que indica un pH de 2 en una disolución acuosa?",
        answers: [
            { text: "Que es neutra", correct: false},
            { text: "Que es básica", correct: false},
            { text: "Que es ácida", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ],
        imagen: "imagenes/img-ph-medio.jpg"
    },
    {
        question: "¿Qué partícula determina el número atómico de un elemento?",
        answers: [
            { text: "Protón", correct: true},
            { text: "Electrón", correct: false},
            { text: "Neutrón", correct: false},
            { text: "Molécula", correct: false},
        ],
        imagen: "imagenes/img-atomo-medio.jpg"
    },
    {
        question: "Si ambos padres tienen genotipo Aa, ¿Qué probabilidad hay de que su hijo tenga genotipo aa?",
        answers: [
            { text: "0%", correct: false},
            { text: "25%", correct: true},
            { text: "50%", correct: false},
            { text: "75%", correct: false},
        ],
        imagen: "imagenes/img-familia-medio.jpg"
    },
    {
        question: "Un automóvil recorre 120 km en 2 horas, ¿cuál es su rapidez media?",
        answers: [
            { text: "40", correct: false},
            { text: "50", correct: false},
            { text: "60", correct: true},
            { text: "240", correct: false},
        ],
        imagen: "imagenes/img-carro-medio.jpeg"
    },
    {
        question: "¿Cómo se llama la división celular que produce dos células hijas genéticamente similares?",
        answers: [
            { text: "Mitosis", correct: true},
            { text: "Meiosis", correct: false},
            { text: "Fecundación", correct: false},
            { text: "Mutación", correct: false},
        ],
        imagen: "imagenes/img-divisioncelular-medio.jpg"
    },
    {
        question: "¿Qué ocurre con la energía cinética de un objeto si aumenta su rapidez?",
        answers: [
            { text: "Disminuye siempre", correct: false},
            { text: "Aumenta", correct: true},
            { text: "Desaparece", correct: false},
            { text: "Permanece igual", correct: false},
        ],
        imagen: "imagenes/img-tren-medio.jpg"
    },
    {
        question: "¿En qué medio no puede propagarse el sonido?",
        answers: [
            { text: "Vacío", correct: true},
            { text: "Agua", correct: false},
            { text: "Aire", correct: false},
            { text: "Acero", correct: false},
        ],
        imagen: "imagenes/img-sonido-medio.jpeg"
    },
    {
        question: "¿Qué método permite separar un sólido insoluble de un líquido?",
        answers: [
            { text: "Destilación", correct: false},
            { text: "Filtración", correct: true},
            { text: "Evaporación", correct: false},
            { text: "Cristalización", correct: false},
        ],
        imagen: "imagenes/img-filtracion-medio.png"
    }
];

const preguntasDificil = [
    {
        question: "¿Qué proceso permite producir ARN a partir de una cadena de ADN?",
        answers: [
            { text: "Traducción", correct: false},
            { text: "Replicación", correct: false},
            { text: "Transcripción", correct: true},
            { text: "Mutación", correct: false},
        ],
        imagen: "imagenes/img-adn-dificil.jpg"
    },
    {
        question: "¿Cuál es la función principal de la meiosis?",
        answers: [
            { text: "Reparar tejidos dañados", correct: false},
            { text: "Producir células idénticas para el crecimiento", correct: false},
            { text: "Formar células sexuales con la mitad de cromosomas", correct: true},
            { text: "Duplicar el tamaño de las células", correct: false},
        ],
        imagen: "imagenes/img-divisioncelular-medio.jpg"
    },
    {
        question: "Un objeto de 4 kg recibe una fuerza neta de 20 n. ¿cuál es su aceleración?",
        answers: [
            { text: "5 m/s² ", correct: true},
            { text: "16 m/s²", correct: false},
            { text: "24 m/s²", correct: false},
            { text: "80 m/s²", correct: false},
        ],
        imagen: "imagenes/img-hombrepaja-dificil.webp"
    },
    {
        question: "¿Qué tipo de reacción ocurre cuando una sustancia pierde electrones?",
        answers: [
            { text: "Reducción", correct: false},
            { text: "Neutralización", correct: false},
            { text: "Oxidación", correct: true},
            { text: "Precipitación", correct: false},
        ],
        imagen: "imagenes/img-dosatomos-dificil.jpg"
    },
    {
        question: "Un objeto tiene una masa de 200 g y un volumen de 50 cm³. ¿cuál es su densidad?",
        answers: [
            { text: "0,25 g/cm³", correct: false},
            { text: "2 g/cm³", correct: false},
            { text: "4 g/cm³", correct: true},
            { text: "10 g/cm³", correct: false},
        ],
        imagen: "imagenes/img-densidadhuevos-dificil.jpg"
    },
    {
        question: "Según la ley de conservación de la energía, ¿qué ocurre con la energía mecánica de un objeto que cae sin resistencia del aire?",
        answers: [
            { text: "Desaparece durante la caída", correct: false},
            { text: "Se transforma completamente en energía química", correct: false},
            { text: "Permanece constante mientras la energía potencial se transforma en cinética", correct: true},
            { text: "Aumenta sin límite", correct: false},
        ],
        imagen: "imagenes/img-caer-dificil.png"
    },
    {
        question: "¿Qué relación ecológica existe entre una abeja que obtiene néctar de una flor y la flor que recibe ayuda para su polinización?",
        answers: [
            { text: "Parasitismo", correct: false},
            { text: "Mutualismo", correct: true},
            { text: "Competencia", correct: false},
            { text: "Depredación", correct: false},
        ],
        imagen: "imagenes/img-abejaflor-dificil.jpg"
    },
    {
        question: "Una resistencia de 6 ohmios se conecta a una batería de 12 voltios. ¿cuánta potencia eléctrica consume?",
        answers: [
            { text: "2 W", correct: false},
            { text: "12 W", correct: false},
            { text: "24 W", correct: true},
            { text: "72 W", correct: false},
        ],
        imagen: "imagenes/img-pilaresistencia-dificil.png"
    },
    {
        question: "¿Qué sucede con el equilibrio químico de una reacción exotérmica si aumenta la temperatura?",
        answers: [
            { text: "Se desplaza hacia los productos", correct: false},
            { text: "Se desplaza hacia los reactivos", correct: true},
            { text: "La reacción se detiene", correct: false},
            { text: "No puede cambiar", correct: false},
        ],
        imagen: "imagenes/img-equilibrio-dificil.png"
    },
    {
        question: "¿Qué proceso genera la mayor parte del atp durante la respiración celular aeróbica?",
        answers: [
            { text: "Glucólisis", correct: false},
            { text: "Fermentación", correct: false},
            { text: "Replicación del ADN", correct: false},
            { text: "Cadena de transporte de electrones y fosforilación oxidativa", correct: true},
        ],
        imagen: "imagenes/img-atp-dificil.jpg"
    }
];


const parametros = new URLSearchParams(window.location.search);
const nivel = parametros.get("nivel") || "facil";

const bancosDePreguntas = {
    facil: preguntasFacil,
    medio: preguntasMedio,
    dificil: preguntasDificil
};

const bancoSeleccionado = bancosDePreguntas[nivel] || preguntasFacil;

function seleccionarPreguntasAleatorias(banco, cantidad) {
    const preguntasMezcladas = [...banco];

    for (let i = preguntasMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [preguntasMezcladas[i], preguntasMezcladas[j]] =
            [preguntasMezcladas[j], preguntasMezcladas[i]];
    }

    return preguntasMezcladas.slice(0, cantidad);
}

let questions = seleccionarPreguntasAleatorias(bancoSeleccionado, 5);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");
const timerElement = document.getElementById("timer");
const leaderboardElement = document.getElementById("leaderboard");
const questionImage = document.getElementById("question-image");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
let answered = false;

let countdownInterval;

const countdownScreen = document.getElementById("countdown-screen");
const countdownNumber = document.getElementById("countdown-number");

// Mostrar PREPÁRATE y contar de 3 a 1
function iniciarCuentaRegresiva() {
    clearInterval(timerInterval);
    clearInterval(countdownInterval);

    let numero = 3;

    countdownScreen.hidden = false;
    countdownNumber.textContent = numero;

    countdownInterval = setInterval(() => {
        numero--;

        if (numero > 0) {
            countdownNumber.textContent = numero;

            // Reiniciar la animación de cada número
            countdownNumber.style.animation = "none";
            void countdownNumber.offsetWidth;
            countdownNumber.style.animation = "aparecerNumero 0.8s ease";

        } else {
            clearInterval(countdownInterval);

            countdownScreen.hidden = true;

            // Mostrar la primera pregunta
            showQuestion();
        }
    }, 1000);
}

const presentador = document.getElementById("presentador");

function mostrarPoseOriginal() {
    presentador.src = "imagenes/personaje.png";
}

function mostrarPoseCorrecta() {
    presentador.src = "imagenes/personaje-correcto.png";
}

function mostrarPoseIncorrecta() {
    presentador.src = "imagenes/personaje-incorrecto.png";
}

// Clave utilizada para guardar los puntajes en el navegador
const STORAGE_KEY = "quizCienciasTop10_" + nivel;

// Iniciar el cuestionario
function startQuiz() {
    clearInterval(timerInterval);
    clearInterval(countdownInterval);

    currentQuestionIndex = 0;
    questions = seleccionarPreguntasAleatorias(bancoSeleccionado, 5);
    score = 0;
    answered = false;
    correctCountFromHistory = 0;

    nextButton.innerHTML = "Siguiente";
    leaderboardElement.hidden = true;
    homeButton.style.display = "none";

    iniciarCuentaRegresiva();
}

// Mostrar pregunta
function showQuestion() {
    resetState();

    mostrarPoseOriginal();

    answered = false;

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;

    questionElement.textContent =
        questionNo + ". " + currentQuestion.question;

    if (currentQuestion.imagen) {
        questionImage.src = currentQuestion.imagen;
        questionImage.alt = "Imagen relacionada con la pregunta";
        questionImage.style.display = "block";
    } else {
        questionImage.removeAttribute("src");
        questionImage.style.display = "none";
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });

    startTimer();
}

// Reiniciar el estado de la pregunta
function resetState() {
    clearInterval(timerInterval);

    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

// Iniciar temporizador
function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Calcular puntos según el tiempo restante
function calculatePoints() {
    if (timeLeft >= 13) {
        return 1000;
    } else if (timeLeft >= 10) {
        return 800;
    } else if (timeLeft >= 7) {
        return 600;
    } else if (timeLeft >= 4) {
        return 400;
    } else if (timeLeft >= 1) {
        return 200;
    }

    return 0;
}

// Cuando el tiempo se acaba
function timeUp() {
    if (answered) return;

    answered = true;

    mostrarPoseIncorrecta();

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    const message = document.createElement("p");
    message.classList.add("points-earned");
    message.textContent = "¡Tiempo agotado! No ganaste puntos.";

    answerButtons.appendChild(message);

    nextButton.style.display = "block";
}

// Seleccionar una respuesta
function selectAnswer(e) {
    if (answered) return;

    answered = true;

    clearInterval(timerInterval);

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    let pointsEarned = 0;

    if (isCorrect) {
    pointsEarned = calculatePoints();
    score += pointsEarned;
    correctCountFromHistory++;

    selectedBtn.classList.add("correct");
    mostrarPoseCorrecta();
    } else {
        selectedBtn.classList.add("incorrect");
        mostrarPoseIncorrecta();
    }

    // Mostrar las respuestas correctas y bloquear los botones
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    // Mostrar los puntos ganados en esta pregunta
    const message = document.createElement("p");
    message.classList.add("points-earned");

    if (isCorrect) {
        message.textContent = `¡Correcto! Ganaste ${pointsEarned} puntos.`;
    } else {
        message.textContent = "Respuesta incorrecta. Ganaste 0 puntos.";
    }

    answerButtons.appendChild(message);

    nextButton.style.display = "block";
}

// Mostrar puntuación final y formulario de registro
function showScore() {
    resetState();

    mostrarPoseOriginal();

    questionElement.textContent = "¡Cuestionario terminado!";

    timerElement.textContent = "0";

    const resultMessage = document.createElement("p");
    resultMessage.classList.add("points-earned");
    resultMessage.textContent =
        `Tu puntaje final es: ${score} puntos.`;

    answerButtons.appendChild(resultMessage);

    const correctAnswers = document.createElement("p");
correctAnswers.classList.add("correct-answers");
correctAnswers.textContent =
    `Respuestas correctas: ${getCorrectAnswers()} de ${questions.length}`;

answerButtons.appendChild(correctAnswers);

    // Crear formulario
    const form = document.createElement("div");
    form.classList.add("score-form");

    const label = document.createElement("label");
    label.htmlFor = "player-name";
    label.textContent = "Escribe tu nombre para registrar tu puntaje:";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "player-name";
    input.placeholder = "Tu nombre";
    input.maxLength = 20;
    input.autocomplete = "off";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Guardar puntaje";

    const skipButton = document.createElement("button");
    skipButton.textContent = "Continuar sin guardar";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(saveButton);
    form.appendChild(skipButton);

    answerButtons.appendChild(form);

    // Guardar el resultado
    saveButton.addEventListener("click", saveScore);

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            saveScore();
        }
    });

    // Permitir continuar sin registrar el resultado
    skipButton.addEventListener("click", () => {
        showLeaderboard();
        finishResultScreen();
    });

    leaderboardElement.hidden = true;
}

// Contar las respuestas correctas
function getCorrectAnswers() {
    let correctCount = 0;

    // Esta variable se calcula usando las preguntas respondidas.
    // El puntaje no se utiliza para contar aciertos.
    const buttons = answerButtons.querySelectorAll(".btn.correct");

    // El resultado correcto se mantiene durante la partida.
    // Consultamos el registro de respuestas guardadas en memoria.
    return correctCountFromHistory;
}

// Historial de aciertos de la partida
let correctCountFromHistory = 0;

// Guardar puntaje y nombre
function saveScore() {
    const input = document.getElementById("player-name");
    const playerName = input.value.trim();

    if (playerName === "") {
        alert("Por favor, escribe tu nombre.");
        input.focus();
        return;
    }

    let scores = [];

    try {
        scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        if (!Array.isArray(scores)) {
            scores = [];
        }
    } catch (error) {
        scores = [];
    }

    // Añadir nuevo resultado
    scores.push({
        name: playerName,
        score: score,
        date: new Date().toISOString()
    });

    // Ordenar de mayor a menor
    scores.sort((a, b) => b.score - a.score);

    // Conservar solamente los diez mejores
    scores = scores.slice(0, 10);

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch (error) {
        alert("No se pudo guardar el puntaje en este navegador.");
        return;
    }

    // Mostrar confirmación y clasificación
    answerButtons.innerHTML = "";

    const message = document.createElement("p");
    message.classList.add("points-earned");
    message.textContent = "¡Tu puntaje se ha guardado correctamente!";

    answerButtons.appendChild(message);

    showLeaderboard();
    finishResultScreen();
}

// Mostrar los diez mejores puntajes
function showLeaderboard() {
    leaderboardElement.innerHTML = "";
    leaderboardElement.hidden = false;

    const title = document.createElement("h2");
    title.textContent = "TOP 10 - Mejores puntajes";

    leaderboardElement.appendChild(title);

    let scores = [];

    try {
        scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        if (!Array.isArray(scores)) {
            scores = [];
        }
    } catch (error) {
        scores = [];
    }

    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 10);

    if (scores.length === 0) {
        const message = document.createElement("p");
        message.textContent = "Todavía no hay puntajes registrados.";
        leaderboardElement.appendChild(message);
        return;
    }

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Posición", "Jugador", "Puntaje"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    scores.forEach((entry, index) => {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.textContent = index + 1;

        const nameCell = document.createElement("td");
        nameCell.textContent = entry.name;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = entry.score.toLocaleString("es-CO");

        row.appendChild(positionCell);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    leaderboardElement.appendChild(table);
}

// Terminar pantalla de resultados
function finishResultScreen() {
    nextButton.textContent = "Jugar de nuevo";
    nextButton.style.display = "block";

    homeButton.style.display = "block";
}

// Pasar a la siguiente pregunta
function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Botón siguiente
nextButton.addEventListener("click", () => {
    if (nextButton.textContent === "Jugar de nuevo") {
        correctCountFromHistory = 0;
        startQuiz();
    } else if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        showScore();
    }
});

// Iniciar el juego
startQuiz();

