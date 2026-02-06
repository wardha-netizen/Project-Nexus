document.addEventListener('DOMContentLoaded', () => {
    // Contact form validation
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const email = document.querySelector('#email');
        if (email && !email.value.includes('@')) {
          e.preventDefault();
          alert('Please enter a valid email address.');
        }
      });
    }
  
    // Scroll animation
    const sections = document.querySelectorAll('section');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
          section.style.opacity = 1;
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission
      alert("Your appointment has been booked!");
      form.reset(); // Optionally reset the form after booking
    });
  });  