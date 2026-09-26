//################################################################################
// ReservaYa audita las solicitudes de cancelación de reservas.
// Se pide por teclado la cantidad de solicitudes a revisar.
// El programa debe informar de cuántos balances son positivos (cobro de penalización),
// cuántos son negativos (devolución al cliente) y cuántos son iguales a 0 (cancelación neutra).
//################################################################################
// Escribe tu código aquí


let solicitudesARevisar = parseInt(prompt(`Cuántas solicitudes quedan por revisar? `))
let balance 
let positivos = 0, negativos = 0, neutros = 0
while(solicitudesARevisar > 0){
    balance = prompt(`Introduce el numero: `)
    if(balance > 0){
    positivos ++
    } else if (solicitudesARevisar < 0 ){
    negativos ++
    } else {
    neutros ++
    }



    solicitudesARevisar --
}



console.log(`Positivo: ${positivos}, Negativo: ${negativos}, Neutro: ${neutros}`)