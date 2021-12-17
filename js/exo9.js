/* === Exo9 ===
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 *
 * Par exemple :
 *  - [1, 2, 3] : 6
 *  - ['un', 2, 'trois', 4, 'cinq'] : 6
 *  - [] : 0
 *  - [1, [2, 3, [4, 5], 6], 7, [8, 9]] : 45
 */


function sum(arr) {
    var somme = 0
    for (let i = 0; i < arr.length; i++) {

        if (typeof (arr[i]) == 'number') {
            somme = somme + arr[i];
        }
        else if (Array.isArray(arr[i])) {
            somme = somme + sum(arr[i]);
        }
    } 
    return somme

}



// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
