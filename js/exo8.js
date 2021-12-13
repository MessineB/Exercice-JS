/* === Exo8 ===
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 *
 * Par exemple :
 *  - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 *  - ['css', 'html', 'js', 'php'] : 'html'
 *  - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 *  - [] : false
 */

function getLongestString(arr) {
    let NombredeLettresmax= 0;
    let Motlepluslong=0;
    if ( arr == 0 ) {
        return false 
    }
    else {
       for (i=0 ; i< arr.length ; i++) {
           let NombredeLettredei =  arr[i].length;
           if ( NombredeLettresmax < NombredeLettredei) {
               NombredeLettresmax = NombredeLettredei ;
               Motlepluslong=arr[i];
                
           }   
       }   
    }
    return Motlepluslong
}



// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
