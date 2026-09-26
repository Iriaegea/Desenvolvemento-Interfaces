//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí

let cadenaOriginal = prompt(`Escrbe una cadena: `)
let cadenaCambiada = ""

for (let letra of cadenaOriginal){
    if(letra == letra.toUpperCase()){
        cadenaCambiada+= letra.toLowerCase()
    } else {
        cadenaCambiada += letra.toUpperCase()
    }
} 


console.log(cadenaCambiada)