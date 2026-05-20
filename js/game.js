// ============================================
// Game - Lógica principal do Quiz de Anatomia
// ============================================

// ---------- Estado Global ----------
let currentPhase = null;
let currentView = null;
let currentMode = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let shuffledPoints = [];
let timer = null;

// ---------- Inicialização ----------

window.onload = () => {
    if (isSmartphone()) {
        alert("A versão mobile do jogo ainda não está pronta. Por favor, acesse pelo computador.");
        window.location.href = "aviso-mobile.html";
    }
    playBackgroundMusic();
};

// ---------- Modo Padrão (Clique nos Pontos) ----------

function startGame(phase, view, mode) {
    if (!phases[phase] || !phases[phase][view]) {
        console.error(`Fase ou visualização não encontrada: ${phase} - ${view}`);
        alert("Erro: Fase ou visualização não encontrada. Verifique a configuração do jogo.");
        return;
    }

    resetGame();
    currentPhase = phase;
    currentView = view;
    currentMode = mode;

    const timerElement = document.getElementById("timer");
    if (mode === "prova") {
        timerElement.style.display = "block";
    } else {
        timerElement.style.display = "none";
    }

    navigateTo("game");

    document.getElementById("image").src = phases[phase][view].image;
    correctAnswers = 0;
    totalQuestions = phases[phase][view].points.length;
    shuffledPoints = shuffleArray([...phases[phase][view].points]);
    currentQuestionIndex = 0;

    if (mode === 'prova') {
        startProvaQuestion();
    } else if (mode === 'escrita') {
        startWritingMode();
    } else {
        loadQuestions();
    }
}

function loadQuestions() {
    const inputContainer = document.getElementById("input-container");
    if (inputContainer) inputContainer.remove();

    const phaseData = phases[currentPhase][currentView];
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";
    document.getElementById("feedback").innerText = '';

    const currentQuestion = shuffledPoints[currentQuestionIndex];

    phaseData.points.forEach(point => {
        const target = document.createElement("div");
        target.className = "target";

        if (point.size === "micro") {
            target.style.width = "10px";  target.style.height = "10px";
        } else if (point.size === "small") {
            target.style.width = "15px";  target.style.height = "15px";
        } else if (point.size === "large") {
            target.style.width = "30px";  target.style.height = "30px";
        } else {
            target.style.width = "20px";  target.style.height = "20px";
        }

        target.style.top = point.top;
        target.style.left = point.left;
        target.onclick = () => checkAnswer(point.name, target);
        targetsContainer.appendChild(target);
    });

    document.getElementById("question").innerHTML =
        `Clique no ponto correspondente a: <span class="structure-name">${currentQuestion.name.toUpperCase()}</span>`;
}

function checkAnswer(structure, target) {
    const correctAnswer = shuffledPoints[currentQuestionIndex].name;
    const feedback = document.getElementById("feedback");

    if (structure === correctAnswer) {
        target.classList.add("correct");
        feedback.innerText = `Correto! A estrutura é: ${correctAnswer}`;
        feedback.style.color = 'green';
        correctAnswers++;
        playCorrectSound();
    } else {
        target.classList.add("incorrect");
        feedback.innerText = `Incorreto! A estrutura correta é: ${correctAnswer}`;
        feedback.style.color = 'red';
        playWrongSound();
    }

    setTimeout(() => {
        currentQuestionIndex++;
        updateProgressBar();
        updateScore();

        if (currentQuestionIndex < shuffledPoints.length) {
            document.getElementById("question").innerHTML =
                `Clique no ponto correspondente a: <span class="structure-name">${shuffledPoints[currentQuestionIndex].name.toUpperCase()}</span>`;
        } else {
            showEndGame();
        }
        feedback.innerText = '';
    }, 1000);
}

// ---------- Modo Escrita ----------

function startWritingMode() {
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    const currentQuestion = shuffledPoints[currentQuestionIndex];
    const target = document.createElement("div");
    target.className = "target blinking";
    target.style.top = currentQuestion.top;
    target.style.left = currentQuestion.left;
    target.style.width = "20px";
    target.style.height = "20px";
    targetsContainer.appendChild(target);

    const existingInput = document.getElementById("input-container");
    if (existingInput) existingInput.remove();

    document.getElementById("question").innerHTML = `Digite o nome da estrutura que está piscando:`;

    const inputContainer = document.createElement("div");
    inputContainer.id = "input-container";
    inputContainer.style.marginTop = "20px";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Digite aqui...";
    input.style.padding = "10px";
    input.style.fontSize = "16px";
    input.style.borderRadius = "5px";
    input.style.border = "2px solid #800020";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Enviar";
    submitButton.style.padding = "10px 20px";
    submitButton.style.marginLeft = "10px";
    submitButton.style.backgroundColor = "#800020";
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "5px";
    submitButton.style.cursor = "pointer";

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") submitButton.click();
    });

    submitButton.onclick = () => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = currentQuestion.name.toLowerCase();
        const isCorrect = checkSimilarity(userAnswer, correctAnswer);
        const feedback = document.getElementById("feedback");

        if (isCorrect) {
            feedback.innerText = `Correto! A estrutura é: ${currentQuestion.name}`;
            feedback.style.color = 'green';
            correctAnswers++;
            playCorrectSound();
        } else {
            feedback.innerText = `Incorreto! A estrutura correta é: ${currentQuestion.name}`;
            feedback.style.color = 'red';
            playWrongSound();
        }

        setTimeout(() => {
            currentQuestionIndex++;
            updateProgressBar();
            updateScore();

            if (currentQuestionIndex < shuffledPoints.length) {
                startWritingMode();
            } else {
                showEndGame();
            }
        }, 1000);
    };

    inputContainer.appendChild(input);
    inputContainer.appendChild(submitButton);
    document.getElementById("question-container").appendChild(inputContainer);
    input.focus();
}

