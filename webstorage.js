// I web storage sono stati introdotti con HTML5, sono nati per risolvere alcune
// limitazioni presenti con i vecchi sistemi di storage, ad es. i cookie:
// 1) i cookie permettono di salvare una quantità di spazio limitato (4KB),
// mentre le nuove API Webstorage permettono di salvare circa 5MB
// 2) i cookie non erano stati pensati in modo da differenziare i dati nelle diverse
// sessioni

// Problemi risolti con le API di WebStorage, esistono due memorie:
// 1) localStorage -> permanenza dei dati finchè non li si cancella
// 2) sessionStorage -> permanenza dei dati finchè il tab o la finestra rimane aperto

// utilizzano gli stessi metodi JS!
// .setItem()
// .getItem()

localStorage.setItem('theme', 'dark') // <-- imposto nel localStorage una chiave di nome "theme"

let currentTheme = localStorage.getItem('theme') // <-- leggo la chiave di nome "theme", ottengo il suo valore: "dark"
console.log(currentTheme) // <-- "dark"

localStorage.removeItem('theme') // <-- elimino la chiave "theme" dal localStorage
let currentThemeNow = localStorage.getItem('theme') // <-- ora "theme" non c'è più
console.log(currentThemeNow) // <-- ottengo null

// setItem converte in automatico a stringa qualsiasi valore primitivo
localStorage.setItem('justANumber', 100) // abbiamo salvato 100 come numero
let retrievedNumber = localStorage.getItem('justANumber') // abbiamo recuperato "100" come stringa
console.log(typeof retrievedNumber)
// volete riottenere 100 come numero? -> parseInt(retrievedNumber) -> trasforma "100" in 100

// tutto bene quando dobbiamo salvare delle stringhe o degli altri valori primitivi,
// ma come utilizziamo localStorage/sessionStorage per salvare degli oggetti/array?

let teacher = {
  name: 'Stefano',
  subject: 'JS',
}

// visto che setItem permette di utilizzare solo valori stringa, dobbiamo trasformare
// l'oggetto/array in una stringa! utilizziamo un metodo chiamato JSON.stringify()

localStorage.setItem('profile', JSON.stringify(teacher))
// JSON.stringify() prende un oggetto JS e lo trasforma in una stringa

// nel recuperare un oggetto che era stato precedentemente "stringhifizzato" :)
// dobbiamo tenere a mente che per riportarlo alla forma originale dobbiamo
// ri-trasformare la stringa in un oggetto/array
let retrievedTeacherAsString = localStorage.getItem('profile')
console.log(typeof retrievedTeacherAsString) // purtroppo è una stringa :(
// console.log(retrievedTeacherAsString.name) // <-- non funzione perchè è una stringa

// come ritrasformo retrievedTeacherAsString in un oggetto?
// lo facciamo con un metodo che si chiama JSON.parse()
let retrievedTeacher = JSON.parse(retrievedTeacherAsString)
// ora retrievedTeacher è l'oggetto originale, === teacher
console.log(retrievedTeacher.name) // <-- stefano
