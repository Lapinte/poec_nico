// JavaScript source code
const text = "Coucou 3";

//1
let regex1 = /[0-9]+/;

//2
let regex2 = new RegExp("\d");

let tab = regex1.exec(text);
console.log(tab[0]);
