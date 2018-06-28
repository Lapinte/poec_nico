// JavaScript source code
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let date = new Date();
console.log(date.toLocaleDateString());

let y = addZero(date.getFullYear());
let m = addZero(date.getMonth()+1);
let d = addZero(date.getDate());

console.log(`${d}/${m}/${y}`);