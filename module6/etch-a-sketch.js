const canvas = document.querySelector('#etch-a-sketch');
const contex = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");

/** Setup for drawing */
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const MOVE_AMOUNT = 10;

contex.lineJoin = "round";
contex.lineCap = "round";
contex.lineWidth = MOVE_AMOUNT;

let hue = 0;
contex.strokeStyle = `hsl(${hue}, 100%, 50%)`;
contex.beginPath();
contex.moveTo(x, y);
contex.lineTo(x, y);
contex.stroke();

/** Draw function*/

function draw( {key} ) {
    hue += 10;
    contex.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    contex.beginPath();
    contex.moveTo(x, y);
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    contex.lineTo(x, y);
    contex.stroke();
}

/** Handler for the keyboards */

function handleKey(event){
    if (event.key.includes("Arrow")){
        event.preventDefault();
        draw({ key: event.key});
    }
}

window.addEventListener('keydown',handleKey);

/** shake button function */

function clearCanvas() {
    canvas.classList.add('shake');
    contex.clearRect(0,0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, {once: true})
}

shakeButton.addEventListener('click',clearCanvas);