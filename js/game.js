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

/**
 * Rola a página para garantir que o input fique visível (útil em mobile
 * quando o teclado virtual aparece).
 */
function scrollInputIntoView() {
    const inputContainer = document.getElementById("input-container");
    if (inputContainer) {
        setTimeout(() => {
            inputContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}

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

    const img = document.getElementById("image");
    correctAnswers = 0;
    totalQuestions = phases[phase][view].points.length;
    shuffledPoints = shuffleArray([...phases[phase][view].points]);
    currentQuestionIndex = 0;

    // Aguarda a imagem carregar para garantir que naturalWidth/naturalHeight
    // estejam disponíveis para o cálculo correto de posição dos targets
    img.onload = () => {
        if (mode === 'prova') {
            startProvaQuestion();
        } else if (mode === 'escrita') {
            startWritingMode();
        } else {
            loadQuestions();
        }
    };
    img.src = phases[phase][view].image;

    // Se a imagem já estava em cache, o onload pode não disparar
    if (img.complete && img.naturalWidth > 0) {
        img.onload = null;
        if (mode === 'prova') {
            startProvaQuestion();
        } else if (mode === 'escrita') {
            startWritingMode();
        } else {
            loadQuestions();
        }
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

        const size = getTargetSize(point.size);
        target.style.width = size.width;
        target.style.height = size.height;

        const pos = pxToPercent(point.top, point.left);
        target.style.top = pos.top;
        target.style.left = pos.left;

        // Suporte tanto a click quanto a touch para mobile
        target.addEventListener('click', (e) => checkAnswer(point.name, target));
        target.addEventListener('touchend', (e) => {
            e.preventDefault();
            checkAnswer(point.name, target);
        });
        
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
        feedback.innerText = `Incorreto! Você clicou em: ${structure}.`;
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
    }, 2500);
}

// ---------- Modo Escrita ----------

function startWritingMode() {
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    const currentQuestion = shuffledPoints[currentQuestionIndex];
    const target = document.createElement("div");
    target.className = "target blinking";

    const size = getTargetSize(currentQuestion.size);
    target.style.width = size.width;
    target.style.height = size.height;

    const pos = pxToPercent(currentQuestion.top, currentQuestion.left);
    target.style.top = pos.top;
    target.style.left = pos.left;
    targetsContainer.appendChild(target);

    const existingInput = document.getElementById("input-container");
    if (existingInput) existingInput.remove();

    document.getElementById("question").innerHTML = `Digite o nome da estrutura que está piscando:`;

    const inputContainer = document.createElement("div");
    inputContainer.id = "input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.autocorrect = "off";
    input.spellcheck = false;
    input.placeholder = "Digite aqui...";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Enviar";

    // Função de submit compartilhada
    const submitWritingAnswer = () => {
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

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === "Go") {
            event.preventDefault();
            submitButton.click();
        }
    });

    // Em mobile, ao perder foco, não atrasa o fluxo
    input.addEventListener("blur", () => {
        // Pequeno delay para permitir clique no botão
    });

    submitButton.onclick = submitWritingAnswer;

    inputContainer.appendChild(input);
    inputContainer.appendChild(submitButton);
    document.getElementById("question-container").appendChild(inputContainer);
    
    // Foca e rola para o input (importante em mobile com teclado virtual)
    setTimeout(() => {
        input.focus();
        scrollInputIntoView();
    }, 100);
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

    const img = document.getElementById("image");

    if (shuffledPoints.length > 0) {
        const firstQuestion = shuffledPoints[0];
        img.onload = () => {
            startProvaQuestion();
        };
        img.src = phases[firstQuestion.phase][firstQuestion.view].image;

        if (img.complete && img.naturalWidth > 0) {
            img.onload = null;
            startProvaQuestion();
        }
    } else {
        startProvaQuestion();
    }
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
    if (!currentQuestion || !currentQuestion.phase || !currentQuestion.view || !phases[currentQuestion.phase] || !phases[currentQuestion.phase][currentQuestion.view]) {
        console.error("Questão inválida para prova:", currentQuestion);
        showEndGame();
        return;
    }

    const phaseData = phases[currentQuestion.phase][currentQuestion.view];
    const img = document.getElementById("image");
    img.src = phaseData.image;

    const showTarget = () => {
        const targetsContainer = document.getElementById("targets");
        targetsContainer.innerHTML = "";

        const target = document.createElement("div");
        target.className = "target blinking";

        const size = getTargetSize(currentQuestion.question.size);
        target.style.width = size.width;
        target.style.height = size.height;

        const pos = pxToPercent(currentQuestion.question.top, currentQuestion.question.left);
        target.style.top = pos.top;
        target.style.left = pos.left;
        targetsContainer.appendChild(target);
    };

    // Aguarda a imagem carregar para posicionar corretamente
    if (img.complete && img.naturalWidth > 0) {
        showTarget();
    } else {
        img.onload = showTarget;
    }

    document.getElementById("question").innerHTML = `Digite o nome da estrutura que está piscando:`;

    const newInputContainer = document.createElement("div");
    newInputContainer.id = "input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.autocorrect = "off";
    input.spellcheck = false;
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
        if (e.key === "Enter" || e.key === "Go") {
            e.preventDefault();
            submitAnswer();
        }
    });
    submitButton.addEventListener("click", submitAnswer);

    newInputContainer.appendChild(input);
    newInputContainer.appendChild(submitButton);
    document.getElementById("question-container").appendChild(newInputContainer);
    
    setTimeout(() => {
        input.focus();
        scrollInputIntoView();
    }, 100);
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
