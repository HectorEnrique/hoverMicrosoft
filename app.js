const CONTENEDOR = document.querySelector('.contenedor');
const CARDS = document.querySelectorAll('.card');

CONTENEDOR.addEventListener('mousemove', mouse);

function mouse(e){
  CARDS.forEach(card => {
    const RECT = card.getBoundingClientRect();
    const X = e.clientX - RECT.left;
    const Y = e.clientY - RECT.top;

    card.style.setProperty('--x', `${X}px`);
    card.style.setProperty('--y', `${Y}px`);
  })
}

