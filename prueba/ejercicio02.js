//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí
let confirmada = false;
while(confirmada != true ){
    console.log(`Pendiente de pago`)
    
    let respuesta = prompt(`Quieres pagar?(S/N)`)
    if(respuesta.toUpperCase() == "S"){
        confirmada = true
    } 
}

console.log(`Has pagado la reserva. Reserva confirmada`)
