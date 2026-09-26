//################################################################################
// El sistema de verificación de cupones simétricos de ReservaYa comprueba si el
// código promocional introducido es un palíndromo (se lee igual de izquierda a
// derecha que de derecha a izquierda).
//################################################################################
// Escribe tu código aquí

let cuponNormal = prompt(`Introduce tu cupón`)
let cuponInvertido=""

for (let i = cuponNormal.length-1; i >= 0; i--) {
    cuponInvertido+=cuponNormal[i]
    
}


if (cuponNormal == cuponInvertido){
    console.log(`SON PAL´NDROMOS`)
}else{
    console.log(`NO SON PALÍNDROMOS`)
}