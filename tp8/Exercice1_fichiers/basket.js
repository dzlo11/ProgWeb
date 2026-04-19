"use strict";
// TODO
window.onload = function() {
    // Question 2
    const ajax = new XMLHttpRequest();
    // On utilise le fichier local via le serveur Python (Question 4)
    //ajax.open('GET', 'fruitQuantities.json', true);
    ajax.open('GET', 'http://localhost:8080/fruitQuantities.json', true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            // Question 5
            // On récupère le texte brut
            const DonneesBrut = ajax.responseText;
            console.log("Données reçues (texte brut) : ", DonneesBrut);

            // Question 6
            // On transforme le texte en objet exploitable
            const donnees = JSON.parse(DonneesBrut);
            console.log("Données transformées en objet :", donnees);

            // Question 7
            // On affiche les clés (orange, banana, pear)
            console.log("Liste des fruits :", Object.keys(donnees));

            // Question 8 : Remplissage de la table
            const tableau = document.getElementById("basket");
            const elementTotal = document.getElementById("quantity");
            
            let sommeQuantites = 0;

            for (const fruit in donnees) {
                
                const ligne = tableau.insertRow();
                
                // On crée la cellule du nom (colonne 1)
                const celluleNom = ligne.insertCell(0);
                celluleNom.textContent = fruit;
                
                // On crée la cellule de la quantité (colonne 2)
                const celluleQuantite = ligne.insertCell(1);
                celluleQuantite.textContent = donnees[fruit];
                
                // Question 9 : On additionne la quantité au total
                sommeQuantites += donnees[fruit];
            }

            // Question 9 : Mise à jour de la somme
            elementTotal.textContent = sommeQuantites;
        };
    };
    ajax.send();
};
// TODO
