// 1)je veux cree une animation, qui envoi ma boule vers une destination choisi au hasar entre les valeur pareciser
// une fois la boule ariver en destination, je refait l'operation

function animateElement(id, animationName, keyframes) {
  const element = document.getElementById(id);
  element.style.animation = `${animationName} 2000s infinite linear`;

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

animateElement('js', 'moveJS', createKeyframes());
animateElement('html', 'moveHTML', createKeyframes());
animateElement('css', 'moveCSS', createKeyframes());
animateElement('php', 'movePHP', createKeyframes());
animateElement('sql', 'moveSQL', createKeyframes());
animateElement('python', 'movepython', createKeyframes());
animateElement('jsCompetences', 'movejsCompetences', createKeyframesCompetences());
animateElement('htmlCompetences', 'movehtmlCompetences', createKeyframesCompetences());
animateElement('cssCompetences', 'movecssCompetences', createKeyframesCompetences());
animateElement('phpCompetences', 'movephpCompetences', createKeyframesCompetences());
animateElement('sqlCompetences', 'movesqlCompetences', createKeyframesCompetences());
animateElement('pythonCompetences', 'movepythonCompetences', createKeyframesCompetences());
animateElement('gitCompetences', 'movegitCompetences', createKeyframesCompetences());









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















// let fish1 = document.getElementById('fish1');
// fish1.style.animation = 'movefish1 2000s infinite linear';

// const movefish1 = `
// @keyframes movefish1 {
//   0% {
//     top: 60%;
//     left: 60%;
//   }
  
//   2% {
//     top: ${Math.floor(Math.random() * 60)}%;
//     left: ${Math.floor(Math.random() * (80 - 61) + 61)}%;
//   }
//   2.1% {
//     transform: rotateY(180deg);
//     transition-duration: 0.5s;
//     transition-property: transform, opacity;
//   }


//   4% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   6% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   8% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   10% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   12% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   14% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   16% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   18% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   20% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//     transform: scaleY(0.95) scaleX(1.05);
//   }
//   22% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   24% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   26% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   28% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   30% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   32% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   34% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   36% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   38% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   40% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   42% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   44% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   46% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   48% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
  
  
//   50% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//     transform: scaleY(1.1) scaleX(0.9);
//   }
//   52% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   54% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   56% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   58% {
//     top: ${Math.floor(Math.random() * 73)}%;;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   60% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   62% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   64% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   66% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   68% {
//     top: ${Math.floor(Math.random() * 73)}%;;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   70% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//     transform: scaleY(0.98) scaleX(1.02);
//   }
//   72% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   74% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   76% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   78% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   80% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//     transform: scaleY(0.98) scaleX(1.02);
//   }
//   82% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   84% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   86% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   88% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   90% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   92% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   94% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
//   96% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 100)}%;
//   }
//   98% {
//     top: ${Math.floor(Math.random() * 73)}%;
//     left: ${Math.floor(Math.random() * 85)}%;
//   }
  
//   100% {
//     top: 60%;
//     left: 60%;
//   }`

// const stylefish1 = document.createElement('style');
// stylefish1.innerHTML = movefish1;
// document.head.appendChild(stylefish1);
