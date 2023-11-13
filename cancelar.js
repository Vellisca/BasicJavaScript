// Pedir los números hasta que se introduzca “cancelar”. Si no es un número deberá indicarse con un "no entendido" y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 

const sc = require("prompt-sync")({ sigint: true });
let suma = 0

let num = sc("Si quieres salir del programa escribe cancelar, mientras escribe numeros -> ")
while (num != "cancelar") {
    if (Number(num)) {
        
        suma = suma + Number(num)
        num = sc("Si quieres salir del programa escribe cancelar, mientras escribe numeros -> ")

    }
    else {
        console.log("No es número")
        num = sc("Si quieres salir del programa escribe cancelar, mientras escribe numeros -> ")
    }

}
console.log("La suma de los numero introducidos es " + suma)
console.log("Saliendo... ")
