
  
// Sélectionnez le menu sticky
let headerProject = document.querySelector('#headerProject');

// Ajoutez une classe lorsque l'utilisateur fait défiler la page
window.addEventListener('scroll', function() {
    i=0;
    console.log(i);
    if (window.scrollY > 0) {
        headerProject.classList.add('scrolledDetailProject');
        console.log(i);
    } else {
        headerProject.classList.remove('scrolledDetailProject');
    }
  });

const burger = document.querySelector('.hamburger-lines');
let line = document.getElementsByClassName('line');
let navMobil = document.getElementById('navMobil');
let sousmenuMobil = document.querySelector('#sousmenuMobil');
burger.addEventListener('click', function () {
  for (let i = 0; i < line.length; i++) {
  line[i].classList.toggle('active');
 

}
navMobil.classList.toggle('active');
sousmenuMobil.classList.remove('active');
});



let showSoumenuMobil = document.querySelector('#showSoumenuMobil');

showSoumenuMobil.addEventListener('click', function(){
  sousmenuMobil.classList.add('active');
})
