const baseEndPoint = 'http://www.recipepuppy.com/api';
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector('form.search');
const submitButton = document.querySelector('[name="submit"]');
const recipiesDiv = document.querySelector('.recipes');

async function fetchRecipes(query){
    const res = await fetch(`${proxy}${baseEndPoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit(event){
    event.preventDefault();
    const el = event.currentTarget;
    el.submit.disabled = true;
    const recipies = await fetchRecipes(el.query.value);
    // console.log(recipies);
    el.submit.disabled = false;
    displayRecepies(recipies.results)
}

function displayRecepies (recipies) {
    console.log(recipies);
    const html = recipies.map(recipe => {
        return `
        <div class="recipe">
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
            <a href="${recipe.href}">View Recipe -></a>
        </div>`
    });
    recipiesDiv.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

fetchRecipes('pizzaa');