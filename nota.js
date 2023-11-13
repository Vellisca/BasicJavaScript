//Pide una nota (número). Muestra la calificación según la nota:
//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente 

const sc = require("prompt-sync")({ sigint: true });

let nota = sc("¿Cuanto has sacado en la evaluación? -> ")

if (
    nota >= 0 && nota <= 3
) {
    console.log("Muy deficiente")
}
else {
    if (nota > 3 && nota < 5) {
        console.log("Insuficiente")
    }
    else {
        if (nota >= 5 && nota < 6) {
            console.log("Sufiente")
        } else {
            if (nota >= 6 && nota < 7)
                console.log("Bien")
            else { 
                if (nota>=7 &&nota<9){
                console.log("Notable")
            }else{
                if (nota>=9 &&nota<=10)
                console.log("Sobresaliente")
            
            }
            }
        }
    }
}
console.log(nota + " no es una nota posible")