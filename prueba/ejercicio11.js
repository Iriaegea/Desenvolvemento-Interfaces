//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí
let intentos = 10
const numeroSecreto = Math.floor(Math.random() * 100) +1
let numeroPropuesto = parseInt(prompt(`Adivina el número que estoy pensando (1-100)`))
intentos --



do{
 
if(numeroPropuesto < numeroSecreto){
    console.log(`Mi número es más grande`)
   numeroPropuesto = parseInt(prompt(`Dime otro número (1-100)`))
} else if(numeroPropuesto > numeroSecreto){
    console.log(`Mi número es más pequeño`)
    numeroPropuesto = parseInt(prompt(`Dime otro número (1-100)`))
} else {
    console.log(`HAS ACERTADO!`)
    
}
intentos --
console.log(`INTENTOS: ${intentos}`)

}while(intentos>0 && numeroPropuesto!=numeroSecreto)

if(intentos > 0){
console.log(`Mi número era: ${numeroSecreto}, lo ahs acertado con  ${intentos + 1} intentos`)
}else{
    console.log(`Has perdido`)
}

