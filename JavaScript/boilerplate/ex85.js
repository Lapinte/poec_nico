// JavaScript source code
let number = {"random": "1"}; 

let fctn = function rnd() {
    return Math.random();
}

number.random = fctn;

console.log(number.random());