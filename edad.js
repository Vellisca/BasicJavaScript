// Pide el nombre y la edad y si es mayor de 18 años indica a esa persona que ya puede conducir.

const sc = require ("prompt-sync")({sigint: true});

let nombre = sc ("¿Como te llamas? -> ")
let edad = sc ("¿Cuantos años tienes? -> ")
if (edad>=18&& edad<=120){
    console.log("Puedes conducir")
}
else{
    console.log("No puedes conducir")
}