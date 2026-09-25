//################################################################################
// El equipo de mantenimiento debe pasar la máquina cepilladora solo por las pistas
// con número par ubicadas entre dos delimitadores introducidos por el usuario.
// Pide los dos números de pista e imprime todos los números pares del intervalo.
//################################################################################
// Escribe tu código aquí
let min = parseInt(prompt(`Escribe el inicio :`))
let max = parseInt(prompt(`Escribe el límite: `))

for(let i = min; i <= max;i++){
    if (i%2 == 0){
        console.log(i)
    }
}