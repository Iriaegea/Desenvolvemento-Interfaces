//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí
let frase = prompt(`Escribe una frase : `)
let arrayPalabras = frase.split(" ")

console.log(`La frase tiene ${arrayPalabras.length} palabra `)