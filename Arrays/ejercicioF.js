//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################

const dias = ["Lunes", "Martes", "Miércoles", "Jueves" , "Viernes" , "Sábado", " Domingo" ]

let dia = 4

do {
dia = parseInt(prompt("Escribe un día de la semana (1-7)"))
}while (dia < 1 || dia > 7)


console.log(`El día ${dia} es ${dias[dia-1]}`)

if (dia <=5){
    console.log("Es laborable")
} else {
    console.log("Fin de semana")
}

    