let result = document.querySelector('.result')
let correct =document.querySelectorAll('.correct')
let start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
let q = document.querySelectorAll('.q')
let directions= document.querySelector('.directions')
let restart = document.querySelector('.restart')
// console.log(q)



let currentQIndex = 0
let previousQIndex = 0
let score = 0

start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' 
    // the first question will load
    console.log('current', q[currentQIndex])
    directions.style.display= 'none'
    //removes start button  
}
// console.log(q)
  
option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})
function next(event){
    console.log('next')
    event.preventDefault() 
    previousQIndex = currentQIndex
    currentQIndex++
    console.log(q[currentQIndex])
    q[previousQIndex].style.display = 'none' 
    //removes last question
    q[currentQIndex].style.display = 'block' 
    //display next question
}

//total score display at the end 
function updateScore(){
     score++
    if(score === 10){
        result.textContent = 'Wow! 10/10 You are the snake genius!'
    } else if(score === 9  ){
        result.textContent= '9/10 Amazing!'
    } else if( score === 8){
        result.textContent = '8/10 Great job!'
    } else if( score === 7){
        result.textContent= '7/10 Good job!'
    }else if(score === 6){
        result.textContent = '6/10 Good Job!'
    }else if(score === 5){
        result.textContent = '5/10 Looks like you need to learn!'
    }else if(score === 4){
        result.textContent = '4/10 Looks like you need to learn!'
    }else if(score === 3){
        result.textContent = '3/10 Looks like you need to learn!'
    }else if(score === 2){
        result.textContent= '2/10 Looks like you need to learn!'
    }else if(score === 1){
        result.textContent = '1/10 Looks like you need to learn!'
    }else if(score === 0){
        result.textContent = '0/10 FAIL!'
    }
}
console.log('updated score', score)


for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    console.log('correct') 
}

function correctAnswer(event){
    console.log('event target', event.target)
    if(event.target.classList.contains('correct')){
        console.log('this is correct')
        updateScore()
    }
}

// this makes the game restart
restart.addEventListener('click', restartTrivia)
function restartTrivia(){
    window.location.reload(true); 
    
}