// récupérer les élements du DOM
let cases = [...document.getElementsByClassName('case')];
let joueur = document.getElementById('joueur');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let scoreNul = document.getElementById('scoreNul');


let state = { 
    joueurEncours : 1
}