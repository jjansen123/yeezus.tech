// Generate stars dynamically
const starsContainer = document.getElementById('stars');
const starCount = 1000; // more stars for bigger screen

for(let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
  star.style.animationDuration = 1 + Math.random() * 3 + 's';
  starsContainer.appendChild(star);
}
