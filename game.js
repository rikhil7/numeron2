// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1box = document.querySelector("#number1")
let num2box = document.querySelector("#number2")
let num3box = document.querySelector("#number3")

let num1
let num2
let num3
let ops
let score = 0
randomGenerator()
function randomGenerator(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)

    if (num1<num2){
        let abs = num1
        num1 = num2
        num2 = abs
    }
    
    ops = Math.floor(Math.random()*5)+1
    switch(ops){
        case 1:
            num3 = num1+num2
            break
        case 2:
            num3 = num1-num2
            break
        case 3:
            num3 = num1*num2
            break
        case 4:
            num3 = Math.floor(num1/num2)
            break
        case 5:
            num3 = num1%num2
            break
    }
    num1box.textContent = num1
    num2box.textContent = num2
    num3box.textContent = num3
}

let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let mul = document.querySelector("#mul")
let div = document.querySelector("#divide")
let mod = document.querySelector("#modulus")
plus.onclick = ()=>{
    if (num1+num2==num3){
        randomGenerator()
        clearInterval(timeInterval)
        timeStart()
        score++
        localStorage.setItem("score", score)
    }
    else{
        window.open("gameover.html", "_self")
    }
}
minus.onclick = ()=>{
    if (num1-num2==num3){
        randomGenerator()
        clearInterval(timeInterval)
        timeStart()
        score++
        localStorage.setItem("score", score)
    }
    else{
        window.open("gameover.html", "_self")
    }
}
mul.onclick = ()=>{
    if (num1*num2==num3){
        randomGenerator()
        clearInterval(timeInterval)
        timeStart()
        score++
        localStorage.setItem("score", score)
    }
    else{
        window.open("gameover.html", "_self")
    }
}
div.onclick = ()=>{
    if (Math.floor(num1/num2)==num3){
        randomGenerator()
        clearInterval(timeInterval)
        timeStart()
        score++
        localStorage.setItem("score", score)
    }
    else{
        window.open("gameover.html", "_self")
    }
}
mod.onclick = ()=>{
    if (num1%num2==num3){
        randomGenerator()
        clearInterval(timeInterval)
        timeStart()
        score++
        localStorage.setItem("score", score)
    }
    else{
        window.open("gameover.html", "_self")
    }
}
let time = 20
let timeInterval
let timer = document.querySelector("#timer")

function timeStart(){
    time = 20
    timer.textContent = time
    timeInterval = setInterval(()=>{
        time--
        timer.textContent = time
        if (time==0){
            window.open("gameover.html","_self")
        }
    },1000)
}
timeStart()
localStorage.setItem("score", 0)























// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
