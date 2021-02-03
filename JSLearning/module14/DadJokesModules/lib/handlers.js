import { fetchJoke } from './index.js'
import { loader, jokeHolder, jokeButton} from './elements.js'
import {randomItemArray} from './utils.js'
import buttonText from '../data/data.js'

export async function handleClick() {
    const { joke } = await fetchJoke(loader);
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemArray(
        buttonText,
        jokeButton.textContent,
    );
}