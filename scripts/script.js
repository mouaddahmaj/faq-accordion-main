const clicks = document.querySelectorAll('.click');

clicks.forEach((click) => {
  click.addEventListener('click', () => {
    const paragraphe = click.nextElementSibling;
    const signe = click.children[1];

    // Masque tous les paragraphes et met le signe "+" sur tous les autres éléments
    clicks.forEach((otherClick) => {
      const otherParagraphe = otherClick.nextElementSibling;
      const otherSigne = otherClick.children[1];
      
      if (otherParagraphe !== paragraphe) { // S'assure de ne pas masquer l'élément actuel
        otherParagraphe.classList.add('hidden');
        otherSigne.innerText = "+";
        otherSigne.classList.remove("moins");
        otherSigne.classList.add("plus");
      }
    });

    // Bascule la visibilité du paragraphe et le signe (+ ou -) pour l'élément cliqué
    if (paragraphe.classList.contains('hidden')) {
      paragraphe.classList.remove('hidden');
      signe.innerText = "-";
      signe.classList.remove("plus");
      signe.classList.add("moins");
    } else {
      paragraphe.classList.add('hidden');
      signe.innerText = "+";
      signe.classList.remove("moins");
      signe.classList.add("plus");
    }
  });
});
