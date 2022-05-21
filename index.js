const score = document.getElementById('score')
const historyDisplay = document.getElementById('history')
const increase_button = document.getElementById('increase')
const save_button= document.getElementById('save')

//variable declaration
let counter = 0
let history = "";

//functions
const increment = () => {
    //fucntion to increment
    counter = counter + 1;
    score.innerHTML = counter
}
const save = () => {
    //function to save tha value in historys
    history = history + counter + " - " 
    historyDisplay.textContent = history
    counter = 0
    score.innerHTML = counter;
    let name = 'null';
}

//adding the function to buttons onclick
increase_button.addEventListener('click', increment);
save_button.addEventListener('click', save);
