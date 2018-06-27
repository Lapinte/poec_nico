// JavaScript source code

var i = 0;
let trois = setInterval(function () {
    i++;
    if (i === 3) {
        clearInterval(trois);
    }
    console.log("coucou");
    
}, 1000);


