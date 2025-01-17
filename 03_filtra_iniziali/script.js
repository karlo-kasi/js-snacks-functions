/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function soloLettera (pippo, lettera){
    let newArray = []
    for (let i = 0; i < pippo.length; i++){
        if (pippo[i][0].toUpperCase() === lettera.toUpperCase()){ 
            newArray.push(pippo[i])
        }
    }
         
    if (newArray.length === 0){
       console.log (`Non ci sono nomi che iniziano con ${lettera}`) 

    } else {
        return newArray
    }   


}

// Invoca la funzione qui e stampa il risultato in console

console.log (soloLettera(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]