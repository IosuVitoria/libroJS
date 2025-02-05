let cards = [];
let flippedCards = [];
let matchedCards = [];
let attempts = 0;
let isGameOver = false;
let timer = 0;
let gameInterval;

// Definir los símbolos con sus colores
const symbols = [
    { symbol: '🌟', color: '#FF5733' },
    { symbol: '🔶', color: '#FFC300' },
    { symbol: '💎', color: '#33FF57' },
    { symbol: '🌙', color: '#9C27B0' },
    { symbol: '❤️', color: '#F44336' },
    { symbol: '⚡', color: '#03A9F4' },
    { symbol: '🔥', color: '#FF9800' },
    { symbol: '🍀', color: '#4CAF50' }
];

// Crear las cartas con símbolos y colores
const createCards = () => {
    let cardSymbols = [];

    // Crear el array de símbolos duplicados
    symbols.forEach(({ symbol, color }) => {
        cardSymbols.push({ symbol, color });
        cardSymbols.push({ symbol, color });
    });

    // Mezclar las cartas
    cardSymbols = cardSymbols.sort(() => Math.random() - 0.5);

    // Crear las cartas
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    cardSymbols.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = item.symbol;
        card.dataset.color = item.color;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="front">
                <span>${item.symbol}</span>
            </div>
            <div class="back"></div>
        `;
        gameBoard.appendChild(card);

        card.addEventListener('click', flipCard);
        cards.push(card);
    });
};

// Voltear la carta
const flipCard = (e) => {
    if (flippedCards.length === 2 || e.target.closest('.card').classList.contains('flipped') || isGameOver) return;

    const card = e.target.closest('.card');
    card.classList.add('flipped');
    flippedCards.push(card);

    // Mostrar el símbolo y el color
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');
    front.style.backgroundColor = card.dataset.color;  // Asignar el color de fondo
    front.style.color = 'white'; // Mostrar el color de texto en blanco para contraste

    if (flippedCards.length === 2) {
        attempts++;
        document.getElementById('attempts').textContent = attempts;
        setTimeout(checkMatch, 1000);
    }
};

// Verificar si las cartas coinciden
const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards;
    const firstSymbol = firstCard.dataset.symbol;
    const secondSymbol = secondCard.dataset.symbol;

    if (firstSymbol === secondSymbol) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            isGameOver = true;
            document.getElementById('victory-message').style.display = 'block';
            clearInterval(gameInterval);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
};

// Contador de tiempo
const startTimer = () => {
    gameInterval = setInterval(() => {
        timer++;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
};

// Reiniciar el juego
const resetGame = () => {
    cards = [];
    flippedCards = [];
    matchedCards = [];
    attempts = 0;
    isGameOver = false;
    timer = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('victory-message').style.display = 'none';
    document.getElementById('timer').textContent = '00:00';
    createCards();
    clearInterval(gameInterval);
    startTimer();
};

// Inicializar el juego
const initGame = () => {
    createCards();
    startTimer();
};

document.getElementById('reset-button').addEventListener('click', resetGame);

// Inicializar el juego al cargar la página
initGame();
