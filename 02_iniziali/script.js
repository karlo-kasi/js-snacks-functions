/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let primeLettere = []

// Dichiara la funzione qui.
function lettera (){

    for (let i = 0; i < names.length; i++){
      console.log (names[i][0])
      primeLettere.push(names[i][0])

}
    
}

// Invoca la funzione qui e stampa il risultato in console
lettera () 


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(primeLettere)