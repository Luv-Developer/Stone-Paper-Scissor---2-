let paper = document.getElementById("paper")
let stone = document.getElementById("stone")
let scissor = document.getElementById("scissor")
let user = document.getElementById("user")
let computer = document.getElementById("computer")
let result = document.getElementById("result")
paper.addEventListener("click",()=>{
    let a1,b1,c1
    let computer2 = Math.floor(Math.random() * 3)+1
    user.innerText = "You -> Paper"
    if(computer2 == 1){
        a1 = computer2
        computer.innerText = "Computer -> Paper"
    }
    else if(computer2 == 2){
        b1 = computer2
        computer.innerText = "Computer -> Stone"
    }
    else if(computer2 == 3){
        c1 = computer2
        computer.innerText = "Computer -> Scissor"
    }
    const value1 = 1
    if(value1==computer2){
        result.innerText = "Tie"
    }
    else if(value1 == 1 && computer2 == 2){
        result.innerText = "User Wins"
    }
    else if(value1 == 1 && computer2 == 3){
        result.innerText = "Computer Wins"
    }
})
stone.addEventListener("click",()=>{
    let a2,b2,c2
    let computer2 = Math.floor(Math.random() * 3)+1
    user.innerText = "You -> Stone"
    if(computer2 == 1){
        a2 = computer2
        computer.innerText = "Computer -> Paper"
    }
    else if(computer2 == 2){
        b2 = computer2
        computer.innerText = "Computer -> Stone"
    }
    else if(computer2 == 3){
        c2 = computer2
        computer.innerText = "Computer -> Scissor"
    }
    const value2 = 2
    if(value2 == computer2){
        result.innerText = "Tie"
    } 
    else if(value2 == 2  && computer2 == 1){
        result.innerText = "Computer Wins"
    }
    else if(value2 == 2 && computer2 == 3){
        result.innerText = "User Wins"
    }
})
scissor.addEventListener("click",()=>{
    let computer2 = Math.floor(Math.random() * 3)+1
    user.innerText = "You -> Scissor"
    let a3,b3,c3
    if(computer2 == 1){
        a3 = computer2
        computer.innerText = "Computer -> Paper"
    }
    else if(computer2 == 2){
        b3 = computer2
        computer.innerText = "Computer -> Stone"
    }
    else if(computer2 == 3){
        c3 = computer2
        computer.innerText = "Computer -> Scissor"
    }
    const value3 = 3
    if(value3 == computer2){
        result.innerText = "Tie"
    }
    else if(value3 == 3 && computer2 == 1){
        result.innerText = "User Wins"
    }
    else if(value3 == 3 && computer2 == 2){
        result.innerText = "Computer Wins"
    }
})
