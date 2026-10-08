//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################

const v1 = Array.from({length: 5 }, (_, i) => prompt(`Escribe el número número ${i+1}`))
const v2 = Array.from({length: 5 }, (_, i) => prompt(`Escribe el número número ${i+1}` ))

const v3 = v1.map((n, i) => n*v2[i])


































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


vector3 =  vector1.map((n, i) => n * vector2[i])

console.log(vector3)