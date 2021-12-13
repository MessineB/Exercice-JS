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
    let Total=0;
    let Tempo = 0;
    if (arr == 0 ){
        return 0;
    }
    else {
        for (let i=0 ; i< arr.length ; i++) {
            if (typeof(arr[i]) == 'string' ) {
                Tempo = 0;
                Total =  parseInt(Total) + parseInt(Tempo)
            }
            else {
            Tempo =  arr[i] 
            Total = parseInt(Total) + parseInt(Tempo)
            }
            console.log(Total)
        }
}
return Total
}

// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
