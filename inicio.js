const wrapper = document.querySelector('.wrapper');

let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

wrapper.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPosition = event.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
  wrapper.classList.add('dragging');
});

wrapper.addEventListener('mouseup', () => {
  isDragging = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const newPosition = event.pageX - wrapper.offsetLeft;
  const distance = newPosition - startPosition;
  wrapper.scrollLeft = scrollLeft - distance;
});