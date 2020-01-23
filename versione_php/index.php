<?php include "dischi.php"; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script> -->
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="public/css/app.css">
    </head>
    <body>
        <header>
        </header>
        <select id="scelta-genere">
            <option value="">--Scegli un genere--</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="metal">Metal</option>
        </select>


        <div id="dischi" class="cds-container">
            <?php foreach ($dischi as $disco) {
                echo "<div class='cd'>";
                echo "<img class='copertina' src='" . $disco['image'] . "'>";
                echo "<p class='titolo'>" . $disco["title"] . "</p>";
                echo "<span class='artista'>" . $disco["artist"] . "</span>";
                echo "<span class='anno'>" . $disco["year"] . "</span>";
                echo "</div>";
            } ?>
        </div>


        <!-- <script id="disco-template" type="text/x-handlebars-template">
            <div class="cd" data-genere="{{ genere }}">
                <img class="copertina" src="{{ copertina }}" alt="">
                <p class="titolo">{{ titolo }}</p>
                <span class="artista">{{ artista }}</span>
                <span class="anno">{{ anno }}</span>
            </div>
        </script>
        <script src="public/js/app.js" charset="utf-8"></script> -->
    </body>
</html>
