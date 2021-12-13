/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input
 * 2. Chaque fois que l'on tape au clavier dans l'un des deux input
 *    et si les deux inputs sont remplis, on additionne les deux nombres
 *    et on affiche le résultat dans #result
 */
let a = document.getElementById('input1')
let b = document.getElementById('input2')

function calcul(){
    if ((a.value== null) || (b.value == null)){
        document.getElementById('result').innerHTML = "En attente de chiffre"
    }
    else{
        
        result = parseFloat(a.value) + parseFloat(b.value)
        document.getElementById('result').innerHTML = result
    }
}

setInterval(calcul, 500)