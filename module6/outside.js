const cardButton = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '600')} "alt="${name}"/>
        <p>${desc}</>
    `;
    modalOuter.classList.add('open');
}

cardButton.forEach(buttton => buttton.addEventListener('click', handleCardButtonClick));

function closeModal(){
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event){
    const isOutSide = !event.target.closest('.moda-inner');
    if(isOutSide){
        closeModal();
    }
})

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        closeModal();
    }
})