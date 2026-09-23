//################################################################################
// Un usuario adquiere el abono "Socio VIP" de ReservaYa a pagar en 20 meses.
// El primer mes paga 10€, el segundo 20€, el tercero 30€ y así sucesivamente.
// Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total
// acumulado tras los 20 meses.
//################################################################################
// Escribe tu código aquí
 let mes = parseInt(0)
 let precio = parseInt(0)
let totalFinal = parseInt(0)
 while (mes < 20){
    precio +=10
    totalFinal += precio
    console.log(`Mes: ${mes+1}
A pagar: ${precio}`)
    
    
    
    mes++
 }

console.log(`El total a pagar es de : ${totalFinal}`)
