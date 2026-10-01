//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################

const vector = []
let numero = 0
do{
    
    numero =Math.floor(Math.random()*51)
    vector.push(numero)
}while(vector.length!= 7)
 

//ordenar
vector.sort()

console.log(vector )



//mediana (el del medio)
let mediana = vector[Math.floor(vector.length/2)]
console.log(mediana)