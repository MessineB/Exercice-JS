/* === Exo14 ===
 *
 * jQuery UI
 * Créer un slider (jQuery ui slider) de prix allant de 0 à 100€
 * Et écrire dans #result l'écart de la fourchette choisie (par exemple,
 * si le slider de prix est entre 20€ et 90€, inscrire "70€" dans #result)
 */
$(document).ready(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 20, 90 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
        let val1 = $( "#slider-range" ).slider( "values", 1 ) 
        let val2 = $( "#slider-range" ).slider( "values", 0 )
        //console.log(val2)
        $("#result").text(val1 - val2)}

    });
    
    $( "#amount" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
    " - €" + $( "#slider-range" ).slider( "values", 1 ) );


        let val1 = $( "#slider-range" ).slider( "values", 1 ) 
        let val2 = $( "#slider-range" ).slider( "values", 0 )
        //console.log(val2)
        $("#result").text(val1 - val2)

    
} );
