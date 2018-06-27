// JavaScript source code
const text = "FOEIJFOEZIJFEYOLOFEZKUHFEI"

let regex = new RegExp("yolo", "i");

let tab = regex.exec(text);
console.log(tab[0]);