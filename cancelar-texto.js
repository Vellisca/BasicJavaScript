//Pedir cadenas de texto hasta que se introduzca "cancelar. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. 

const sc = require("prompt-sync")({ sigint: true });
let texto = '<'

let cadena = sc("Si quieres salir del programa escribe cancelar, se mostrará todo lo que escribas-> ")
while (cadena != "cancelar") {

        
        texto = texto + '-' + cadena
        cadena = sc("Si quieres salir del programa escribe cancelar -> ")
}
console.log('Has escrito: ')
console.log(texto+ '->')
console.log("Saliendo... ")
