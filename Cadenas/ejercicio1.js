//################################################################################
// El terminal de control del marcador electrónico de una pista necesita procesar
// el código identificador de una reserva escribiendo en consola cada carácter
// en una línea independiente mediante un bucle for.
//################################################################################
// Escribe tu código aquí

let marcador = prompt(`Escribe el marcador: `)
for (let index = 0; index < marcador.length; index++) {
    console.log(marcador[index])
    
}