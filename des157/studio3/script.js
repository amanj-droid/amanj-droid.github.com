(function () {


    'use strict';

    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');

    /* sounds */
    const diceRoll = new Audio('sounds/diceRoll.mp3');
    const pass = new Audio('sounds/pass.mp3');





    var gameData = {
        dice: ['images/dice-1.png', 'images/dice-2.png', 'images/dice-3.png', 'images/dice-4.png', 'images/dice-5.png', 'images/dice-6.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        gameData: 0
    };

    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>Game in progress</h2>';
        gameControl.innerHTML += '<button id=quit>Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function () {
            location.reload();
        });
        console.log(gameData.index);
        setUpTurn();

    })



    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = "<button id='roll'> 🎲Roll Dice</button>";
        document.getElementById('roll').addEventListener('click', function () {
            throwDice();
            diceRoll.play();
        });


    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML +=
            `<img src="${gameData.dice[gameData.roll1 - 1]}">
        <img src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);
        if (gameData.rollSum === 2) {
            game.innerHTML += "<p>Oh Snap! Snake Eyes!</p>";
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>One of your rolls was a 1. <br>Switching to player ${gameData.players[gameData.index]}.</p>`;
            setTimeout(setUpTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id='rollAgain'>🎲Roll again</button><br> or <br><button id='pass'>🔄Pass</button>`;

            document.getElementById('rollAgain').addEventListener('click', function () {
                throwDice();
                diceRoll.play();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                pass.play();

            });

            checkWinningCondition();
        }
    };

    function checkWinningCondition() {

        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = "";
            document.getElementById('quit').innerHTML = 'Start a new game';
        } else {
            showCurrentScore();
        }

    }

    function showCurrentScore() {
        score.innerHTML = `<h3>Score</h3><p id='playerScore'>${gameData.players[0]}: ${gameData.score[0]}<br>${gameData.players[1]}: ${gameData.score[1]}</p>`;
    }








})();

