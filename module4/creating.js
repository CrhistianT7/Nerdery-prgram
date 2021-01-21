const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/500";
myImage.alt = 'Nice photo';
console.log(myImage);


const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);


myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin',heading);

const list = document.createElement('ul');
const myListItem1 = document.createElement('li');
myListItem1.textContent = 'One';
const myListItem3 = document.createElement('li'); 
const myListItem4 = document.createElement('li');
myListItem4.textContent = 'Four';
const myListItem5 = document.createElement('li');
myListItem5.textContent = 'Five';

list.appendChild(myListItem1);

document.body.insertAdjacentElement('afterbegin', list);

list.append(myListItem5);

const li2 = myListItem5.cloneNode(true);
li2.textContent = 'two';
list.insertAdjacentElement("afterbegin",li2);