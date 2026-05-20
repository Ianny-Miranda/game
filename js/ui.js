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
    navigateTo("visual-novel");
    dialogueIndex = 0;
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
    navigateTo("visual-novel-choice");
}

function backToMenu() {
    resetGame();
    navigateTo("menu");
}

function backToSubMenu() {
    if (currentPhase === "cranio") {
        navigateTo("cranio-sublevel-choice");
    } else if (currentPhase === "medula") {
        navigateTo("medula-sublevel-choice");
    } else if (currentPhase === "vértebra") {
        navigateTo("vertebra-sublevel-choice");
    } else if (currentPhase === "tronco_encefálico") {
        navigateTo("tronco_encefálico-sublevel-choice");
    } else if (currentPhase === "cerebelo") {
        navigateTo("cerebelo-sublevel-choice");
    } else if (currentPhase === "nervos_cranianos") {
        navigateTo("nervos_cranianos-sublevel-choice");
    } else {
        navigateTo("visual-novel-choice");
    }
    resetGame();
}

// ---------- Menus de Subníveis ----------

function chooseCranioSublevel() {
    navigateTo("cranio-sublevel-choice");
}

function chooseMedulaSublevel() {
    navigateTo("medula-sublevel-choice");
}

function chooseVertebraSublevel() {
    navigateTo("vertebra-sublevel-choice");
}

function chooseTroncoSublevel() {
    navigateTo("tronco_encefálico-sublevel-choice");
}

function chooseCerebeloSublevel() {
    navigateTo("cerebelo-sublevel-choice");
}

function chooseNervosSublevel() {
    navigateTo("nervos_cranianos-sublevel-choice");
}

// ---------- Menu de Modo ----------

function chooseMode(phase, view) {
    currentPhase = phase;
    currentView = view;
    navigateTo("mode-menu");
}

function backToVisualNovelChoice() {
    navigateTo("visual-novel-choice");
}

function backToSublevelChoice() {
    if (currentPhase === "cranio") {
        navigateTo("cranio-sublevel-choice");
    } else if (currentPhase === "medula") {
        navigateTo("medula-sublevel-choice");
    } else if (currentPhase === "vértebra") {
        navigateTo("vertebra-sublevel-choice");
    } else if (currentPhase === "tronco_encefálico") {
        navigateTo("tronco_encefálico-sublevel-choice");
    } else if (currentPhase === "cerebelo") {
        navigateTo("cerebelo-sublevel-choice");
    } else if (currentPhase === "nervos_cranianos") {
        navigateTo("nervos_cranianos-sublevel-choice");
    }
    resetGame();
}

// ---------- Feedback da Médica ----------

function showFeedbackMedica() {
    const medicSprite = document.getElementById("medic-sprite");
    const feedbackText = document.getElementById("feedback-text");

    if (!medicSprite || !feedbackText) {
        console.error("Elementos do feedback da médica não encontrados no DOM.");
        return;
    }

    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

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

    navigateTo("feedback-medica");
}
