//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################
const temperaturasCorreccion = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)
temperaturasCorreccion.forEach(t => {
    const f = (t * 9/5 + 32).toFixed(1);
    const categoria = t< 10 ? "Fria" : t < 25 ? "Templada" : "Calurosa"
    console.log(`Temperatura: ${t}ºC, Fahrenheit: ${f}ºF, Categoria: ${categoria}`)
})

////////////////////////////////////////////////////////////////////

const temperaturas = []
let fahrenheit = 0
while (temperaturas.length != 7){
    temperaturas.push(Math.floor(Math.random() * (35 - (-5+1)) )+-5)
    
}

for (let temp of temperaturas){
    fahrenheit = ((temp * 1.8 ) + 32).toFixed(2)

    if (fahrenheit <= 50){
        console.log(`La temperatura ${fahrenheit}F es fria`)  
    }else if( fahrenheit  <= 98.6 && fahrenheit >50 ){
        console.log(`La temperatura ${fahrenheit}F es templada `)
    } else if (fahrenheit > 99){
        console.log(`La temperatura ${fahrenheit}F es calurosa `) 
    }

    }

  
