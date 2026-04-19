"use strict";

/**
 * Question 5 : Fonction réutilisable pour charger des fichiers JSON
 * Cette fonction permet d'éviter de réécrire XMLHttpRequest à chaque fois.
 */
function chargerFichierJSON(url, action) {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            const donnees = JSON.parse(ajax.responseText);
            // On appelle la fonction "action" avec les données récupérées
            action(donnees);
        }
    };
    ajax.send();
}

window.onload = function() {

    // Question 3 : On définit l'URL locale pour les quantités
    const urlQuantites = 'http://localhost:8080/fruitQuantities.json';
    
    // On lance le premier chargement
    chargerFichierJSON(urlQuantites, function(donneesQuantites) {
        // Question 4 : On charge le fichier des prix à l'intérieur du premier chargement
        // Cela garantit que l'on possède toutes les données avant de calculer.
        const urlPrix = 'http://localhost:8080/prices.json';
        
        chargerFichierJSON(urlPrix, function(donneesPrix) {
            
            const tableau = document.getElementById("basket");
            const elementSomme = document.getElementById("quantity");
            let prixTotalPanier = 0;

            // Question 5 (suite) 
            for (const fruit in donneesQuantites) {
                
                const ligne = tableau.insertRow();
                
                // Colonne 1 : Nom du fruit
                const celluleNom = ligne.insertCell(0);
                celluleNom.textContent = fruit;
                
                // Colonne 2 : Quantité
                const quantite = donneesQuantites[fruit];
                const celluleQuantite = ligne.insertCell(1);
                celluleQuantite.textContent = quantite;
                
                // Calcul du prix total si le fruit existe dans le catalogue des prix
                if (donneesPrix[fruit]) {
                    const prixUnitaire = donneesPrix[fruit];
                    prixTotalPanier += quantite * prixUnitaire;
                }
            }

            // Affichage du résultat final dans le span "quantity"
            elementSomme.textContent = prixTotalPanier + " €";
            
            console.log("Exercice 2 : Calcul du prix total terminé.");
        });
    });
};