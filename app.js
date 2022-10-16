let winCounter = 0;
let drawCounter = 0;
let loseCounter = 0;
let cpu;
let stopGame = false;

window.onload = function(){
    document.getElementById("win").innerHTML = winCounter;
    document.getElementById("draw").innerHTML = drawCounter;
    document.getElementById("lose").innerHTML = loseCounter;
}

function getPlayersChoice(n) {
    if(!stopGame){
        cpu = Math.floor((Math.random() * 3));
        document.getElementById("cpu-svg").innerHTML = document.getElementById("btn-group").children[cpu].innerHTML;
        if(n == cpu) {
            drawCounter++;
        }
        else {
            notDraw(n);
        }
        document.getElementById("draw").innerHTML = drawCounter;
    }
}

function notDraw(n) {
    if(n == 0 && cpu == 1) {
        loseCounter++;
    }
    else if(n == 0 && cpu == 2) {
        winCounter++;
    }
    else if(n == 1 && cpu == 0) {
        winCounter++;
    }
    else if(n == 1 && cpu == 2) {
        loseCounter++;
    }
    else if(n == 2 && cpu == 0) {
        loseCounter++;
    }
    else {
        winCounter++;
    }

    document.getElementById("win").innerHTML = winCounter;
    document.getElementById("lose").innerHTML = loseCounter;

    if(winCounter > 9) {
        gameOver(true);
    }
    if(loseCounter > 9) {
        gameOver(false);
    }
}

function gameOver(result) {
    if(result) {
        document.getElementById("footer").innerHTML = "BRAVO! You win!";
        document.getElementById("footer").style.color = "var(--color-green)"
    }
    else {
        document.getElementById("footer").innerHTML = "GAME OVER - You lose";
        document.getElementById("footer").style.color = "var(--color-red)"
    }

    document.getElementById("new-game").style.visibility = "visible";
    stopGame = true;
}

function newGame(){
    location.reload();
}
