const game = {};

// QUESTION 2
game.create = function(images, blank) {
  game.mesCartes = images;
  game.mesCartesDos = blank;
  
  // QUESTION 4 (On ajoute le tableau positions)
  game.positions = shuffleCards(images.length);
  
  // QUESTION 7 (on crée la mémoire vide)
  game.selections = null;
};

// QUESTION 2, 4 et 5
game.build = function(div) {
  // QUESTION 2
  //let nombre = game.mesCartes.length;
  //div.innerHTML = "Le jeu contient " + nombre + " images.";

  // QUESTION 4 
  for (let i = 0; i < game.positions.length; i++) {
    
    const conteneurCartes = document.createElement("div");
    const imageCartes = document.createElement("img");
    
    imageCartes.src = game.mesCartesDos; // On affiche le dos au début (Question 4)
    
    imageCartes.numero = i; // On stocke l'index i dans l'image pour savoir laquelle c'est (Question 5)

    // QUESTION 5 : Gestion du clic et affichage console
    imageCartes.onclick = function() {
      // question 7 (obligé de le mettre au debut sinon le teste ne marche pas)
      if (this.src.indexOf(game.mesCartesDos) === -1) {
        return;
      }
      // QUESTION 5
      console.log("Index de la carte cliquée : " + this.numero);
      
      let numLego = game.positions[this.numero]; // On va chercher dans le tableau positions à l'index de cette carte
      console.log("Numéro du Lego correspondant : " + numLego);
      
      // QUESTION 6 
      let indexLego = game.positions[this.numero];
      
      let nomImage = game.mesCartes[indexLego];
      
      this.src = nomImage;

      console.log("Image affichée : " + nomImage);

      // QUESTION 7
      if (game.selections === null) {
        // premier clic
        game.selections = this;
      }
      else {
        // deuxième clic
        if (game.positions[game.selections.numero] === game.positions[this.numero] ) {
          // c'est une paire
          game.selections = null ;
        }
        else {
          // c'est pas une paire
          let carte1 = game.selections;
          let carte2 = this;

          //carte1.src = game.mesCartesDos;
          //carte2.src = game.mesCartesDos;
          //game.selections = null;

          // Question 8
          setTimeout(function() {
            carte1.src = game.mesCartesDos;
            carte2.src = game.mesCartesDos;
          }, 500);

          game.selections = null;
        }
      }
    };

    conteneurCartes.appendChild(imageCartes);
    div.appendChild(conteneurCartes);
  }
};


const shuffleCards = function(length) {
  let cards = [];

  for(let i = 0; i < length; i++) {
    cards.push(i);
    cards.push(i);
  } 

  // on réalise le tri aléatoire 
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // On choisit un index au hasard entre 0 et i
    
    // On échange l'élément à la position i avec celui à la position j
    let temporaire = cards[i];
    cards[i] = cards[j];
    cards[j] = temporaire;
  }

  return cards; 
};
