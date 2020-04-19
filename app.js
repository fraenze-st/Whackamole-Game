const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
const displaygameover = document.querySelector('.game-over')
const startButton = document.querySelector('#start')
let score = document.querySelector('#score')


let result = 0
let currentTime = timeleft.textContent



function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assign the id of the randomPosition to hitPosition for us tu use later
    hitPosition = randomPosition.id

    if (currentTime === 0) {
        randomPosition.classList.remove('mole');
        displaygameover.textContent = "Game Over! Your final score is " + result + "."
        displaygameover.style.color = "rgb(240, 220, 38)";
        displaygameover.style.textShadow = "1px 1px rgb(83, 165, 90";
    }
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result

        }
    })
})


// moveMole()
startButton.addEventListener('click', function moveMole() {
    var timerId = null
    timerId = setInterval(randomSquare, 700)
});


startButton.addEventListener('click', function () {
    timerId = setInterval(countDown, 1000);
});

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
    }

};