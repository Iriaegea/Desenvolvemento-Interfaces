//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí

let codigoSeguridad= prompt(`Escribe tu código: `)
let caracter = prompt(`Escribe un carcacter alfabético: `)
let repeticiones = 0
for (let letra of codigoSeguridad){
    if(letra.toUpperCase() === caracter.toUpperCase()){
        repeticiones ++
    }
}
console.log(`Repeticiones: ${repeticiones}`)