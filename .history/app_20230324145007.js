// récupérer les élements du DOM
let cases = [...document.getElementsByClassName('case')];
let joueur = document.getElementById('joueur');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let scoreNul = document.getElementById('scoreNul');


let state = { 
    joueurEncours: 1,
    scoreJ1: 0,
    scoreJ2: 0,
    matchNuls: 0,
    c1: 0,
    c2: 0, 
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
};
const verifierVictoire = () => {
    if(
        (state.c1 == state.c2 && state.c2 == state.c3  && state.c1 > 0) ||
        (state.c4 == state.c5 && state.c5 == state.c3  && state.c4 > 0) ||
        (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0 ) ||
        (state.c1 == state.c5 )
        )
}

function jouerCase(e) {
    let idCase = e.target.id;
    if (state[idCase] !== 0) return;

    state[idCase] = state.joueurEncours;

    let isVictoire = verifierVictoire();

}


cases.forEach((el) => {
    el.addEventlistener("click", jouerCase);
})
