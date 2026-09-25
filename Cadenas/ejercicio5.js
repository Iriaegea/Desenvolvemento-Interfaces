//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí
let avatar = ""
let nombreCompleto=prompt(`Escrib tu nombre completo: `)

let arrayNombre = nombreCompleto.split(" ")

for (let palabra of arrayNombre){
avatar+=palabra[0].toUpperCase()
}


console.log(avatar)