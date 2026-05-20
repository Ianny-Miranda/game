// ============================================
// Áudio - Gerenciamento de sons do Quiz
// ============================================

let audioContextStarted = false;

/**
 * Inicia o AudioContext após interação do usuário (necessário para mobile)
 */
function initAudio() {
    if (audioContextStarted) return;
    audioContextStarted = true;

    // Tenta criar um contexto de áudio vazio para desbloquear o áudio
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        ctx.resume().then(() => {
            ctx.close();
        }).catch(() => {});
    } catch (e) {
        // Ignora erro
    }

    playBackgroundMusic();
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("background-music");
    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.4;
    backgroundMusic.loop = true;

    const playPromise = backgroundMusic.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            backgroundMusic.muted = false;
        }).catch((error) => {
            console.warn("Áudio de fundo bloqueado pelo navegador. Será ativado na primeira interação.");
        });
    }
}

function playCorrectSound() {
    const sound = document.getElementById("correct-sound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

function playWrongSound() {
    const sound = document.getElementById("wrong-sound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

function playVictorySound() {
    const sound = document.getElementById("victory-sound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

// Tenta inicializar áudio na primeira interação do usuário
document.addEventListener("click", initAudio, { once: true });
document.addEventListener("touchstart", initAudio, { once: true });
document.addEventListener("keydown", initAudio, { once: true });
