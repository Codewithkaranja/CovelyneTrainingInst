  // ===== MODERN JAVASCRIPT WITH SMOOTH ANIMATIONS =====

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Mobile menu toggle with animation
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        // Add backdrop blur when menu is open
        if (navMenu.classList.contains("active")) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      });

      // Close mobile menu when clicking on links
      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          document.body.style.overflow = "auto";
        });
      });

      // Advanced scroll animations with Intersection Observer
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Stagger animation for child elements
            if (
              entry.target.classList.contains("courses-grid") ||
              entry.target.classList.contains("requirements-grid") ||
              entry.target.classList.contains("contact-info")
            ) {
              const children = entry.target.children;
              Array.from(children).forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
              });
            }
          }
        });
      }, observerOptions);

      // Observe all animate elements
      document.querySelectorAll(".animate").forEach((el) => {
        observer.observe(el);
      });

      // Enhanced form handling with animations
      document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", function (e) {
          e.preventDefault();

          const submitBtn = this.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;

          // Add loading animation
          submitBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Processing...';
          submitBtn.disabled = true;

          // Simulate form submission
          setTimeout(() => {
            // Success animation
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
            submitBtn.style.background =
              "linear-gradient(135deg, #4CAF50, #45a049)";

            setTimeout(() => {
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
              submitBtn.style.background = "";
              form.reset();

              // Show success message
              showNotification("Form submitted successfully!", "success");
            }, 2000);
          }, 2000);
        });
      });

      // Modern notification system
      function showNotification(message, type = "info") {
        const notification = document.createElement("div");
        notification.className = `notification ${type}`;
        notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check" : "info"}-circle"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

        // Add styles for notification
        notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#4CAF50" : "#2196F3"};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
          if (notification.parentElement) {
            notification.style.animation = "slideInRight 0.3s ease reverse";
            setTimeout(() => notification.remove(), 300);
          }
        }, 5000);
      }

      // Enhanced hover effects for cards
      document
        .querySelectorAll(".course-card, .requirements-card, .contact-card")
        .forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px) scale(1.02)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)";
          });
        });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Parallax effect for hero section
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
          hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });

      // Initialize animations on page load
      document.addEventListener("DOMContentLoaded", function () {
        // Add loading animation
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
          document.body.style.opacity = "1";
        }, 100);

        // Trigger initial scroll animation check
        setTimeout(() => {
          document.querySelectorAll(".animate").forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (position < screenPosition) {
              el.classList.add("visible");
            }
          });
        }, 500);
      });

      // Add keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });

      // Enhanced table row animations
      document.querySelectorAll(".fees-table tr").forEach((row, index) => {
        row.style.transitionDelay = `${index * 0.05}s`;
        row.classList.add("animate");
      });
      // Typewriter Effect with Multiple Phrases
// Typewriter Effect
      const typewriterElement = document.getElementById("typewriter");
      const words = ["Covelyne","Train","Perfect", "Transform", "Thrive"];
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

      // Accordion Functionality
const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // Close other accordions
    accordions.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.maxHeight = null;
        i.querySelector(".accordion-icon").textContent = "+";
      }
    });

    // Toggle current
    item.classList.toggle("active");
    const content = item.querySelector(".accordion-content");
    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      item.querySelector(".accordion-icon").textContent = "-";
    } else {
      content.style.maxHeight = null;
      item.querySelector(".accordion-icon").textContent = "+";
    }
  });
});

// Set max-height for initially active items
document.querySelectorAll(".accordion-item.active .accordion-content").forEach(content => {
  content.style.maxHeight = content.scrollHeight + "px";
});

