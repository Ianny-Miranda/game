// ============================================
// Router - Sistema SPA de Roteamento
// ============================================

const routes = {
    "menu": {
        name: "menu",
        show: () => {
            document.getElementById("menu").style.display = "flex";
            document.body.style.backgroundImage = "url('https://i.imgur.com/naeZ29X.jpg')";
            document.body.classList.remove("no-background");
        },
        hide: () => {
            document.getElementById("menu").style.display = "none";
        }
    },
    "visual-novel": {
        name: "visual-novel",
        show: () => {
            document.getElementById("visual-novel").style.display = "flex";
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("visual-novel").style.display = "none";
        }
    },
    "visual-novel-choice": {
        name: "visual-novel-choice",
        show: () => {
            document.getElementById("visual-novel-choice").style.display = "flex";
            document.getElementById("visual-novel-choice-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("visual-novel-choice").style.display = "none";
        }
    },
    "cranio-sublevel-choice": {
        name: "cranio-sublevel-choice",
        show: () => {
            document.getElementById("cranio-sublevel-choice").style.display = "flex";
            document.getElementById("cranio-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("cranio-sublevel-choice").style.display = "none";
        }
    },
    "medula-sublevel-choice": {
        name: "medula-sublevel-choice",
        show: () => {
            document.getElementById("medula-sublevel-choice").style.display = "flex";
            document.getElementById("medula-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("medula-sublevel-choice").style.display = "none";
        }
    },
    "vertebra-sublevel-choice": {
        name: "vertebra-sublevel-choice",
        show: () => {
            document.getElementById("vertebra-sublevel-choice").style.display = "flex";
            document.getElementById("vertebra-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("vertebra-sublevel-choice").style.display = "none";
        }
    },
    "tronco_encefálico-sublevel-choice": {
        name: "tronco_encefálico-sublevel-choice",
        show: () => {
            document.getElementById("tronco_encefálico-sublevel-choice").style.display = "flex";
            document.getElementById("tronco_encefálico-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("tronco_encefálico-sublevel-choice").style.display = "none";
        }
    },
    "cerebelo-sublevel-choice": {
        name: "cerebelo-sublevel-choice",
        show: () => {
            document.getElementById("cerebelo-sublevel-choice").style.display = "flex";
            document.getElementById("cerebelo-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("cerebelo-sublevel-choice").style.display = "none";
        }
    },
    "nervos_cranianos-sublevel-choice": {
        name: "nervos_cranianos-sublevel-choice",
        show: () => {
            document.getElementById("nervos_cranianos-sublevel-choice").style.display = "flex";
            document.getElementById("nervos_cranianos-sublevel-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("nervos_cranianos-sublevel-choice").style.display = "none";
        }
    },
    "mode-menu": {
        name: "mode-menu",
        show: () => {
            document.getElementById("mode-menu").style.display = "flex";
            document.getElementById("mode-menu-background").style.backgroundImage = `url('${dialogues[dialogues.length - 1].background}')`;
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("mode-menu").style.display = "none";
        }
    },
    "game": {
        name: "game",
        show: () => {
            document.getElementById("game").style.display = "block";
            document.getElementById("game").classList.add("active");
            document.body.classList.add("no-background");
        },
        hide: () => {
            const game = document.getElementById("game");
            game.style.display = "none";
            game.classList.remove("active");
            document.body.style.backgroundImage = "url('https://i.imgur.com/naeZ29X.jpg')";
            document.body.classList.remove("no-background");
        }
    },
    "feedback-medica": {
        name: "feedback-medica",
        show: () => {
            document.getElementById("feedback-medica").style.display = "flex";
            document.body.classList.add("no-background");
        },
        hide: () => {
            document.getElementById("feedback-medica").style.display = "none";
        }
    }
};

let currentRoute = null;
let routeHistory = [];

/**
 * Navega para uma rota específica
 */
function navigateTo(routeName, isBack = false) {
    if (!routes[routeName]) {
        console.error(`Rota não encontrada: ${routeName}`);
        return;
    }

    // Esconde a rota atual
    if (currentRoute && routes[currentRoute]) {
        routes[currentRoute].hide();
    }

    // Mostra a nova rota
    routes[routeName].show();
    currentRoute = routeName;

    if (!isBack) {
        routeHistory.push(routeName);
    }

    // Atualiza a hash da URL
    window.location.hash = `#/${routeName}`;
}

/**
 * Volta para a rota anterior no histórico
 */
function goBack() {
    if (routeHistory.length < 2) {
        navigateTo("menu");
        return;
    }
    // Remove a rota atual
    routeHistory.pop();
    // Pega a rota anterior
    const previousRoute = routeHistory[routeHistory.length - 1];
    navigateTo(previousRoute, true);
}

/**
 * Manipula mudanças na hash da URL
 */
function handleHashChange() {
    const hash = window.location.hash.slice(2); // Remove o "#/"
    if (hash && routes[hash]) {
        navigateTo(hash);
    }
}

/**
 * Inicializa o roteador
 */
function initRouter() {
    window.addEventListener("hashchange", handleHashChange);

    // Se já tem uma hash na URL, navega para ela
    if (window.location.hash) {
        handleHashChange();
    } else {
        // Senão, vai para o menu
        navigateTo("menu");
    }
}

// Inicializa o roteador quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initRouter);
