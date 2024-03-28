const body = document.querySelector('body');

const div = document.createElement('div');
const linkUp = document.createElement('a');

function cos() {
  const moveScroll = window.scrollY;
  if (moveScroll > 700) {
    // Style dla Diva
    div.style.display = 'block';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '2px solid #000';
    div.style.borderRadius = '50%';
    div.style.position = 'fixed';
    div.style.bottom = '10px';
    div.style.right = '30px';
    div.style.zIndex = '5';

    // Style dla 'a'
    linkUp.href = '#up-menu';
    linkUp.textContent = '>';
    linkUp.style.transform = 'translate(-50%, -50%) rotate(-90deg)';
    linkUp.style.position = 'absolute';
    linkUp.style.top = '50%';
    linkUp.style.left = '50%';
    linkUp.style.fontSize = '2.5rem';
    linkUp.style.textDecoration = 'none';
    linkUp.style.color = '#000';
    linkUp.style.zIndex = '5';

    body.appendChild(div);
    div.appendChild(linkUp);
  } else if (moveScroll > 0 && moveScroll < 700) {
    div.style.display = 'none';
  }
}

window.addEventListener('scroll', cos);
