//################################################################################
// Dado un array de precios base de alquiler de pistas:
// const preciosBase = [20, 15, 30, 25];
// Utiliza un bucle para modificar el array original aplicando un 20% de descuento
// a cada tarifa por tratarse de la "Semana del Socio".
//################################################################################
// Escribe tu código aquí


const preciosBase = [20, 15, 30, 25]
const arrayResultado = []


console.log(`Precios sin descuento: `)

for (let index = 0; index < preciosBase.length; index++) {
    arrayResultado.push(preciosBase[index])
    
}
console.log(arrayResultado)


const arrayResultado2 = []
console.log(`Precios con descuento: `)

for (let index = 0; index < preciosBase.length; index++) {
    arrayResultado2.push(parseInt(preciosBase[index] - (preciosBase[index] * 0.20)))
    
}
console.log(arrayResultado2)