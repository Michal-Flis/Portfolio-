const links = document.querySelectorAll('.link-project');

const span = document.createElement('span');
const paragraphPage = document.createElement('p');

for (const link of links) {
  link.addEventListener('mouseenter', () => {
    // paragraf do strony

    paragraphPage.classList.add('move-page');
    paragraphPage.textContent = 'Przejdź do strony!';

    // span

    span.style.display = 'inline-block';
    span.style.position = 'absolute';
    span.style.top = '0';
    span.style.left = '0';
    span.style.width = '300px';
    span.style.height = '200px';
    span.style.borderRadius = '5px';
    span.style.backgroundColor = '#000';
    span.style.opacity = '.95';
    span.style.zIndex = '1';
    link.style.transition = '0.2s linear';

    // dodawanie do linku

    link.appendChild(span);
    link.appendChild(paragraphPage);
  });

  // Usuwanie elementów HTML

  link.addEventListener('mouseleave', () => {
    link.removeChild(span);
    link.removeChild(paragraphPage);
  });
}
