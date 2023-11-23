const questions = [
    {
        question: "Qual é o nome do diretor de Hogwarts?",
        options: ["Alvo Dumbledore", "Severo Snape", "Rúbeo Hagrid", "Minerva McGonagall"],
        correctAnswer: "Alvo Dumbledore"
    },
    {
        question: "Qual é a casa de Harry Potter em Hogwarts?",
        options: ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"],
        correctAnswer: "Grifinória"
    },
    {
        question: "Qual é a matéria preferida de Hermione Granger?",
        options: ["Poções", "Defesa Contra as Artes das Trevas", "Adivinhação", "Transfiguração"],
        correctAnswer: "Transfiguração"
    },
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQ = questions[currentQuestion];

    if (currentQ) {
        questionContainer.innerHTML = `
            <h2>${currentQ.question}</h2>
            ${currentQ.options.map(option => `<button class="btn" onclick="checkAnswer('${option}')">${option}</button>`).join('')}
        `;
    } else {
        showResult();
    }
}

function checkAnswer(answer) {
    const currentQ = questions[currentQuestion];

    if (currentQ.correctAnswer === answer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p>Você acertou ${score} de ${questions.length} perguntas!</p>`;
}

function nextQuestion() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    showQuestion();
}

window.onload = startGame;