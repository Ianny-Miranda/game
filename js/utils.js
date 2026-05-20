// ============================================
// Utilitários - Funções auxiliares do Quiz
// ============================================

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Calcula a distância de Levenshtein entre duas strings
 */
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substituição
                    matrix[i][j - 1] + 1,     // Inserção
                    matrix[i - 1][j] + 1      // Deleção
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

/**
 * Verifica se a resposta do usuário é similar à resposta correta
 * usando distância de Levenshtein e normalização de caracteres
 */
function checkSimilarity(userAnswer, correctAnswer, maxErrors = 1) {
    const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    userAnswer = normalize(userAnswer);
    correctAnswer = normalize(correctAnswer);

    const userWords = userAnswer.split(/\s+/);
    const correctWords = correctAnswer.split(/\s+/);

    const hasKeyword = correctWords.some(correctWord => {
        return userWords.some(userWord => {
            const distance = levenshteinDistance(userWord, correctWord);
            return distance <= maxErrors;
        });
    });

    return hasKeyword;
}

/**
 * Detecta se o dispositivo é um smartphone
 */
function isSmartphone() {
    const isSmallScreen = window.innerWidth < 768;
    const userAgent = navigator.userAgent.toLowerCase();
    const isiPhone = /iphone/.test(userAgent);
    const isAndroidPhone = /android.*mobile/.test(userAgent);
    const isWindowsPhone = /windows phone/.test(userAgent);
    return isSmallScreen && (isiPhone || isAndroidPhone || isWindowsPhone);
}
