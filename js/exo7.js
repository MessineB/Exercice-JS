/* === Exo7 ===
 *
 * str est une string
 * Retourner l'extension de fichier.
 *
 * Par exemple :
 *  - index.html : 'html'
 *  - app.min.js : 'js'
 *  - .eslintrc : 'eslintrc'
 *  - truc : false
 */

function getExtension(str) {
    if ( str.indexOf(".") == -1 ) {
        return false 
    }
    else {
        let extension = str.split('.').pop()
        return extension;
    }
}


// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);
