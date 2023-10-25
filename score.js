// Iteration 8: Making scoreboard functional
let play_again = document.querySelector("#play-again-button")
play_again.onclick = ()=>{
    window.open("game.html", "_self")
}
let scoreBox = document.querySelector("#score-board")
let value = localStorage.getItem("score")
scoreBox.textContent = value