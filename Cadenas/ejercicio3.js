//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí
let codigoSeguridad =""
let caracter =''
let repeticiones = 0

do{ 
codigoSeguridad= prompt(`Escribe tu código: `)
 caracter = prompt(`Escribe un carcacter alfabético: `)
}while ( !caracter.match(/^[a-zA-Z]$/))



for (let letra of codigoSeguridad){
    if(letra.toUpperCase() === caracter.toUpperCase()){
        repeticiones ++
    }
}
console.log(`Repeticiones: ${repeticiones}`)



///////////////////////////////////

// declarar una expresion regular
let taquilla = "codigo"
const expresion = new RegExp(caracter, "gi")
taquilla.match(expresion)