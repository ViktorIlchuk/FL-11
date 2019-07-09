if (confirm('Do you want to play a game?')) {
    let gameInProgress = true;
    let prize = 0;
    let possibleMaxPrize = 100;
    let prizeMultiplierDivider = 2;
    let maxInPocket = 8;
    let pocketIncreaceBy = 4;
    let thankYouShown = false;
    let maxAttemps = 3
    while (gameInProgress) {
        let attempts = 3;
        let winner = false;
        let possiblePrize = possibleMaxPrize;
        let randomNumber = Math.floor(Math.random() * Math.floor(maxInPocket + 1));
        thankYouShown = false;

        while (attempts > 0) {
            if (attempts < maxAttemps && possiblePrize > 0) {
                possiblePrize /= prizeMultiplierDivider;
            }

            if (parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxInPocket}\n` +
                    `Attempts left: ${attempts}\n` +
                    `Total prize: ${prize}$\n` +
                    `Possible prize on current attempt: ${possiblePrize}$`, 0), 10) === randomNumber) {
                winner = true;
                prize += possiblePrize;
                break;
            } else {
                attempts--;
            }
        }

        if (winner) {
            alert(`Congratulation, you won! Your prize is: ${prize} $.`);
        } else {
            thankYouShown = true;
            alert(`Thank you for your participation. Your prize is: ${prize} $`);
        }

        gameInProgress = confirm('Do you want to continue?');

        possibleMaxPrize *= prizeMultiplierDivider;
        maxInPocket += pocketIncreaceBy;
    }

    if (!thankYouShown) {
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
    }
} else {
    alert('You did not become a billionaire, but can.');
}