// ---------- Modo Prova ----------

function startProvaMode1() {
    if (!phases) return;
    const allQuestions = collectAllQuestions(["cranio", "vértebra"]);
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 20);
    setupProvaMode(selectedQuestions);
}

function startProvaMode2() {
    if (!phases) return;
    const allQuestions = collectAllQuestions(["medula", "tronco_encefálico", "cerebelo", "nervos_cranianos"]);
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 20);
    setupProvaMode(selectedQuestions);
}

function collectAllQuestions(phasesList) {
    const allQuestions = [];
    phasesList.forEach(phase => {
        if (!phases[phase]) return;
        const views = Object.keys(phases[phase]);
        views.forEach(view => {
            if (!phases[phase][view]) return;
            phases[phase][view].points.forEach(question => {
                allQuestions.push({ phase, view, question });
            });
        });
    });
    return allQuestions;
}

function setupProvaMode(selectedQuestions) {
    resetGame();
    currentMode = "prova";
    shuffledPoints = selectedQuestions;
    totalQuestions = 20;
    currentQuestionIndex = 0;

    navigateTo("game");
    document.getElementById("timer").style.display = "block";

    startProvaQuestion();
}

function startProvaQuestion() {
    if (timer) clearInterval(timer);

    let timeLeft = 30;
    document.getElementById("time").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleProvaAnswer();
        }
    }, 1000);

    const existingInput = document.getElementById("input-container");
    if (existingInput) existingInput.remove();

    const currentQuestion = shuffledPoints[currentQuestionIndex];
    if (!currentQuestion) return;

    const phaseData = phases[currentQuestion.phase][currentQuestion.view];
    document.getElementById("image").src = phaseData.image;

    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    const target = document.createElement("div");
    target.className = "target blinking";
    target.style.top = currentQuestion.question.top;
    target.style.left = currentQuestion.question.left;
    target.style.width = "20px";
    target.style.height = "20px";
    targetsContainer.appendChild(target);

    document.getElementById("question").innerHTML = `Digite o nome da estrutura que está piscando:`;

    const newInputContainer = document.createElement("div");
    newInputContainer.id = "input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Digite aqui...";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Enviar";

    const submitAnswer = () => {
        clearInterval(timer);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = currentQuestion.question.name.toLowerCase();

        if (!userAnswer) {
            alert("Por favor, digite uma resposta!");
            return;
        }

        const feedback = document.getElementById("feedback");
        if (checkSimilarity(userAnswer, correctAnswer)) {
            feedback.innerText = `Correto! A estrutura é: ${currentQuestion.question.name}`;
            feedback.style.color = 'green';
            correctAnswers++;
            playCorrectSound();
        } else {
            feedback.innerText = `Incorreto! A estrutura correta é: ${currentQuestion.question.name}`;
            feedback.style.color = 'red';
            playWrongSound();
        }

        updateProgressBar();
        updateScore();

        currentQuestionIndex++;
        if (currentQuestionIndex < 20) {
            setTimeout(startProvaQuestion, 1000);
        } else {
            showEndGame();
        }
    };

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") submitAnswer();
    });
    submitButton.addEventListener("click", submitAnswer);

    newInputContainer.appendChild(input);
    newInputContainer.appendChild(submitButton);
    document.getElementById("question-container").appendChild(newInputContainer);
    input.focus();
}

function handleProvaAnswer() {
    const currentQuestion = shuffledPoints[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    feedback.innerText = `Tempo esgotado! A estrutura correta é: ${currentQuestion.question.name}`;
    feedback.style.color = 'red';
    playWrongSound();

    updateProgressBar();
    updateScore();

    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
        setTimeout(startProvaQuestion, 1000);
    } else {
        showEndGame();
    }
}

// ---------- Pontuação e Progresso ----------

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const percentage = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${percentage}%`;
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    const congratsElement = document.getElementById("congrats");
    const percentage = (correctAnswers / totalQuestions) * 100;
    scoreElement.innerText = `Acertos: ${correctAnswers} / ${totalQuestions} (${percentage.toFixed(0)}%)`;

    if (percentage === 100 && totalQuestions > 0) {
        congratsElement.style.display = "block";
        playVictorySound();
    } else {
        congratsElement.style.display = "none";
    }
}

function showEndGame() {
    const feedback = document.getElementById("feedback");
    const voltarButton = document.getElementById("voltar-button");
    const continuarButton = document.getElementById("continuar-button");

    if (!feedback || !voltarButton || !continuarButton) {
        console.error("Elementos não encontrados no DOM.");
        return;
    }

    feedback.innerText = `Jogo finalizado! Você acertou ${correctAnswers} de ${totalQuestions} pontos.`;
    feedback.style.color = correctAnswers === totalQuestions ? 'green' : 'red';

    voltarButton.style.display = "none";
    continuarButton.style.display = "block";
}

// ---------- Reset ----------

function resetGame() {
    if (timer) clearInterval(timer);

    currentPhase = null;
    currentView = null;
    currentMode = null;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalQuestions = 0;
    shuffledPoints = [];

    const progressBar = document.getElementById("progress-bar");
    if (progressBar) progressBar.style.width = "0%";

    const timerElement = document.getElementById("timer");
    if (timerElement) timerElement.style.display = "none";

    const voltarButton = document.getElementById("voltar-button");
    const continuarButton = document.getElementById("continuar-button");
    if (voltarButton) voltarButton.style.display = "block";
    if (continuarButton) continuarButton.style.display = "none";
}
