// JavaScript source code
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


let d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
//let s = addZero(d.getSeconds());

console.log(`${h} : ${m}`);

