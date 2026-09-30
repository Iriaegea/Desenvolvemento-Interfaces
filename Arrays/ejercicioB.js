//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################

const cadenas = []
const cadenasInvertidas
let cadena = ""

do{
    cadena = prompt("Escribe una frase: ")
    cadenas.push(cadena)
} while (cadenas.length!= 5)


// invertir los elementos del array
cadenasInvertidas = cadenas
cadenasInvertidas.reverse()


//usando map
cadenasInvertidas.map(function(frase){
  return  frase.split("").reverse().join("")
})
// invertir cada letra de cada elemento
for (let frase of cadenasInvertidas){
    frase.split("").reverse().join("")

}