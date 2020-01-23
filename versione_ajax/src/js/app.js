$(document).ready(function() {
    // 1- recupero il codice html del template
    var template_html = $('#disco-template').html();
    // 2- do in pasto a handlebars il codice html
    // N.B.: la funzione "Handlebars.compile" restituisce una *funzione* da utilizzare per andare a usare il template
    var template_function = Handlebars.compile(template_html);


    $.ajax({
        "url": "http://localhost:8888/Boolean_2/4_gennaio_23_php_ajax_dischi/versione_ajax/dischi.php",
        "method": "get",
        "success": function(data) {
            // recupero l array che contiene tutti i dischi
            var dischi = JSON.parse(data);
            // ciclo tutti i dischi
            for (var i = 0; i < dischi.length; i++) {
                // recupero il disco corrente
                var disco = dischi[i];
                // per ogni disco recupero le varie info
                var img_copertina = disco.image;
                var album = disco.title;
                var artista_album = disco.artist;
                var anno_uscita = disco.year;
                var genre_album = disco.genre;
                // creo le variabili di handlebars
                var variabili = {
                    copertina: img_copertina,
                    titolo: album,
                    artista: anno_uscita,
                    anno: artista_album,
                    genere: genre_album
                };
                // creo il template
                var html = template_function(variabili);
                // lo appendo al contenitore dei dischi
                $("#dischi").append(html);
            }
        },
        "error": function() {

        }
    });
    // bonus!!
    $("#scelta-genere").change(function(){
        // recupero il genere selezionato dall utente
        var genere_selezionato = $(this).val();
        if (genere_selezionato == "") {
            $(".cd").fadeIn();
        } else {
            $(".cd").each(function(){
                var genere_disco = $(this).attr("data-genere");
                // console.log(genere_disco);
                if (genere_disco.toLowerCase() == genere_selezionato.toLowerCase()) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            });
        }
        // per ogni disco verifico se il suo genere è uguale a quello selezionato, in quel caso lo mostro altrimenti lo nascondo


    });
});
