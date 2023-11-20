function scrollToNextScreen() {
  // Trouver la première div après la position actuelle
  const screens = document.querySelectorAll('.title-paragraph');
  let targetScreen = null;

  for (const screen of screens) {
    const rect = screen.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      targetScreen = screen;
      break;
    }
  }

  // Faire défiler vers l'écran suivant
  if (targetScreen) {
    window.scrollTo({
      top: targetScreen.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}

window.addEventListener('scroll', function() {
  const nextButton = document.getElementById('fixed-button');
  const topButton = document.getElementById('topButton');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= (document.body.scrollHeight - window.innerHeight)) {
    nextButton.classList.add('hidden'); // Ajoute la classe pour masquer le bouton
    topButton.classList.remove('hidden'); 
  } else {
    nextButton.classList.remove('hidden'); // Retire la classe pour afficher le bouton
    topButton.classList.add('hidden');
  }
});


function scrollToTop() {
  window.scrollTo({
    top: 0, behavior: "smooth"
  });
}