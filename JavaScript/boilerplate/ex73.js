// JavaScript source code
let tab_mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let date = new Date();

let y = addZero(date.getFullYear());
let m = (date.getMonth());
let d = addZero(date.getDate());

console.log(`${d} ${tab_mois[m]} ${y}`);

const dt = new Date();
console.log(dt.toLocaleDateString('fr-FR', {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
}));