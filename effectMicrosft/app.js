const contenedor = document.querySelector('.contenedor');
const cards = document.querySelectorAll('.card');

contenedor.addEventListener('mousemove', mouse);

function mouse(e) {
  cards.forEach(card => {
    const RECT = card.getBoundingClientRect(),
    x =  e.clientX - RECT.left,
    y =  e.clientY - RECT.top;
    card.style.setProperty('--x', `${x}px`);
    console.log( card.style.setProperty('--x', `${x}px`));
    card.style.setProperty('--y', `${y}px`);
  })
}
