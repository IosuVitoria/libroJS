let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');

    const updateDisplay = () => {
        counterDisplay.textContent = counter;
    };

    incrementButton.addEventListener('click', () => {
        counter++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        counter--;
        updateDisplay();
    });

    updateDisplay();
});