// Sélectionner l'élément à déplacer
const element = document.querySelector('#js');
const wather = document.getElementById('wather')

function deplacerElement() {
    // Définir les limites pour les coordonnées X et Y
    const limiteGauche = 0;
    const limiteDroite = wather.offsetWidth;
    const limiteSuperieure = 0;
    const limiteInferieure = wather.offsetHeight;
  
    // Générer des points de destination aléatoires dans les limites spécifiées
    const destinationX = Math.floor(Math.random() * (limiteDroite - limiteGauche + 1)) + limiteGauche;
    const destinationY = Math.floor(Math.random() * (limiteInferieure - limiteSuperieure + 1)) + limiteSuperieure;
  
    // Définir la vitesse de déplacement de l'élément
    const vitesse = 1;
  
    // Calculer la distance entre l'élément et le point de destination
    const distanceX = destinationX - wather.offsetLeft;
    const distanceY = destinationY - wather.offsetTop;
    const distanceTotale = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
    // Calculer la durée nécessaire pour atteindre le point de destination
    const duree = distanceTotale / vitesse;
  
    // Déplacer progressivement l'élément vers le point de destination
    let tempsEcoule = 0;
    const intervalId = setInterval(() => {
      tempsEcoule += 1;
      const progression = tempsEcoule / duree;
      const positionX = wather.offsetLeft + distanceX * progression;
      const positionY = wather.offsetTop + distanceY * progression;
      element.style.left = `${positionX}px`;
      element.style.top = `${positionY}px`;
  
      if (progression >= 1) {
        clearInterval(intervalId);
        deplacerElement();
      }
    }, 10);
  }
  
  deplacerElement();