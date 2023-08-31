// 1)je veux cree une animation, qui envoi ma boule vers une destination choisi au hasar entre les valeur pareciser
// une fois la boule ariver en destination, je refait l'operation

function animateElement(id, animationName, keyframes, speed) {
  const element = document.getElementById(id);
  element.style.animation = `${animationName} ${speed} infinite linear`;

  const moveAnimation = `
    @keyframes ${animationName} {
      ${keyframes}
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = moveAnimation;
  document.head.appendChild(style);
}

function createKeyframes() {
  let keyframes = '';
  for (let i = 0; i <= 98; i += 2) {
    const top = Math.floor(Math.random() * (110 - 70) + 70);
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









let zoom = document.getElementById('btnRealisation');
let projects = document.getElementsByClassName('divGrid');
let action = document.getElementsByClassName('action');
let card = document.getElementsByClassName('card');
let h2Projects = document.getElementById('h2Projects');
let realisations = document.getElementById('realisations');
let X = document.getElementById('X');


zoom.addEventListener('click', function () {
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.toggle('active');
    action[i].classList.toggle('active');
    card[i].classList.toggle('active');
  }
  h2Projects.classList.toggle('active');
  X.classList.toggle('active');
  realisations.classList.toggle('active');
  zoom.classList.toggle('active');
})


// sélectionnez tous les liens de navigation
const navLinks = document.querySelectorAll('nav a');

// ajoutez un gestionnaire d'événements de clic à chaque lien
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // empêche le comportement de lien par défaut
    event.preventDefault();

    // récupère la cible du lien (l'ID de la section de destination)
    const targetId = link.getAttribute('href');

    // fait défiler la page vers la section de destination de manière progressive
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



document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('Check');
  const form = document.getElementById('formContact');

  form.addEventListener('submit', function(event) {
    if (!checkbox.checked) {
      event.preventDefault(); // Prevent form submission
      alert('Veuillez cocher la case de Politique de confidentialité.');
    }
  });
});
















