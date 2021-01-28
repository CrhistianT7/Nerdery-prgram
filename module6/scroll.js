const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload){
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // observation.unobserve(terms.lastElementChild);
    } else {
        button.disabled = true;
    }
}

const observation = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

observation.observe(terms.lastElementChild);