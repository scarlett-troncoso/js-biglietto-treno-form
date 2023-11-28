/*
Descrizione:
Il programma dovrà chiedere all'utente:
  il numero di chilometri che vuole percorrere
  e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
  il prezzo del biglietto è definito in base ai km (0.21 € al km)
  va applicato uno sconto del 20% per i minorenni
  va applicato uno sconto del 40% per gli over 65 (fortunelli).

L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/

/*
tools:
prompt
const, let

*/

/*
const kilometri_1 = 0.21 ;
console.log(kilometri_1);

//chiede al utente il numero di chilometri che vuole percorrere
const user_kilometri = prompt('Quanti Kilometri vuoi percorrere?')
console.log(user_kilometri)


//chiede al utente la sua etá
const user_eta = prompt('Quanti anni hai?')
console.log(user_eta)


//Variabili risultati e sconti
const result =  user_kilometri * kilometri_1 ; //risultato biglietto genérico
const sconto_65 = 40 / result * 100 ; // calcolo sconto over 65
const sconto_minori = 20 / result * 100 ; // calcolo sconto minoreni
const result_2 =  user_kilometri * kilometri_1 - sconto_65 ; //risultato over 65
const result_3 =  user_kilometri * kilometri_1 - sconto_minori; //risultato minoreni


    if ((user_eta >= 18) && (user_eta < 65)) {
    console.log (result); 
    
    // Stampa in pagina L'output del prezzo finale
    let prezzoElement = document.getElementById ('prezzo')
    prezzo.innerHTML = 'Prezzo del Biglietto:', result;

    let prezzo_numeroElement = document.getElementById ('prezzo_numero')
    prezzo_numeroElement.innerHTML = result;

        } else if (user_eta >= 65) {
            console.log (result_2);

            // Stampa in pagina L'output del prezzo finale
            let prezzoElement = document.getElementById ('prezzo')
            prezzo.innerHTML = 'Prezzo del Biglietto:', result_2;
        
            let prezzo_numeroElement = document.getElementById ('prezzo_numero')
            prezzo_numeroElement.innerHTML = result_2;
        
        } else if (user_eta < 18) {
            console.log (result_3);

            // Stampa in pagina L'output del prezzo finale
            let prezzoElement = document.getElementById ('prezzo')
            prezzo.innerHTML = 'Prezzo del Biglietto:', result_3;
        
            let prezzo_numeroElement = document.getElementById ('prezzo_numero')
            prezzo_numeroElement.innerHTML = result_3;
        }
*/


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

// chieda all’utente: Il numero di chilometri da percorrere



// chieda all’utente: Età del passeggero
 



            
