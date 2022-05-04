console.log(document.title);

document.querySelector('#gen-1').innerHTML = "Generasión 1 Pokimon";

document.querySelector('.infocard-list.infocard-list-pkmn-lg').style.backgroundColor = "orange";

var URLactual = window.location.href;
console.log(URLactual);

var dominio = document.domain;
console.log(dominio);

var img = document.querySelectorAll('img, .src');
console.log(img);

let imagen = document.querySelectorAll('img');
for (let i = 0; i < imagen.length; i++) {
    imagen[i].src= "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    
}



var voladores = document.querySelectorAll(".itype.flying");
for (let i = 0; i < voladores.length; i++){
    voladores[i].style.backgroundColor = "red";
}