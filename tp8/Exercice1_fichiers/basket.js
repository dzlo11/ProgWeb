"use strict";
// TODO
window.onload = function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/gustave-eiffel/progweb/main/tp8/fruitQuantities.json', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            
            console.log("Succès ! Voici les fruits :", data);
            
            const table = document.getElementById("basket");
            console.log("Tableau trouvé :", table);

        } else if (xhr.readyState === 4) {
            console.error("Erreur lors du chargement. Statut HTTP : " + xhr.status);
        }
    };
    xhr.send();
};
// TODO
