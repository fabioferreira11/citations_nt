var data;

$(document).ready(function() {
    console.log("ready");

    var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=Yt3ElLZbPBkCjchZLlPonnIXHK-HGcvOjSSK6d3WMcsdtnVP-sRFK9TJtVChmzdJoS2hdR7zqjDNilokUf-CgrurSq7xzSq9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLDH2uWsIECYbQ-1dHawSSys-qa_XrY91ElWK0wtTqVs-S2EMsTEzsidny00bwaOoMjCUUvlUrJSMU4Z6tCi9EMKDwEL-HNOO9z9Jw9Md8uu&lib=MaEzA0FxlQG2xDPkzqdKTmqPtGtOqO4NX';

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(responseData) {
            // Utilisez responseData.data au lieu de responseData
            data = responseData.data;

            // Vérifiez que la réponse contient des objets
            if (data && data.length > 0) {
                // Sélectionnez un objet aléatoire
                var randomIndex = Math.floor(Math.random() * data.length);
                var randomObject = data[randomIndex];

                // Afficher toutes les informations dans la console (à des fins de test)
                console.log('Citation aléatoire :', randomObject.Citation);
                console.log('URLImage :', randomObject.URLImage);
                console.log('Auteur :', randomObject.Auteur);
                console.log('Description :', randomObject.Description);

                // Afficher toutes les informations dans le conteneur HTML
                $('#contenu').html(
                    '<h2 class="citation text-center text-l">' + randomObject.Citation + ' </h2>' +
                    '<div class="flex flex-row w-full justify-center items-center"><img src="' + randomObject.URLImage + '" alt="Auteur" class="my-4 rounded-full max-w-14">'+
                    '<h2 class="auteur text-center mx-3">' + randomObject.Auteur + '</h2>' +
                    '<p class="description text-center ml-3">' + randomObject.Description + '</p> </div>'
                   
                );
            } else {
                console.error('La réponse du fichier JSON ne contient pas d\'objets.');
            }
        },
        error: function(error) {
            console.error('Erreur lors de la requête AJAX :', error);
        }
    });
});
