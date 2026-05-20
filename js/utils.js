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

/**
 * Converte coordenadas em pixels para percentuais relativos ao tamanho real da imagem.
 * @param {string} topPx - Valor CSS top em px (ex: "260px")
 * @param {string} leftPx - Valor CSS left em px (ex: "200px")
 * @returns {{ top: string, left: string }} Valores em percentual
 */
function pxToPercent(topPx, leftPx) {
    const img = document.getElementById("image");
    if (!img) return { top: topPx, left: leftPx };

    /**
     * As coordenadas em px no JSON foram medidas sobre a imagem no seu tamanho ORIGINAL.
     * Usamos naturalWidth/naturalHeight (dimensões reais do arquivo) como referência.
     * 
     * O target é então posicionado em percentual dessa referência.
     * Como #targets cobre 100% da imagem exibida (graças ao .img-wrapper),
     * e a imagem mantém a proporção (aspect ratio), os percentuais funcionam
     * em qualquer tamanho de tela.
     */
    const refWidth = img.naturalWidth;
    const refHeight = img.naturalHeight;

    // Fallback se a imagem não carregou ainda
    if (!refWidth || !refHeight || refWidth <= 1 || refHeight <= 1) {
        return { top: topPx, left: leftPx };
    }

    const topNum = parseFloat(topPx);
    const leftNum = parseFloat(leftPx);

    return {
        top: `${(topNum / refHeight) * 100}%`,
        left: `${(leftNum / refWidth) * 100}%`
    };
}

/**
 * Obtém o tamanho do target baseado no size definido no JSON.
 * Em dispositivos touch (celulares e tablets), aumenta o tamanho
 * para facilitar o toque preciso nos alvos.
 */
function getTargetSize(size) {
    const isTouch = ('ontouchstart' in window) || 
                    (navigator.maxTouchPoints > 0) || 
                    (navigator.msMaxTouchPoints > 0);

    // Tamanhos aumentados para dispositivos touch (celulares e tablets)
    if (isTouch && window.innerWidth < 1024) {
        switch (size) {
            case "micro":  return { width: "14px",  height: "14px" };
            case "small":  return { width: "22px", height: "22px" };
            case "large":  return { width: "36px", height: "36px" };
            default:       return { width: "26px", height: "26px" };
        }
    }

    // Tamanhos normais para desktop
    switch (size) {
        case "micro":  return { width: "8px",  height: "8px" };
        case "small":  return { width: "14px", height: "14px" };
        case "large":  return { width: "28px", height: "28px" };
        default:       return { width: "18px", height: "18px" };
    }
}

