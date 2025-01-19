/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vocali = ["a", "e", "i", "o", "u"];
let conteggio = 0;
let vocaliArray = [];

// Dichiara la funzione qui.
function numeroVocali(lettere) {
    for (let i = 0; i < lettere.length; i++) {
        // console.log(lettere[i])
        for (let k = 0; k < vocali.length; k++) {
            if (lettere[i] == vocali[k]) {
                conteggio++
                vocaliArray.push(vocali[k])
            }
        }

    }

}

// Invoca la funzione qui e stampa il risultato in console
(numeroVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log (conteggio,vocaliArray)

// creo una funzione con all'interno un ciclo for 
// trovare l'indice delle vocali 
// creare una condizione che aggiunge alla variabile vocali, le vocali 
