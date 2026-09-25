//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí
let nombrePista = prompt(`Nombre de la pista: `)
let invertido = ""

for (let i = nombrePista.length;  i>= 0; i--) {
    invertido += nombrePista.charAt(i)
    
}


console.log(`Invertido: ${invertido}`)