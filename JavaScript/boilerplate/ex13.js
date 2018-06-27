// JavaScript source code

//1
function show() {
    console.log("coucou");
}
setInterval(show, 1000);

//2 methode anonyme
setInterval(function () { console.log("coucou methode anonyme") }, 1000);



//3 arrow function
setInterval(() => {
    console.log("coucou arrow function ES6");
}, 1000);