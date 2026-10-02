//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################

// correccion
const notas = Array.from({length: 6}, (_,i) => parseInt(prompt(`Dime la ${i+1} nota`))) // declarar asi mejor

let aprobados = notas.filter(x => x >=5).length
let sum = (notas.reduce((x,y)=>{x+=y}))
console.log(sum)
console.log(notas)
console.log(`Nota media: ${(sum/notas.length).toFixed(1)}`)

//Usar sort para sacar la más alta y la más baja
       



/////////////////////////////////////////


const notas = []
let nota
do{
nota = parseInt(prompt("Escribe una nota: "))
notas.push(nota)

}while(notas.length!=6)


console.log(notas)
console.log(`MAS BAJA: ${Math.min(...notas)}`)
console.log(`MAS ALTA: ${Math.max(...notas)}`)

let suma = 0
for (let notaActual of notas){
    suma += notaActual
}
console.log(`MEDIA: ${suma/notas.length}`)



// funcion de media con reduce:
function sumarTodo(contador, num){  //reduce coge el primer elemento y lo usa de contador y el segundo como elemento del array
    return contador + num
}


//media con reduce
let sumaTotal = notas.reduce(sumarTodo)

// media con reduce con funcion flecha
let sumaTotalFlecha = notas.reduce(function())

console.log(`Media: ${sumaTotal/notas.length}`)



