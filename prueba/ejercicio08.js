//################################################################################
// La tarifa de penalización por cancelación en ReservaYa se calcula con un
// multiplicador progresivo B (base real) elevado a E (exponente entero positivo) tramos.
// Pide por teclado la base B y el exponente E y calcula el resultado mediante un
// bucle (sin utilizar el operador ** ni Math.pow).
//################################################################################
// Escribe tu código aquí


let repeticiones = parseInt(prompt("Escribe un exponente entero positivo"))
let baseReal = parseInt(prompt("Escribe la base entera real"))
let resultado = baseReal
while(repeticiones-1 > 0){
resultado = baseReal * resultado
console.log(`Calculando... ${resultado}`)
repeticiones --
}

console.log(`El resultado es ${resultado}`)