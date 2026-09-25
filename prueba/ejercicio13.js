//################################################################################
// El recepcionista introduce los cobros en metálico de la jornada en el TPV de ReservaYa.
// El programa pide importes en euros hasta que se introduce un 0.
// Al terminar, debe imprimir la recaudación total y el ticket medio por cobro.
//################################################################################
// Escribe tu código aquí
let introducido
let recaudacionFinal = 0
let contador = 0


do{
    introducido= parseFloat(prompt(`Introduce un cobro`))
    
    recaudacionFinal += introducido
    contador ++
    
    
}while(introducido != 0)

    console.log(`La recaudacion final es de: ${recaudacionFinal} y la media es de: ${recaudacionFinal/contador}`)