

function addition() {
    let question1 = prompt ( "Rentre le premier nombre"); 
    
    let question2 = prompt ("Rentre le Second nombre");
    let nbr1=new Number(question1);
    let nbr2=new Number(question2);
    let result = parseInt(nbr1 + nbr2);
    document.getElementById('result').innerHTML = result
}

addition();
/* === Exo1 ===
 *


 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boite de dialogue
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boite de dialogue
 * 3. Additionner les deux nombres
 * 4. Afficher le résultat dans #result
 */
