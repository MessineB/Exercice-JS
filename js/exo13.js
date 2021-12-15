/* === Exo13 ===
 *
 * Ecouter le clavier,
 *  - et inscrire dans #result le nombre de touches appuyées
 *  - la touche entrée compte pour +10
 */

let tt = 0;

$(document).keypress(function(e) {

    if(e.which === 13){
        tt = tt + 10
    }
    else{
        tt++
    }
    return $('#result').text(tt)
});




// Stop ! Tests, on ne touche pas :P
check.exo13();
