/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 */




    let question1 = document.getElementById('input1')
    let question2 = document.getElementById('input2')
    let button = document.getElementById('button')

    button.addEventListener('click', addition)

    function addition() {
    let result = parseInt(question1.value) + parseInt(question2.value);
    alert(result);
}

