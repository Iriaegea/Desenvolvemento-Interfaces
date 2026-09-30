//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################

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
