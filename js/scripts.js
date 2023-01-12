

// ------------TO DO------------

// Scelgo il livello di difficoltà del gioco [BONUS]
// Faccio in modo che si crei una grigla in funziona della difficoltà stabilita [BONUS]
// Genero 16 numeri casuali che rappresentano le bombe
// Quando l'utente clicca su una cella se il numero è presente nell'array delle bombe, la cella si colora di rosso e il gioco finisce
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.


// -----------DOM ELEMENT-------------

const gridContainer = document.getElementById("grid-container")
const buttonPlay = document.getElementById('playButton');
const newCell = document.createElement("div");
const span = document.createElement("span");
let level = document.getElementById('level').value;
let points = document.querySelector('.counter');



// -----------DECLARE-------------
    let row = 0;
    let col = 0;
    let size = row*col;
    let counter = [];
    let generatedNumbers = [];

// ------------FUNZIONI------------

function getRandomNumber(min, max) {

    let generatedNumbers = [];

    for (let index = 0; index < 16; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);

        let element = generatedNumbers[index];
        element = Math.floor(Math.random() * (max - min + 1) + min);

        while (generatedNumbers.includes(element)){
            element = Math.floor(Math.random() * (max - min + 1) + min);
        }
        generatedNumbers.push(element);
        
    }
    return generatedNumbers;
}
// ------------RUNCODE------------

buttonPlay.addEventListener('click', function () { 

    gridContainer.innerHTML = '';

    let level = document.getElementById('level').value;
    console.log(level);

    switch(level){
        case 'easy':
            row = 10;
            col = 10;
            generatedNumbers = getRandomNumber(1, 100);
            console.log(generatedNumbers);
            break;
        case 'medium':
            row = 9;
            col = 9;
            generatedNumbers = getRandomNumber(1, 81);
            console.log(generatedNumbers);
            break;
        case 'hard':
            row = 7;
            col = 7;
            generatedNumbers = getRandomNumber(1, 49);
            console.log(generatedNumbers);
            break;
    }

    let size = row * col;
    console.log(size);


    for (let i=0; i < size; i++) {

        index = i + 1;

        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        gridContainer.append(newCell);

        newCell.style.width = `calc(100% / ${col})`;
        newCell.style.height = `calc(100% / ${row})`;


        const span = document.createElement("span");
        span.innerHTML = index;
        newCell.append(span);

        if (generatedNumbers.includes(parseInt(newCell.innerText))) {
            newCell.classList.add('bl');
        }
        


        newCell.addEventListener("click",

            function () {

                if (newCell.classList.contains('bl')){

                    let element = document.querySelectorAll('bl');
                    console.log(element);
                    for (let index = 0; index < element.length; index++) {
                        element[index].classList.add('activebomb');
    
                    }

                    let stop = `
                    <div class="stop"> 
                    </div>`
                gridContainer.innerHTML += stop;

                let h4 = `
                <div class="lost"> 
                    <h4>Mi dispiace, hai perso!</h4>
                </div>`;
        
            }


            else {
                this.classList.add('active');
                counter.push(newCell);
                let points = document.querySelector('.counter');
                console.log(points);
                points.innerHTML = "Totale punteggio:" + ' ' + counter.length;
                if (counter.length == (size - generatedNumbers.length)) {
                    let h4Win = `
                    <div class="lost"> 
                        <h4>Bravo, hai vinto!</h4>
                    </div>`;

                }
            }
        })
    }
})

