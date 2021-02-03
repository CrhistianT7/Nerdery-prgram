// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const heading = document.querySelector('h2')

// // console.log(p);
// // console.log(divs);
// // console.log(heading.textContent);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} pizza`; 

/** Classes */

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound(){
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.width = 400;

pic.addEventListener('load', function(){
    console.log(pic.naturalWidth);
})

