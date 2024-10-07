/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


1. il programma chiede attraverso 2 prompt diversi prima il numero di chilometri che si vuole percorrere e poi l'età del passeggero
2. il programma deve dare un prezzo al chilometraggio ricevuto dall utente
3. il programma controlla se si devono applicare sconti in base all età dell utente
4. il prezzo finale va arrotondato per difetto e si ferma ai primi 2 decimali per indicarne il prezzo in centesimi*/

const km = Number(window.prompt("Scivi i chilometri che vuoi percorrere", ""));
const laMiaEta = Number(window.prompt("Scrivi la tua età", ""));


const prezzo = km * 0.21



if (laMiaEta < 18) {

    const prezzo18 = (prezzo/100)*80
    console.log(Math.round(prezzo18*100) /100)

}

else if (laMiaEta > 65) {

    const prezzo65 = (prezzo/100)*60
    console.log(Math.round(prezzo65 * 100) / 100)
}

else {
    console.log(Math.round(prezzo * 100) / 100)
}

