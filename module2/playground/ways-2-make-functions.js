/** Anon function */

// function (name) {
//     return `Dr. ${name}`;
// }

/** function expression */

// const doctorize = function (name) {
//     return `Dr. ${name}`;
// }

/** Arrow function */

// const inch2CM = inches => inches * 2.54;

/** IIFE  Inmediately Invoked Function Expression*/
// (function () {
//     console.log('Running the Anon funciton');
//     return 'You are cool'
// })();

/** Methods */

const wes = {
    name: 'Wes Bos',
    sayHi: function() {
        console.log('Hey wes');
        return 'Hey wes';
    },
    yellHi() {
        console.log('Second');
    },
    wisperHi: () => {
        console.log('hii weeee>>');
    }
}

/** Call back functions */
/** click callback */
const button = document.querySelector('.clickme');
console.log(button);

button.addEventListener('click', function(){
    console.log('Nice Job!!!');
})

/** timer callback */
setTimeout(wes.yellHi, 1000)