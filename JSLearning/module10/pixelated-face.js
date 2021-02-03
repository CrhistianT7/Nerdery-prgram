const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const context = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceContext = faceCanvas.getContext('2d');

const optionsInputs = document.querySelectorAll('.controls input[type="range"]')

function handleOption(event){
    const { value, name } = event.currentTarget;
    options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption))

const faceDetector = new FaceDetector();

const SIZE = 10;
const SCALE = 1.5;

const options = {
    SIZE: 10,
    SCALE: 1,
}

async function populateVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720},
    });
    video.srcObject = stream;
    await video.play();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;

}   

async function detect() {
    const faces = await faceDetector.detect(video);
    context.clearRect(0, 0, canvas.width, canvas.height);
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect);
}

function drawFace(face){
    const {width, height, top, left} = face.boundingBox;
    context.strokeStyle = '#ffc600';
    context.lineWidth = 2;
    context.strokeRect(left, top, width, height);
}

function censor({boundingBox: face}){

    faceContext.imageSmoothingEnabled = false;
    faceContext.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    faceContext.drawImage(
        video,
        face.x,
        face.y,
        face.width,
        face.height,


        face.x,
        face.y,
        options.SIZE,
        options.SIZE,
    );

    const width = face.width * options.SCALE;
    const height = face.height * options.SCALE

    faceContext.drawImage(
        faceCanvas,
        face.x,
        face.y,
        options.SIZE,
        options.SIZE,

        face.x - (width - face.width) /2,
        face.y - (height - face.height) /2,
        width,
        height,
    );
}

populateVideo().then(detect);