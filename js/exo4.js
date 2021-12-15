/* === Exo4 ===
 *
 * 1. Dans #container, affiche l'heure à la seconde près.
 *    Sous le format : 11h 12m 06s
 * 2. Chaque seconde, l'heure doit être actualisée
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */

// On definit une fonction nommée "Clock"

function Clock() {
    // On recupere l'heure et la date via la commande "new Date" que l'on stock dans la variable "currentime"
    var currentTime = new Date(),
    // On stocke les secondes dans "Seconds"
    Seconds = currentTime.getSeconds(),
    // On stock les Heures dans "Hours"
    Hours = currentTime.getHours(),
    // On stock les Minutes dans "Minutes"
    Minutes = currentTime.getMinutes(),
    // On code le texte que l'on veut afficher qui sera dans une variable "text"
    text = ( Hours + ':' +  Minutes + ':' + Seconds )
    // On fait afficher le texte dans le container via son ID dans l'HTML 
    document.getElementById("container").innerHTML = text
}
// Enfin on fait actualiser la fonction "Clock" chaque secondes pour que l'heure / Minutes / Secondes restent a jour . 
setInterval (Clock , 1000 )