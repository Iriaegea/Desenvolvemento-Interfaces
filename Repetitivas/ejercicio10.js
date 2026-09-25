//################################################################################
// ReservaYa necesita calcular cuántas combinaciones únicas de partidos se pueden
// formar en la fase final de un torneo con N equipos participantes (factorial de N).
// Crea un programa que pida el número de equipos (entero positivo) y calcule el total
// de combinaciones posibles.
//################################################################################
// Escribe tu código aquí
let numeroEquipos = parseInt(prompt(`Número de equipos: `))
let totalPartidos = 0
for (let index = 1; index <= numeroEquipos; index++) {
    for (let j = 1; j < numeroEquipos; j++) {
        totalPartidos ++
        
    }
    
}



console.log(`Las combinaciones totales son: ${totalPartidos }`)