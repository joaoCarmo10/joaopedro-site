// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');
  if (hamburger && links) {
    hamburger.addEventListener('click', function() {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#0b0c0e';
      links.style.padding = '24px';
      links.style.gap = '16px';
      links.style.borderBottom = '1px solid #1f2328';
    });
  }
});
