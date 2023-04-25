// 1)je veux cree une animation, qui envoi ma boule vers une destination choisi au hasar entre les valeur pareciser
// une fois la boule ariver en destination, je refait l'operation

let js = document.getElementById('js');
js.style.animation = 'moveJS 2000s infinite linear';


const moveJS = `
@keyframes moveJS {
  0% {
    top: 33%;
    left: 22%;
    transform: scale(1);
  }
  2% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  4% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  6% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  8% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  10% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  12% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  14% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  16% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  18% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  20% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.95) scaleX(1.05);
  }
  22% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  24% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  26% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  28% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  30% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  32% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  34% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  36% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  38% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  40% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  42% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  44% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  46% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  48% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  
  
  50% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(1.1) scaleX(0.9);
  }
  52% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  54% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  56% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  58% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  60% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  62% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  64% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  66% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  68% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  70% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  72% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  74% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  76% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  78% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  80% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  82% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  84% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  86% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  88% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  90% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  92% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  94% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  96% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  98% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  

  100% {
    top: 33%;
    left: 22%;
    transform: scale(1);
  }
}`;


const style = document.createElement('style');
style.innerHTML = moveJS;
document.head.appendChild(style);


let html = document.getElementById('html');
html.style.animation = 'moveHTML 2000s infinite linear';


const moveHTML = `
@keyframes moveHTML {
  0% {
    top: -42%;
    left: 37%;
    transform: scale(1);
  }
  2% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  4% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  6% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  8% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  10% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  12% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  14% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  16% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  18% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  20% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.95) scaleX(1.05);
  }
  22% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  24% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  26% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  28% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  30% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  32% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  34% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  36% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  38% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  40% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  42% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  44% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  46% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  48% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  
  
  50% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(1.1) scaleX(0.9);
  }
  52% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  54% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  56% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  58% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  60% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  62% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  64% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  66% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  68% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  70% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  72% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  74% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  76% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  78% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  80% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  82% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  84% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  86% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  88% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  90% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  92% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  94% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  96% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  98% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  

  100% {
    top: -42%;
    left: 37%;
    transform: scale(1);
  }
}`;

const styleHTML = document.createElement('style');
styleHTML.innerHTML = moveHTML;
document.head.appendChild(styleHTML);


let css = document.getElementById('css');
css.style.animation = 'moveCSS 2000s infinite linear';


const moveCSS = `
@keyframes moveCSS {
  0% {
    top: -65%;
    left: 55%;
    transform: scale(1);
  }
  2% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  4% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  6% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  8% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  10% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  12% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  14% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  16% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  18% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  20% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.95) scaleX(1.05);
  }
  22% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  24% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  26% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  28% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  30% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  32% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  34% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  36% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  38% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  40% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  42% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  44% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  46% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  48% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  
  
  50% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(1.1) scaleX(0.9);
  }
  52% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  54% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  56% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  58% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  60% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  62% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  64% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  66% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  68% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  70% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  72% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  74% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  76% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  78% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  80% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  82% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  84% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  86% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  88% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  90% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  92% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  94% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  96% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  98% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  

  100% {
    top: -65%;
    left: 55%;
    transform: scale(1);
  }
}`;

const styleCSS = document.createElement('style');
styleCSS.innerHTML = moveCSS;
document.head.appendChild(styleCSS);


let php = document.getElementById('php');
php.style.animation = 'movePHP 2000s infinite linear';


const movePHP = `
@keyframes movePHP {
  0% {
    top: -5%;
    left: 7%;
    transform: scale(1);
  }
  2% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  4% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  6% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  8% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  10% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  12% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  14% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  16% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  18% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  20% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.95) scaleX(1.05);
  }
  22% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  24% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  26% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  28% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  30% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  32% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  34% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  36% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  38% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  40% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  42% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  44% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  46% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  48% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  
  
  50% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(1.1) scaleX(0.9);
  }
  52% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  54% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  56% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  58% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  60% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  62% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  64% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  66% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  68% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  70% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  72% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  74% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  76% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  78% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  80% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  82% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  84% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  86% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  88% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  90% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  92% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  94% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  96% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  98% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  

  100% {
    top: -5%;
    left: 7%;
    transform: scale(1);
  }
}`;

const stylePHP = document.createElement('style');
stylePHP.innerHTML = movePHP;
document.head.appendChild(stylePHP);


let sql = document.getElementById('sql');
sql.style.animation = 'moveSQL 2000s infinite linear';


const moveSQL = `
@keyframes moveSQL {
  0% {
    top: 3%;
    left: 84%;
    transform: scale(1);
  }
    2% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    4% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    6% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    8% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    10% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    12% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    14% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    16% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    18% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    20% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
      transform: scaleY(0.95) scaleX(1.05);
    }
    22% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    24% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    26% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    28% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    30% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    32% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    34% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    36% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    38% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    40% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    42% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    44% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    46% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    48% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    
    
    50% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
      transform: scaleY(1.1) scaleX(0.9);
    }
    52% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    54% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    56% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    58% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    60% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    62% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    64% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    66% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    68% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    70% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
      transform: scaleY(0.98) scaleX(1.02);
    }
    72% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    74% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    76% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    78% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    80% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
      transform: scaleY(0.98) scaleX(1.02);
    }
    82% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    84% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    86% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    88% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    90% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    92% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    94% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    96% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
    98% {
      top: calc(${Math.floor(Math.random() * (50, -250))}px);
      left: ${Math.floor(Math.random() * 100)}%;
    }
  

  100% {
    top: 3%;
    left: 84%;
    transform: scale(1);
  }
}`;

const styleSQL = document.createElement('style');
styleSQL.innerHTML = moveSQL;
document.head.appendChild(styleSQL);

let python = document.getElementById('python');
python.style.animation = 'movepython 2000s infinite linear';


const movepython = `
@keyframes movepython {
  0% {
    top: -20%;
    left: 75%;
    transform: scale(1);
  }
  2% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  4% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  6% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  8% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  10% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  12% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  14% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  16% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  18% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  20% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.95) scaleX(1.05);
  }
  22% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  24% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  26% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  28% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  30% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  32% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  34% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  36% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  38% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  40% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  42% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  44% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  46% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  48% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  
  
  50% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(1.1) scaleX(0.9);
  }
  52% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  54% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  56% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  58% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  60% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  62% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  64% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  66% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  68% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  70% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  72% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  74% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  76% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  78% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  80% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
    transform: scaleY(0.98) scaleX(1.02);
  }
  82% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  84% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  86% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  88% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  90% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  92% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  94% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  96% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  98% {
    top: calc(${Math.floor(Math.random() * (50, -250))}px);
    left: ${Math.floor(Math.random() * 100)}%;
  }
  

  100% {
    top: -20%;
    left: 75%;
    transform: scale(1);
  }
}`;

const stylepython = document.createElement('style');
stylepython.innerHTML = movepython;
document.head.appendChild(stylepython);


