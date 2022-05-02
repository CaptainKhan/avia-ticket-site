const checkButton = document.getElementById('g');
const returnDiv = document.getElementById('return');
const backDiv = document.getElementById('gg');

const buyButton = document.getElementById('buy');
const overlayDiv = document.getElementById('section-overlay');
const buttonClose = document.getElementById('close')

 function overDiv(){
    overlayDiv.style.display = 'block'
}

checkButton.addEventListener('click' , function(){
    returnDiv.style.display = 'none';
})

backDiv.addEventListener('click' , function(){
    returnDiv.style.display = 'block';
})

buttonClose.addEventListener('click' , function(e){
    e.preventDefault();
    overlayDiv.style.display = 'none';
})



