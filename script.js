
/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
NOTA BENE:
Seguite le milestone in ordine, non lavorate alla milestone due se prima non avete fatto funzionare la milestone 1!
Mi raccomando altrimenti sará tutto piú complicato. Procedete in ordine.

Tools:
- const / let
- input / button
- getElementById / querySelector
- addEventListener ----- Per far funzionare il button al click

*/

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

/*
quando facciamo con il form: non é piu click ma:

es.

document.querySelector('form').addEventListener('submit', function(e){
    console.log('form subnitted')
    consol.log(e.preventDefault()); //questo previene che si ricarica la pagina e non ci lascia leggere il risultato
})

dobbiamo selezionar elinput di tutto il form no solo del button

*/

