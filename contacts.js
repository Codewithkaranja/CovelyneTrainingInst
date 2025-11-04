 // Mobile Menu Toggle
      document
        .querySelector(".hamburger")
        .addEventListener("click", function () {
          this.classList.toggle("active");
          document.querySelector(".nav-menu").classList.toggle("active");
        });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector(".hamburger").classList.remove("active");
          document.querySelector(".nav-menu").classList.remove("active");
        });
      });

      // Scroll animation
      function checkVisibility() {
        const elements = document.querySelectorAll(".animate");

        elements.forEach((element) => {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;

          if (position < screenPosition) {
            element.classList.add("visible");
          }
        });
      }

      // Initialize animation on load
      window.addEventListener("load", checkVisibility);
      window.addEventListener("scroll", checkVisibility);

      // Form submission
      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          this.reset();
        });