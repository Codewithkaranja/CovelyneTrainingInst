// Mobile Menu Toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.remove("active");
  });
});


      // Simple scroll animation
      window.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(
          ".course-card, .testimonial-card, .feature-card"
        );

        elements.forEach((element) => {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;

          if (position < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      });

      // Initialize elements for animation
      document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(
          ".course-card, .testimonial-card, .feature-card"
        );

        elements.forEach((element) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(20px)";
          element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        });

        // Trigger initial animation
        setTimeout(() => {
          window.dispatchEvent(new Event("scroll"));
        }, 100);
      });

         // Typewriter Effect
      const typewriterElement = document.getElementById("typewriter");
      const words = ["Luxury", "Comfort", "Nature", "Tranquility"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      function typeWriter() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(
            0,
            charIndex - 1
          );
          charIndex--;
          typeSpeed = 50;
        } else {
          typewriterElement.textContent = currentWord.substring(
            0,
            charIndex + 1
          );
          charIndex++;
          typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 1000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500; // Pause before starting next word
        }

        setTimeout(typeWriter, typeSpeed);
      }

      // Start typewriter effect
      setTimeout(typeWriter, 1000);
      // Hero Background Slider
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");

  const images = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYXV0eSUyMHNhbG9uJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJlYXV0eSUyMHNhbG9uJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1660505155761-fb440082f784?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGJlYXV0eSUyMHNhbG9uJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  ];

  images.forEach((img, index) => {
    const bg = document.createElement("div");
    bg.classList.add("hero-bg");
    if (index === 0) bg.classList.add("active");
    bg.style.backgroundImage = `url('${img}')`;
    hero.appendChild(bg);
  });

  let current = 0;
  const slides = document.querySelectorAll(".hero-bg");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); // 5 seconds per image
});
