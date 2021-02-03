const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const baseEndPoint = "https://icanhazdadjoke.com";

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
  ];

async function fetchJoke() {
    loader.classList.remove('hidden');
    jokeButton.classList.add('hidden');
    const response = await fetch(baseEndPoint,{
    headers: {
        Accept: 'application/json',
    },
    });
    const data = await response.json();
    loader.classList.add('hidden');
    jokeButton.classList.remove('hidden')
    return data;
}

function randomItemArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not){
        randomItemArray(arr, not);
    }
    return item;
}

async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemArray(
        buttonText,
        jokeButton.textContent,
    );
}

jokeButton.addEventListener('click', handleClick)