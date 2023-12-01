
/* Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

Tools:
- const / let
- input / button
- getElementById / querySelector
- addEventListener ----- Per far funzionare il button al click */

/* 
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

//DOM elements
const generetorBtn = document.querySelector('#generator');
const kilometriInput = document.querySelector('#km');
const etaInput = document.querySelector('#eta');
const kilometri_1 = 0.21 ; // --C

// chieda all’utente: Il numero di chilometri da percorrere
console.log('kilometriInput')


// chieda all’utente: Età del passeggero
console.log('etaInput')

// al click calcolare
generetorBtn.addEventListener('click', function(){
    //console.log('clicked', kilometriInput.value, etaInput.value);
    
    const kmValue = kilometriInput.value
    const etaValue = etaInput.value 
    //console.log(kmValue,etaValue,kilometri_1);

    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    console.log(kmValue * kilometri_1);
    const result =  kmValue * kilometri_1 ; //risultato biglietto genérico -- C

    //va applicato uno sconto del 20% per i minorenni
    let discount;

    if (etaValue < 18) {
      console.log('apply a 20% discount');
      discount = 0.2

    } else if (etaValue > 65) {
      console.log('apply a 40% discount');
      discount = 0.4

    } else {
      console.log('apply result');
      discount = 0
    }

    console.log(discount);

    const prezzo_finale = result - (result * discount);
    console.log('Euro' + prezzo_finale.toFixed(2));

    document.getElementById('biglietto').innerHTML = 'IL prezzo del tuo biglietto é: ' + 'euro' + prezzo_finale.toFixed(2);
})
*/

//MILESTONE 2
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

//DOM elements
const generetorBtn = document.querySelector('#generator');
const kilometriInput = document.querySelector('#km');
const etaInput = document.querySelector('#eta');
const kilometri_1 = 0.21 ; // --C


// chieda all’utente: Il numero di chilometri da percorrere
console.log('kilometriInput')

// chieda all’utente: Età del passeggero
console.log('etaInput')

// al click calcolare
generetorBtn.addEventListener('click', function(){
    
    const kmValue = kilometriInput.value
    const etaValue = etaInput.value 
    //console.log(kmValue,etaValue,kilometri_1);

    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    console.log(kmValue * kilometri_1);
    const result =  kmValue * kilometri_1 ; //risultato biglietto genérico -- C

    //va applicato uno sconto del 20% per i minorenni
    let discount;

    if (etaValue < 18) {
      console.log('apply a 20% discount');
      discount = 0.2
      document.getElementById('offerta').innerHTML = 'Biglietto Minorenni - Sconto 20% ';

    } else if (etaValue > 65) {
      console.log('apply a 40% discount');
      discount = 0.4
      document.getElementById('offerta').innerHTML = 'Biglietto Over 65 - Sconto 40% ';

    } else {
      console.log('apply result');
      discount = 0
      document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    }

    console.log(discount);

    const prezzo_finale = result - (result * discount);
    console.log('Euro' + prezzo_finale.toFixed(2));
    document.getElementById('biglietto').innerHTML = 'Euro ' + prezzo_finale.toFixed(2);

    const nomeInput = document.querySelector('#nome');
    console.log(nomeInput.value);
    document.getElementById('nome_passeggero').innerHTML = nomeInput.value;

    document.getElementById('codice_cp').innerHTML = Math.floor(Math.random() * 9999);
    const cp = document.getElementById('codice_cp').innerHTML = Math.floor(Math.random() * 9999);
    console.log('Codice CP' + cp);
    
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9);
    const numero_carrozza = Math.floor(Math.random() * 9);
    console.log('Carrozza' + numero_carrozza);
    
})

document.querySelector('form').addEventListener('submit', function(e){
  console.log('form submitted');
  console.log(e.preventDefault()); //questo previene che si ricarica la pagina e non ci lascia leggere il risultato
})

