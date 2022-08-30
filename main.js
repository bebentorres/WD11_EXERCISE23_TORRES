let rock = document.getElementById("game-One");
let paper = document.getElementById("game-Two");
let scissor = document.getElementById("game-Three");
let Prock = document.getElementById("player-One");
let Ppaper = document.getElementById("player-Two");
let Pscissor = document.getElementById("player-Three");
let gif = document.getElementById("gif");
let playergif = document.getElementById("player-gif");

let disablerock = document.getElementById("rock");
let disablepaper = document.getElementById("paper");
let disablescissors = document.getElementById("scissors");
let startR = document.getElementById("startR");
let startNull = document.getElementById("startNull");

function disablebuttons (){
    disablerock.classList.add("disabled");
    disablepaper.classList.add("disabled");
    disablescissors.classList.add("disabled");
};

function resetbuttons(){
    disablerock.classList.remove("disabled");
    disablepaper.classList.remove("disabled");
    disablescissors.classList.remove("disabled");
    rock.classList.remove("show");
    paper.classList.remove("show");
    scissor.classList.remove("show");
    Prock.classList.remove("show");
    Ppaper.classList.remove("show");
    Pscissor.classList.remove("show");
    gif.classList.remove("hidden");
    playergif.classList.remove("hidden");
    
};

let computerscore = 1;
let playerscore = 1;
let matchscore = document.getElementById("match-score");
let listscore = document.createElement("li");

function playerwins(){
    matchscore.insertAdjacentHTML("beforeend", "<li>Player Won!</li>");
    document.getElementById("player-score").innerHTML = playerscore++;
}

function computerwins(){
    matchscore.insertAdjacentHTML("beforeend", "<li>Computer Won!</li>");
    document.getElementById("computer-score").innerHTML = computerscore++;
}

function tie(){
    matchscore.insertAdjacentHTML("beforeend", "<li>It's a Tie!</li>");
}

const game= {
    rockFunction(){
        playergif.classList.add("hidden");
        Prock.classList.add("show");
        if (Math.floor(Math.random()*3) == 2){
            gif.classList.add("hidden");
            rock.classList.add("show");
            tie();
            disablebuttons();
        }
        else if (Math.floor(Math.random()*3) == 1){
            gif.classList.add("hidden");
            paper.classList.add("show");
            computerwins();
            disablebuttons();

        }
        else {
            gif.classList.add("hidden");
            scissor.classList.add("show");
            playerwins();
            disablebuttons();
        }
    },
    paperFunction(){
        playergif.classList.add("hidden");
        Ppaper.classList.add("show");
        if (Math.floor(Math.random()*3) == 2){
            gif.classList.add("hidden");
            rock.classList.add("show");
            playerwins();
            disablebuttons();

        }
        else if (Math.floor(Math.random()*3) == 1){
            gif.classList.add("hidden");
            paper.classList.add("show");
            tie();
            disablebuttons();
        }
        else {
            gif.classList.add("hidden");
            scissor.classList.add("show");
            computerwins();
            disablebuttons();
        }
        
    },
    scissorFunction(){
        playergif.classList.add("hidden");
        Pscissor.classList.add("show");
        if (Math.floor(Math.random()*3) == 2){
            gif.classList.add("hidden");
            rock.classList.add("show");
            computerwins();
            disablebuttons();
        }
        else if (Math.floor(Math.random()*3) == 1){
            gif.classList.add("hidden");
            paper.classList.add("show");
            playerwins();
            disablebuttons();
        }
        else {
            gif.classList.add("hidden");
            scissor.classList.add("show");
            tie();
            disablebuttons();
        }
    },
    rematchFunction(){
        disablerock.classList.remove("disabled");
        disablepaper.classList.remove("disabled");
        disablescissors.classList.remove("disabled");
        rock.classList.remove("show");
        paper.classList.remove("show");
        scissor.classList.remove("show");
        Prock.classList.remove("show");
        Ppaper.classList.remove("show");
        Pscissor.classList.remove("show");
        gif.classList.remove("hidden");
        playergif.classList.remove("hidden");
        
    }

}
