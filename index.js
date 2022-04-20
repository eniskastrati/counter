const score = document.getElementById('score')
const historyDisplay = document.getElementById('history')
const increase_button = document.getElementById('increase')
const save_button= document.getElementById('save')

//variable declaration
let counter = 0
let history = "";

//functions
const increment = () => {
    counter = counter + 1;
    score.innerHTML = counter
}