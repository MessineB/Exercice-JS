/* === Exo11 ===
 *
 * Compléter la ligne, en utilisant uniquement les fonctions :
 * .next(), .prev(), .parent(), .children(), .eq(), .text()
 *
 * Le but : remplacer "Challenge à faire" par "Challenge réussi !"
 */

$('#je-suis-ici');

$('#container > div').children().eq(2).text('Challenge réussi !')

// Stop ! Tests, on ne touche pas :P
check.exo11();
