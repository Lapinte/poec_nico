// JavaScript source code


const text = "fezf1548ffdsaf515154v54654"

let regex = RegExp("[a-z]+", "gmi");

let tab = text.match(regex);

for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

