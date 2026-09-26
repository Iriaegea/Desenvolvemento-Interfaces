//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí


let codigo = prompt(`Escribe el código: `)
let car1
let car2

do{
    car1 = prompt(`Escribe un carcacter: `)
    car2= prompt(`Escribe otro caracter: `)
}while(car1.length!=1 || car2.length != 1)

let nuevoCodigo = codigo.replaceAll(car1, car2)
console.log(nuevoCodigo)