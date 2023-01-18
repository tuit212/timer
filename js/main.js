let timer = document.querySelector('#timer');
let restart = document.querySelector('#restart');
let update = document.querySelector('#update');
let start = document.querySelector('#start'); 
let button1 = document.querySelectorAll('#card-buut__span-but1'); 
let button2 = document.querySelectorAll('#card-buut__span-but2');  
let button3 = document.querySelectorAll('#card-buut__span-but3');  
let button4 = document.querySelectorAll('#card-buut__span-but4');   
let button5 = document.querySelectorAll('#card-buut__span-but5');   
let button6 = document.querySelectorAll('#card-buut__span-but6');   
let cardEdit = document.querySelector('#cardEdit'); 
let cardEdit2 = document.querySelector('#cardEdit2'); 
let cardEdit3 = document.querySelector('#cardEdit3');;; 
let item1 = document.querySelector('#item1');;; 
let item2 = document.querySelector('#item2');;; 
let item3 = document.querySelector('#item3');;; 

  







let cardIncrement = 0;
window.myFunction = () => {
    cardIncrement++;
    cardEdit.innerHTML = `${cardIncrement}`;
}
let cardIncremen = 0;
window.myFunction2 = () => {
    cardIncrement--;

    if (cardIncrement == 0) {
        alert("voqt minus utmaydi")
    }



    cardEdit.innerHTML = `${cardIncrement}`;
}









let cardIncrement0 = 0;
window.myFunctio3 = () => {
    cardIncrement0++;
    cardEdit2.innerHTML = `${cardIncrement0}`;
}
let cardIncrement41 = 0;
window.myFunction4 = () => {
    cardIncrement0--;

    if (cardIncrement0 == 0) {
        alert("voqt minus utmaydi")
    }

    cardEdit2.innerHTML = `${cardIncrement0}`;
}








let cardIncrement3 = 0;
window.myFunctio5 = () => {
    cardIncrement3++;
    cardEdit3.innerHTML = `${cardIncrement3}`;
}
let cardIncremen19 = 0;
window.myFunction6 = () => {
    cardIncrement3--;

    if (cardIncrement3 == 0) {
        alert("voqt minus utmaydi")
    }
    cardEdit3.innerHTML = `${cardIncrement3}`;
}

console.log(cardIncrement);










start.addEventListener('click', () => {
   item1.innerHTML = ` ${ cardIncrement} :`
})
start.addEventListener('click', () => {
    item2.innerHTML = ` ${ cardIncrement0} :`
 })
 start.addEventListener('click', () => {
    item3.innerHTML = ` ${ cardIncrement3}`
 })

 restart.addEventListener('click', () => {
    item1.innerHTML = ` ${0} :`
    item2.innerHTML = ` ${0} :`
    item3.innerHTML = ` ${0}`
    cardEdit3.innerHTML = ` ${0}`
    cardEdit.innerHTML = ` ${0}`
    cardEdit2.innerHTML = ` ${0}`
 });