const avenger = {
    nome: "Steve",
    clave: "Capitán América",
    poder: "Dogra"
}


console.log(avenger.nome)

let {nome, clave, poder} = avenger // desestructuracion
console.log(nome)
console.log(clave)

const extraer = (avenger) => {
    let {nome, clave, poder} = avenger 
    console.log(nome)
    console.log(clave)
}

extraer(avenger)

const extraer2 = ( {nome, clave, poder}) => {
    console.log(nome)
    console.log(clave)
}
extraer2(avenger)



// desestructuracion de arrays
const avengers =["Thor", "Ironman", "Spiderman"]
console.log(avengers[0])

const [thor, ironman, Spiderman] = avengers
console.log(thor)


const [,, spidi] = avengers
console.log(spidi)

const extraerArray = ([t,i,s]) => {
        console.log(t);
         console.log(i);
          console.log(s);

}
extraerArray(avengers)




function activar (quien, objeto = "batiseñal"){
    console.log(`${quien} activou o sinal ${objeto}`)
}

activar("Gordon", "alarma")
activar("Gordon")

var hulk = {
    nombre: "Hulk",
    smash: function() {
        setTimeout(function(){
            console.log(this.nombre + "smash!!!!") //hay q usar funcion flecha para poder usar this, esto esta mal
        }, 1000)
    }
}