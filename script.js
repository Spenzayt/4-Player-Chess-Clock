let playing = false;
let currentPlayer = 1;
const timerPanel = document.querySelector('.player');
const buttons = document.querySelectorAll('.bttn');


// Add a leading zero to numbers less than 10.
const padZero = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


// Create a class for the timer.
class Timer {
    constructor(player, minutes) {
        this.player = player;
        this.minutes = minutes;
    }
    getMinutes(timeId) {
        return document.getElementById(timeId).textContent;
    }
}

let p1time = new Timer('min1', document.getElementById('min1').textContent);
let p2time = new Timer('min2', document.getElementById('min2').textContent);
let p3time = new Timer('min3', document.getElementById('min3').textContent);
let p4time = new Timer('min4', document.getElementById('min4').textContent);


// Swap player's timer after a move (player1 = 1, player2 = 2).
const swapPlayer = () => {
    if (!playing) return;
    // Toggle the current player.
    currentPlayer = (currentPlayer % 4) + 1;
}


// Warn player if time drops below thirty seconds.
const timeWarning = (player, min, sec) => {
    // Change the numbers to red during the last 30 seconds.
    if (min < 1 && sec <= 30) {
        if (player === 1) {
            document.querySelector('.player-1 .player__digits1').style.color = '#CC0000';
        }
        if (player === 2) {
            document.querySelector('.player-2 .player__digits2').style.color = '#CC0000';
        } 
        if (player === 3) {
            document.querySelector('.player-3 .player__digits3').style.color = '#CC0000';
        } 
        if (player === 4) {
            document.querySelector('.player-4 .player__digits4').style.color = '#CC0000';
        } 
    }
}


// Start timer countdown to zero.
const startTimer = () => {
    playing = true;
    let p1sec = 60;
    let p2sec = 60;
    let p3sec = 60;
    let p4sec = 60; 

    let timerId = setInterval(function() {
        // Player 1.
        if (currentPlayer === 1) {
            if (playing) {
                // Disable start button.
                buttons[0].disabled = true;
                p1time.minutes = parseInt(p1time.getMinutes('min1'), 10);
                if (p1sec === 60) {
                    p1time.minutes = p1time.minutes - 1;
                }
                p1sec = p1sec - 1;
                timeWarning(currentPlayer, p1time.minutes, p1sec);
                document.getElementById('sec1').textContent = padZero(p1sec);
                document.getElementById('min1').textContent = padZero(p1time.minutes);
                if (p1sec === 0) {
                    // If minutes and seconds are zero stop timer with the clearInterval method.
                    if (p1sec === 0 && p1time.minutes === 0) {
                        // Stop timer.
                        clearInterval(timerId);
                        playing = false;
                    }
                    p1sec = 60;
                }
            }
        } 
        // Player 2.
        if (currentPlayer === 2) {
            if (playing) {
                // Disable start button.
                buttons[0].disabled = true;
                p2time.minutes = parseInt(p2time.getMinutes('min2'), 10);
                if (p2sec === 60) {
                    p2time.minutes = p2time.minutes - 1;
                }
                p2sec = p2sec - 1;
                timeWarning(currentPlayer, p2time.minutes, p2sec);
                document.getElementById('sec2').textContent = padZero(p2sec);
                document.getElementById('min2').textContent = padZero(p2time.minutes);
                if (p2sec === 0) {
                    // If minutes and seconds are zero stop timer with the clearInterval method.
                    if (p2sec === 0 && p2time.minutes === 0) {
                        // Stop timer.
                        clearInterval(timerId);
                        playing = false;
                    }
                    p2sec = 60;
                }
            }
        } 
        // Player 3.
                if (currentPlayer === 3) {
                    if (playing) {
                        // Disable start button.
                        buttons[0].disabled = true;
                        p3time.minutes = parseInt(p3time.getMinutes('min3'), 10);
                        if (p3sec === 60) {
                            p3time.minutes = p3time.minutes - 1;
                        }
                        p3sec = p3sec - 1;
                        timeWarning(currentPlayer, p3time.minutes, p3sec);
                        document.getElementById('sec3').textContent = padZero(p3sec);
                        document.getElementById('min3').textContent = padZero(p3time.minutes);
                        if (p3sec === 0) {
                            // If minutes and seconds are zero stop timer with the clearInterval method.
                            if (p3sec === 0 && p3time.minutes === 0) {
                                // Stop timer.
                                clearInterval(timerId);
                                playing = false;
                            }
                            p3sec = 60;
                        }
                    }
                } 
        // Player 4.
        if (currentPlayer === 4) {
            if (playing) {
                // Disable start button.
                buttons[0].disabled = true;
                p4time.minutes = parseInt(p4time.getMinutes('min4'), 10);
                if (p4sec === 60) {
                    p4time.minutes = p4time.minutes - 1;
                }
                p4sec = p4sec - 1;
                timeWarning(currentPlayer, p4time.minutes, p4sec);
                document.getElementById('sec4').textContent = padZero(p4sec);
                document.getElementById('min4').textContent = padZero(p4time.minutes);
                if (p4sec === 0) {
                    // If minutes and seconds are zero stop timer with the clearInterval method.
                    if (p4sec === 0 && p4time.minutes === 0) {
                        // Stop timer.
                        clearInterval(timerId);
                        playing = false;
                    }
                    p4sec = 60;
                }
            }
        } 
    }, 1000);
}


// Listen for a mouse click or tap on the screen to toggle between timers.
timerPanel.addEventListener('click', swapPlayer);

// Loop through the start and reset buttons.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === 'START') {
            // Turn the button a gray color to signify a disabled button.
            buttons[i].style.color = '#EEEEEE';
            buttons[i].style.backgroundColor = '#606060';
            startTimer();
        } else {
            // Reset everything by reloading the page.
            location.reload(true);
        }
    });
}

// Listen for the press of the spacebar.
document.addEventListener('keypress', event => {
    if (event.keyCode === 32 || event.which === 32) {
        swapPlayer();
    }
});
