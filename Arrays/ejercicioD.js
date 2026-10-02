//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################

function sumarTodos( total, numero){
    return total + numero
}



const vector = []
let respuesta

do {
respuesta = parseInt(prompt("Escribe un número: ")) // no se puede hacer arrayfrom pq con 0 sale
vector.push(respuesta)
} while (vector.length != 7 && respuesta != 0)

console.log(vector)

//let sumaVector= vector.reduce(sumarTodos) // con funcion

// funcion flecha
let sumaVector= vector.reduce( ( total, numero)=> total + numero)

console.log(sumaVector)