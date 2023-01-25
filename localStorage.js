const textAreaReference = document.getElementById('text')
const saveButtonReference = document.getElementById('save-button')
const loadButtonReference = document.getElementById('load-button')
const resetButtonReference = document.getElementById('reset-button')

// const SAVE_KEY = 'savedText' // questo vi risparmia eventuali typos
// opzionale! altrimenti usate la stringa 'savedText' a mano, facendo attenzione
// di usare la stessa stringa sia per setItem che per getItem

const reset = function () {
  textAreaReference.value = ''
  console.log('textarea svuotata')
}

const save = function () {
  // save prendere il contenuto della textArea e lo salva nel localStorage
  let content = textAreaReference.value // è una stringa!
  localStorage.setItem('savedText', content)
  console.log('contenuto salvato!')
}

const load = function () {
  // recupero il precedente contenuto salvato della textarea nel localStorage
  let savedContent = localStorage.getItem('savedText')
  textAreaReference.value = savedContent
  console.log('contenuto caricato correttamente')
}

saveButtonReference.onclick = save
loadButtonReference.onclick = load
resetButtonReference.onclick = reset
// metodo alternativo
// saveButtonReference.addEventListener('click', save)

// window.onload = function () {
//   load()
// }
// easter egg: scommentando la funzione window.onload abilitate il ricarimento automatico
// del testo salvato! :)
