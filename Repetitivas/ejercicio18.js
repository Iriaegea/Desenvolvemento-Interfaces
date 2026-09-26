//################################################################################
// El departamento de seguridad exige validar los límites de aforo autorizados.
// Pide el límite inferior y superior del aforo (si el inferior es mayor, vuelve a pedirlo).
// A continuación introduce el número de espectadores de cada partido hasta pulsar 0.
// El programa informará de:
//  * La suma total de espectadores dentro del intervalo abierto.
//  * Cuántos partidos quedaron fuera del rango.
//  * Si algún partido registró exactamente el aforo de los límites.
//################################################################################
// Escribe tu código aquí

let limiteSuperior=prompt(`Escribe el límite superior: `) 
let limiteInferior
do{
limiteInferior = prompt(`Dime el límite inferior: `)
}while(limiteInferior>limiteSuperior)



let sumaDentro = 0;
let partidosFuera = 0;
let algunPartidoEnLimite = false;

let espectadores = parseInt(prompt("Escribe el número de espectadores (0 para terminar):"));

while (espectadores != 0) {
  if (espectadores == limiteInferior || espectadores == limiteSuperior) {
    algunPartidoEnLimite = true;
  }

  if (espectadores > limiteInferior && espectadores < limiteSuperior) {
    sumaDentro += espectadores;
  } else {
    partidosFuera++;
  }

  espectadores = parseInt(prompt("Escribe el número de espectadores (0 para terminar):"));
}

console.log(`Suma de espectadores: ${sumaDentro}`);
console.log(`Partidos: ${partidosFuera}`);
