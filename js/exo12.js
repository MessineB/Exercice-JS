/* === Exo12 ===
 *
 * Quand on clique sur le bouton OK
 * On doit afficher la div#result
 */


$('button').on('click', function changeClass(e) {
    e.preventDefault()
    $('#result').removeClass('hidden')
})



// Stop ! Tests, on ne touche pas :P
check.exo12();
