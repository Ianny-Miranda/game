// ============================================
// UI - Navegação entre menus e diálogos
// ============================================

let dialogueIndex = 0;

const dialogues = [
    { text: "Bem-vindo ao Hospital Geral. Sou a Drª Isabella. Fiquei sabendo que é o novo estagiário, prazer.", background: "https://i.imgur.com/XM1jcWJ.jpg" },
    { text: "Acredito que esteja um pouco nervoso, mas vou te ajudar, não se preocupe.", background: "https://i.imgur.com/XM1jcWJ.jpg" },
    { text: "Antes que possa ver os pacientes, acho uma boa ideia revisarmos o básico. A começar por", background: "https://i.imgur.com/XM1jcWJ.jpg" },
    { text: "Aqui você pode aprender sobre a anatomia dos principais sistemas do corpo.", background: "https://i.imgur.com/XM1jcWJ.jpg" },
    { text: "O que você gostaria de aprender hoje?", background: "https://i.imgur.com/XM1jcWJ.jpg" }
];

// ---------- Navegação Principal ----------

function showSubMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("visual-novel").style.display = "flex";
    nextDialogue();
}

function nextDialogue() {
    if (dialogueIndex < dialogues.length) {
        const currentDialogue = dialogues[dialogueIndex];
        document.getElementById("dialogue-text").innerText = currentDialogue.text;
        document.getElementById("visual-novel-background").style.backgroundImage = `url('${currentDialogue.background}')`;
        dialogueIndex++;
    } else {
        showVisualNovelChoice();
    }
}

function showVisualNovelChoice() {
    document.getElementById("visual-novel").style.display = "none";
    document.getElementById("visual-novel-choice").style.display = "flex";
    document.getElementById("visual-novel-choice-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function backToMenu() {
    const elementsToHide = [
        "game", "cranio-sublevel-choice", "medula-sublevel-choice",
        "vertebra-sublevel-choice", "tronco_encefálico-sublevel-choice",
        "cerebelo-sublevel-choice", "mode-menu", "feedback-medica"
    ];
    elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.body.style.backgroundImage = "url('https://i.imgur.com/naeZ29X.jpg')";
    resetGame();
}

function backToSubMenu() {
    const game = document.getElementById("game");
    if (game) game.style.display = "none";

    document.body.style.backgroundImage = "url('https://i.imgur.com/naeZ29X.jpg')";

    if (currentPhase === "cranio") {
        document.getElementById("cranio-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "medula") {
        document.getElementById("medula-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "vértebra") {
        document.getElementById("vertebra-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "tronco_encefálico") {
        document.getElementById("tronco_encefálico-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "cerebelo") {
        document.getElementById("cerebelo-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "nervos_cranianos") {
        document.getElementById("nervos_cranianos-sublevel-choice").style.display = "flex";
    }

    resetGame();
}

// ---------- Menus de Subníveis ----------

function chooseCranioSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("cranio-sublevel-choice").style.display = "flex";
    document.getElementById("cranio-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function chooseMedulaSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("medula-sublevel-choice").style.display = "flex";
    document.getElementById("medula-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function chooseVertebraSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("vertebra-sublevel-choice").style.display = "flex";
    document.getElementById("vertebra-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function chooseTroncoSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("tronco_encefálico-sublevel-choice").style.display = "flex";
    document.getElementById("tronco_encefálico-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function chooseCerebeloSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("cerebelo-sublevel-choice").style.display = "flex";
    document.getElementById("cerebelo-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function chooseNervosSublevel() {
    document.getElementById("visual-novel-choice").style.display = "none";
    document.getElementById("nervos_cranianos-sublevel-choice").style.display = "flex";
    document.getElementById("nervos_cranianos-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

// ---------- Menu de Modo ----------

function chooseMode(phase, view) {
    currentPhase = phase;
    currentView = view;
    document.getElementById("cranio-sublevel-choice").style.display = "none";
    document.getElementById("medula-sublevel-choice").style.display = "none";
    document.getElementById("vertebra-sublevel-choice").style.display = "none";
    document.getElementById("tronco_encefálico-sublevel-choice").style.display = "none";
    document.getElementById("cerebelo-sublevel-choice").style.display = "none";
    document.getElementById("nervos_cranianos-sublevel-choice").style.display = "none";
    document.getElementById("mode-menu").style.display = "flex";
    document.getElementById("mode-menu-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
}

function backToVisualNovelChoice() {
    const menus = [
        "cranio-sublevel-choice", "medula-sublevel-choice",
        "vertebra-sublevel-choice", "tronco_encefálico-sublevel-choice",
        "cerebelo-sublevel-choice", "nervos_cranianos-sublevel-choice"
    ];
    menus.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    document.getElementById("visual-novel-choice").style.display = "flex";
}

function backToSublevelChoice() {
    document.getElementById("mode-menu").style.display = "none";
    if (currentPhase === "cranio") {
        document.getElementById("cranio-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "medula") {
        document.getElementById("medula-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "vértebra") {
        document.getElementById("vertebra-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "tronco_encefálico") {
        document.getElementById("tronco_encefálico-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "cerebelo") {
        document.getElementById("cerebelo-sublevel-choice").style.display = "flex";
    } else if (currentPhase === "nervos_cranianos") {
        document.getElementById("nervos_cranianos-sublevel-choice").style.display = "flex";
    }
    resetGame();
}

// ---------- Feedback da Médica ----------

function showFeedbackMedica() {
    const feedbackMedica = document.getElementById("feedback-medica");
    const medicSprite = document.getElementById("medic-sprite");
    const feedbackText = document.getElementById("feedback-text");

    if (!feedbackMedica || !medicSprite || !feedbackText) {
        console.error("Elementos do feedback da médica não encontrados no DOM.");
        return;
    }

    const percentage = (correctAnswers / totalQuestions) * 100;

    if (percentage === 100) {
        medicSprite.src = "https://i.imgur.com/7kDMzXJ.jpg";
        feedbackText.innerText = "Incrível! Você acertou todas as perguntas! Tenho certeza que o hospital estará em boas mãos!";
    } else if (percentage >= 50) {
        medicSprite.src = "https://i.imgur.com/jR1uYPi.png";
        feedbackText.innerText = "Bom trabalho! Você acertou a maioria das perguntas. Continue estudando!";
    } else {
        medicSprite.src = "https://i.imgur.com/5UAjfs9.png";
        feedbackText.innerText = "Você errou muitas perguntas. Não desanime! Revise o conteúdo e tente novamente.";
    }

    feedbackMedica.style.display = "flex";
    const game = document.getElementById("game");
    if (game) game.style.display = "none";
}
