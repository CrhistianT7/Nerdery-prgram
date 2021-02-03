const item = document.querySelector('.item');

const src = `https://picsum.photos/400`;
const desc = `Cute pup`;
const myHTML = `
    <div class="wrapper">
        <h1>${desc}</h1>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

//item.innerHTML = myHTML;

/** turn a string into DOM element */

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.append(myFragment);