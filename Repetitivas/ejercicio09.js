//################################################################################
// Diseña un panel de gestión para el recepcionista de ReservaYa.
// Muestra un menú por pantalla que se repita mientras el usuario no elija salir:
// 1. Ver estado de pistas
// 2. Crear nueva reserva
// 3. Cancelar reserva
// 4. Salir
//################################################################################
// Escribe tu código aquí

let opcion

do{
console.log(`MENÚ:
    1. Ver estado de pistas
    2. Crear nueva reserva
    3. Cancelar reserva
    4. Salir`)


    opcion = parseInt(prompt(console.log(`Elige una opción: (1-4)`)))
} while(opcion != 4)

    console.log(`Has salido del menú`)