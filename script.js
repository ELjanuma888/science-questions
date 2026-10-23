
const questions = [
    {
        question: "¿Qué gas absorben las plantas para hacer fotosíntesis?",
        answers: [
            { text: "Oxígeno", correct: false},
            { text: "Dióxido de carbono", correct: true},
            { text: "Nitrógeno", correct: false},
            { text: "Helio", correct: false},
        ]
    },
    {
        question: "¿Qué cambio de estado ocurre cuando el hielo se derrite?",
        answers: [
            { text: "Fusión", correct: true},
            { text: "Evaporación", correct: false},
            { text: "Solidificación", correct: false},
            { text: "Condensación", correct: false},
        ]
    },
    {
        question: "¿Qué fuerza permite atraer a un imán un clip de hierro?",
        answers: [
            { text: "Gravedad", correct: false},
            { text: "Fricción", correct: false},
            { text: "Magnetismo", correct: true},
            { text: "Flotación", correct: false},
        ]
    },
    {
        question: "¿Cuál de estos materiales conduce mejor el calor?",
        answers: [
            { text: "Madera", correct: false},
            { text: "Plástico", correct: false},
            { text: "Corcho", correct: false},
            { text: "Cobre", correct: true},
        ]
    },
    {
        question: "¿En qué órganos ocurre principalmente el intercambio de oxígeno y dióxido de carbono?",
        answers: [
            { text: "Riñones", correct: false},
            { text: "Estómago", correct: false},
            { text: "Pulmones", correct: true},
            { text: "Hígado", correct: false},
        ]
    },
    {
        question: "¿Qué células transportan principalmente el oxígeno a la sangre?",
        answers: [
            { text: "Neuronas", correct: false},
            { text: "Glóbulos rojos", correct: true},
            { text: "Plaquetas", correct: false},
            { text: "Glóbulos blancos", correct: false},
        ]
    },
    {
        question: "¿A qué temperatura hierve el agua pura?",
        answers: [
            { text: "50 °C", correct: false},
            { text: "67 °C", correct: false},
            { text: "90 °C", correct: false},
            { text: "100 °C", correct: true},
        ]
    },
    {
        question: "¿Cuál es el símbolo químico del oxígeno?",
        answers: [
            { text: "Ox", correct: false},
            { text: "Og", correct: false},
            { text: "O", correct: true},
            { text: "H", correct: false},
        ]
    },
    {
        question: "¿Qué parte de la planta absorbe principalmente el agua?",
        answers: [
            { text: "Flores", correct: false},
            { text: "Frutos", correct: false},
            { text: "Hojas", correct: false},
            { text: "Raíces", correct: true},
        ]
    },
    {
        question: "¿Qué fuerza mantiene a la luna en órbita alrededor de la Tierra?",
        answers: [
            { text: "Fricción", correct: false},
            { text: "Gravedad", correct: true},
            { text: "Magnetismo", correct: false},
            { text: "Fuerza eléctrica", correct: false},
        ]
    }   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Acertaste ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jugar de nuevo";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else if (nextButton.innerHTML === "Jugar de nuevo") {
        startQuiz();
    } else {
        showScore();
    }
});

startQuiz();