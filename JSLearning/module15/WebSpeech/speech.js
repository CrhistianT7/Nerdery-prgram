import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors';
const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors.map( color => {
        return `<span class='color ${color} ${isDark(color) ? 'dark' : ""}' 
        style="background: ${color};">${color}</span>`;
    }).join('')
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
    if (!('SpeechRecognition' in window)) {
        console.log('Speech Recogniztion not supported')
        return;
    }
    console.log("Start Speaking...");
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.start();

}

colorsEl.innerHTML = displayColors(colorsByLength);
start()
