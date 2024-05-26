let randno=(parseInt(Math.random()*100+1))

const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess=[]
let numguess=1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess<1) {
        alert('Please enter a  number more than 1')
    }
    else if (guess>100) {
        alert('Please enter a number less than 100')
    }
     else{
        prevGuess.push(guess)
        if (numguess===11) {
          displayGuess(guess) 
          displayMessage(`Game over. Random number was ${randno}`)
          endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randno){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess<randno) {
        displayMessage(`You guessed Too Low`)
    }
    else if (guess>randno) {
        displayMessage(`You guessed Too High`)
    }
}

function displayGuess(guess){
    userinput.value=''
    guessslot.innerHTML+=`${guess} `
    numguess++
    remaining.innerHTML =`${11-numguess}`
}

function displayMessage(message){
    loworhi.innerHTML =`<h2>${message}</h2>`
} 

function endGame(){
    userinput.value ='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    playGame=false;
    startOver.appendChild(p);
    newGame();
    
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    randno=(parseInt(Math.random()*100+1))
    prevGuess=[]
    numguess=1
    guessslot.innerHTML=''
    remaining.innerHTML =`${11-numguess}`
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
    })
}