// JavaScript source code
const text = "1231f156415";

//1
let regex1 = /[a-z]/;

//2
let regex2 = new RegExp("\d");

let tab = regex1.exec(text);
console.log(tab[0]);