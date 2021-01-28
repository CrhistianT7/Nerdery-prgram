const button = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handeClick(){
    console.log("clicked");
}

button.addEventListener('click', handeClick)
coolButton.addEventListener('click', handeClick)

button.removeEventListener('click', handeClick)


/** Multiple items */
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem(){
//     console.log('Buying something');
// }

// function handleBuyButtonClick(buyButton){
//     buyButton.addEventListener('click',buyItem);
// }

function handleBuyButtonClick (event) {
    console.log('You are buying it!');
    console.log(parseFloat(event.target.dataset.price));
    //event.stopPropagation();
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click',handleBuyButtonClick)
});

window.addEventListener('click', function(event){
    console.log("you're clicking the window");
    console.log(event.target);
}, {capture: true})