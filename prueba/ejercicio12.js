//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí


let totalCodigos = parseInt(prompt(`¿Cuántos códigos quieres?: `))
const listaCodigos = []
let codigo
let esPrimo

while(totalCodigos > 0){
    esPrimo = true
    codigo = Math.floor(Math.random() * 100) +1

    for (let index = 2; index <= Math.sqrt(codigo); index++){
        if(codigo%index==0 ){
            esPrimo = false
        }
       
    }

    if(esPrimo && codigo != 1){
        listaCodigos.push(codigo)
        totalCodigos --
    }
    
    
}



console.log(`Códigos: ${listaCodigos}`)