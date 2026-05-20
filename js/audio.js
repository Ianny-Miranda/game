// ============================================
// Áudio - Gerenciamento de sons do Quiz
// ============================================

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("background-music");
    if (backgroundMusic) {
        backgroundMusic.play().then(() => {
            backgroundMusic.muted = false;
        }).catch((error) => {
            console.error("Erro ao iniciar a música:", error);
        });
    }
}

function playCorrectSound() {
    const sound = document.getElementById("correct-sound");
    if (sound) sound.play();
}

function playWrongSound() {
    const sound = document.getElementById("wrong-sound");
    if (sound) sound.play();
}

function playVictorySound() {
    const sound = document.getElementById("victory-sound");
    if (sound) sound.play();
}
