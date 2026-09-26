//################################################################################
// El módulo de subida de archivos de ReservaYa debe comprobar el tipo de documento
// adjuntado por el usuario (justificantes de pago, normas, etc.).
// Dada la extensión del archivo (reconocida tanto en mayúsculas como en minúsculas):
//  * txt -> "Archivo de texto"
//  * exe -> "Archivo ejecutable"
//  * pdf -> "Archivo PDF"
// Si no tiene extensión o es otra, mostrará "Archivo de tipo desconocido".
//################################################################################
// Escribe tu código aquí

let archivo= (prompt(`Adjunta un archivo`)).trim()
let terminacion = archivo.split(".")[1]
switch(terminacion){
    case "txt":
        console.log(`Archivo de texto`)
        break;
    case "exe":
    console.log(`Archivo ejecutable`)
    break;
    case "pdf":
        console.log(`Archivo PDF`)
    break;
    default:
        console.log(`Archivo de tipo desconocido`)
    break;
    

}
