const div = document.createElement('div');
div.classList.add("wrapper");
document.body.appendChild(div);

const list = document.createElement('ul');

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
item1.textContent = 'One';
item2.textContent = 'Two';
item3.textContent = 'Three';

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

div.appendChild(list);

const img = document.createElement('img');
img.src = "https://picsum.photos/200";
img.width = 250;
img.classList.add("cute");
img.alt = "Cute Puppy";

div.appendChild(img);

const myHTML = `
    <div class="myDiv">
        <p>P one</p>
        <p>P two</p>
    </dv>
`;

const listElement = document.querySelector('ul');
console.log(listElement);
// listElement.insertAdjacentElement("beforebegin", myHTML);
listElement.insertAdjacentHTML("beforebegin", myHTML);

const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add("warning");

myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height){
    return `
        <div class="playerCard">
            <h2> ${name} - ${age} </h2>
            <p> they are ${height} and ${age} years old. In Dog years thgis person would be ${age * 7}indogyears. That would be a tall dog!</p>
        <button class="delete" type="button">Delete</button>
        </div>
    `;
}

const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = generatePlayerCard("wes", 12, 150);
cardsHTML += generatePlayerCard("scoott", 12, 150);
cardsHTML += generatePlayerCard("kait", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');

function deleteCard(event){
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));




