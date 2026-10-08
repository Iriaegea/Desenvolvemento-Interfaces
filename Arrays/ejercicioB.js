//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################

const vectorrepaso = Array.from({length: 5}, (_, i) => 
    prompt(`Escribe el texto ${i+1}`))


vectorrepaso.forEach((textito) => 
textito.split("").reverse().join("")
)



























// corrección 
const vector = Array.from({length: 7}, (_, index) =>prompt(` Introduce la ${index+1} cadena`)) // barra baja pq no m einteresa
const vector2 = vector.map((cadena) => cadena.split("").reverse().join(""))

console.log(vector2);





//////////////////////////
const cadenasInvertidas = []
let cadena = ""

do{
    cadena = prompt("Escribe una frase: ")
    cadenasInvertidas.push(cadena)
} while (cadenasInvertidas.length!= 5)



// invertir los elementos del array (modifica el array)

cadenasInvertidas.reverse()


//usando map (hay que guardar el resultado en algún sitio)
const resultado = cadenasInvertidas.map(function(frase){
  return  frase.split("").reverse().join("")
})



//usando map con funcion flecha
//resultado = cadenasInvertidas.map((frase)=> frase.split("").reverse().join(""))

// invertir cada letra de cada elemento
//for (let frase of cadenasInvertidas){
  //  frase.split("").reverse().join("")

//}

console.log(resultado)