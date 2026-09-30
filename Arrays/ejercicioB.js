//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################

const cadenas = []
const cadenasInvertidas = []
let cadena = ""

do{
    cadena = prompt("Escribe una frase: ")
    cadenasInvertidas.push(cadena)
} while (cadenasInvertidas.length!= 5)



    // invertir los elementos del array

cadenasInvertidas.reverse()


//usando map
const resultado = cadenasInvertidas.map(function(frase){
  return  frase.split("").reverse().join("")
})



//usando map con funcion flecha
//cadenasInvertidas.map((frase)=> frase.split("").reverse().join(""))

// invertir cada letra de cada elemento
//for (let frase of cadenasInvertidas){
  //  frase.split("").reverse().join("")

//}

console.log(resultado)