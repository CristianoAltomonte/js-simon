// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


let numeriCasuali = [];
let numerIpotesi = [];
let numeriCorretti= [];


for (let i = 1; i <= 5; i++) {

    function randomNumbers(max, min) {
        let numeri = Math.floor(Math.random() * (max - min + 1)) + min;
        numeriCasuali.push(numeri);
        document.getElementById('numeri').innerHTML = `${numeriCasuali}`
        console.log(numeriCasuali)
    }
    randomNumbers(100, 1);

}


setTimeout(numbersDisappear, 5000)

function numbersDisappear() {

    document.getElementById('numeri').innerHTML = ``;

}

setTimeout(appear, 6000)

function appear(){

    for (let i = 1; i <= 5; i++) {

        let numeroUtente = parseInt(prompt('inserisci i numeri'));
        numerIpotesi.push(numeroUtente);
        console.log(numerIpotesi)

        if (numeriCasuali.includes(numeroUtente)){

            numeriCorretti.push(numeroUtente);

        }
    }  
    
    document.getElementById('risultato').innerHTML= "I numeri correti sono: " + numeriCorretti;
    document.getElementById('risultato2').innerHTML= "Totale numeri corretti: " + numeriCorretti.length;

    console.log(numeriCorretti);
    console.log(numeriCorretti.length);

}

