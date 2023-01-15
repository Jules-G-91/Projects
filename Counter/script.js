//First of all I get my Selectors
let counterDisplayElement = document.querySelector('.counterDisp');
let counterAddElement = document.querySelector('.addButton');
let counterMinusElement = document.querySelector('.minusButton');
let counterClearElement = document.querySelector('.clearButton');

let counter = 0;
updateDisplay();


//Then I add my Event Listeners + also event listener arrow functions


counterMinusElement.addEventListener("click",()=>{
    if (counter === 0) {
        return;
    } else {
        counter--;
    }
    updateDisplay();
});

counterAddElement.addEventListener("click",()=>{
    if (counter === 999) {
        return;
    } else {
        counter++;
    }
    updateDisplay();
});

counterClearElement.addEventListener("click", ()=>{
    document.querySelector('.counterDisp').innerHTML = 0; 
    counter = 0;
})

//Then I create my Functions

function updateDisplay(){
    counterDisplayElement.innerHTML = counter;
};
