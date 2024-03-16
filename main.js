// 1) Je veux créer une animation qui envoie ma boule vers une destination choisie au hasard entre les valeurs spécifiées.
// Une fois que la boule est arrivée à destination, je refais l'opération.

/**
 * Anime un élément en appliquant une animation CSS personnalisée.
 *
 * @param {string} id - L'ID de l'élément à animer.
 * @param {string} animationName - Le nom de l'animation CSS.
 * @param {string} keyframes - Les étapes de l'animation CSS.
 * @param {string} speed - La durée de l'animation CSS.
 */
function animateElement(id, animationName, keyframes, speed) {
  const element = document.getElementById(id);
  element.style.animation = `${animationName} ${speed} infinite linear`;

  // Crée une animation CSS personnalisée avec les étapes spécifiées
  const moveAnimation = `
    @keyframes ${animationName} {
      ${keyframes}
    }
  `;

  // Ajoute la règle d'animation à la balise <style> dans la tête du document
  const style = document.createElement('style');
  style.innerHTML = moveAnimation;
  document.head.appendChild(style);
}

/**
 * Crée une chaîne de caractères représentant les étapes d'une animation CSS pour l'élément principal.
 * Les valeurs de `top` et `left` sont générées aléatoirement pour chaque étape.
 * L'animation applique une transformation spéciale à 20%.
 *
 * @returns {string} - Les étapes de l'animation CSS pour l'élément principal.
 */
function createKeyframes() {
  let keyframes = '';
  for (let i = 0; i <= 98; i += 2) {
    const top = Math.floor(Math.random() * (60 - 5) + 5);
    const left = Math.floor(Math.random() * 80);
    const transform = i === 20 ? 'transform: scaleY(0.95) scaleX(1.05);' : '';
    keyframes += `
      ${i}% {
        top: ${top}%;
        left: ${left}%;
        ${transform}
      }
    `;
  }
  return keyframes;
}

/**
 * Crée une chaîne de caractères représentant les étapes d'une animation CSS pour les compétences.
 * Les valeurs de `top` et `left` sont générées aléatoirement pour chaque étape.
 * L'animation applique une transformation spéciale à 20%.
 *
 * @returns {string} - Les étapes de l'animation CSS pour les compétences.
 */
function createKeyframesCompetences() {
  let keyframes = '';
  for (let i = 0; i <= 98; i += 2) {
    const top = Math.floor(Math.random() * (110 - 0) + 0);
    const left = Math.floor(Math.random() * 80);
    const transform = i === 20 ? 'transform: scaleY(0.95) scaleX(1.05);' : '';
    keyframes += `
      ${i}% {
        top: ${top}%;
        left: ${left}%;
        ${transform}
      }
    `;
  }
  return keyframes;
}

// Animation des éléments
animateElement('js', 'moveJS', createKeyframes(), '2000s');
animateElement('html', 'moveHTML', createKeyframes(), '2000s');
animateElement('css', 'moveCSS', createKeyframes(), '2000s');
animateElement('php', 'movePHP', createKeyframes(), '2000s');
animateElement('sql', 'moveSQL', createKeyframes(), '2000s');
animateElement('python', 'movepython', createKeyframes(), '2000s');
animateElement('jsCompetences', 'movejsCompetences', createKeyframesCompetences(), '1000s');
animateElement('htmlCompetences', 'movehtmlCompetences', createKeyframesCompetences(), '1000s');
animateElement('cssCompetences', 'movecssCompetences', createKeyframesCompetences(), '1000s');
animateElement('phpCompetences', 'movephpCompetences', createKeyframesCompetences(), '1000s');
animateElement('sqlCompetences', 'movesqlCompetences', createKeyframesCompetences(), '1000s');
animateElement('pythonCompetences', 'movepythonCompetences', createKeyframesCompetences(), '1000s');
animateElement('gitCompetences', 'movegitCompetences', createKeyframesCompetences(), '1000s');

// Sélection des éléments
let zoom = document.getElementById('btnRealisation');
let projects = document.getElementsByClassName('divGrid');
let action = document.getElementsByClassName('action');
let card = document.getElementsByClassName('card');
let h2Projects = document.getElementById('h2Projects');
let realisations = document.getElementById('realisations');
let X = document.getElementById('X');

// Ajout d'un gestionnaire d'événement au clic sur le bouton de zoom
zoom.addEventListener('click', function () {
  // Modification des classes pour activer/désactiver les éléments
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.toggle('active');
    action[i].classList.toggle('active');
    card[i].classList.toggle('active');
  }
  h2Projects.classList.toggle('active');
  X.classList.toggle('active');
  realisations.classList.toggle('active');
  zoom.classList.toggle('active');
});

// Sélection de tous les liens de navigation
const navLinks = document.querySelectorAll('nav a');

// Ajout d'un gestionnaire d'événement de clic à chaque lien
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Empêche le comportement de lien par défaut
    event.preventDefault();

    // Récupère la cible du lien (l'ID de la section de destination)
    const targetId = link.getAttribute('href');

    // Fait défiler la page vers la section de destination de manière progressive
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const burger = document.querySelector('.hamburger-lines');
let line = document.getElementsByClassName('line');
let navMobil = document.getElementById('navMobil')
burger.addEventListener('click', function () {
  for (let i = 0; i < line.length; i++) {
    line[i].classList.toggle('active');


  }
  navMobil.classList.toggle('active');
})





// Realisatition un menu sticky qui change d'oppacté lorsque l'utilisateur fait défiler la page


// Sélectionnez le menu sticky
var menu = document.querySelector('header');

// Ajoutez une classe lorsque l'utilisateur fait défiler la page
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});















