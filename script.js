function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
faders.forEach(fade => observer.observe(fade));
