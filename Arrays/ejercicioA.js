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

  
