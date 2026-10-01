//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################
const vector1 = []
const vector2 = []
let vector3 = []
let num
let contadorSuma = 0
let productos = 0





do{
    num = parseInt(prompt("Escribe un número primer array: "))
    vector1.push(num)
} while (vector1.length!= 5)

do{
    num = parseInt(prompt("Escribe un número segundo array: "))
    vector2.push(num)
} while (vector2.length!= 5)

vector3 =  vector1.map((n, i, array) => n * vector2[i])

console.log(vector3)