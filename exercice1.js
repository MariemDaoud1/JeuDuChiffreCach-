function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeGame(difficulty) {
    let min, max, attempts;

    switch (difficulty) {
        case 'easy':
            min = 1;
            max = 50;
            attempts = 10;
            break;
        case 'medium':
            min = 1;
            max = 100;
            attempts = 7;
            break;
        case 'hard':
            min = 1;
            max = 200;
            attempts = 5;
            break;
        default:
            alert("Invalid difficulty level. Please choose 'easy', 'medium', or 'hard'.");
            return;
    }

    const targetNumber = generateRandomNumber(min, max);
    playGame(targetNumber, attempts, min, max);
}

function playGame(targetNumber, attempts, min, max) {
    let remainingAttempts = attempts;

    function guessNumber() {
        if (remainingAttempts === 0) {
            alert(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre était ${targetNumber}.`);
            if (confirm("Voulez-vous rejouer ?")) {
                startGame();
            }
            return;
        }

        const guess = parseInt(prompt(`Devinez le nombre entre ${min} et ${max}. Il vous reste ${remainingAttempts} tentatives.`), 10);

        if (isNaN(guess)) {
            alert("Veuillez entrer un nombre valide.");
            guessNumber();
            return;
        }

        if (guess < targetNumber) {
            alert("Trop bas !");
        } else if (guess > targetNumber) {
            alert("Trop haut !");
        } else {
            alert(`Félicitations ! Vous avez trouvé le nombre ${targetNumber} en ${attempts - remainingAttempts + 1} tentatives.`);
            if (confirm("Voulez-vous rejouer ?")) {
                startGame();
            }
            return;
        }

        remainingAttempts--;
        guessNumber();
    }

    guessNumber();
}

function startGame() {
    const difficulty = prompt("Choisissez un niveau de difficulté : 'facile', 'intermédiaire' ou 'difficile'.").toLowerCase();
    initializeGame(difficulty);
}

document.getElementById('easy').addEventListener('click', () => initializeGame('easy'));
document.getElementById('medium').addEventListener('click', () => initializeGame('medium'));
document.getElementById('hard').addEventListener('click', () => initializeGame('hard'));

document.getElementById('message').textContent = "Choisissez un niveau de difficulté pour commencer.";