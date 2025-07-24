// Header scroll effect - Fixed version
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Navigation Toggle - Fixed version
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

// Create hamburger if not exists
if (!hamburger && window.innerWidth <= 768) {
  const newHamburger = document.createElement("div");
  newHamburger.id = "hamburger";
  newHamburger.className = "hamburger";
  newHamburger.innerHTML = `<span></span><span></span><span></span>`;
  document.querySelector(".header-container").appendChild(newHamburger);
  
  newHamburger.addEventListener("click", () => {
    newHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
} else if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when clicking a link - Fixed version
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    if (hamburger) hamburger.classList.remove("active");
  });
});

// Scroll animations - Fixed version
const animateElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // Optional: remove if you don't want re-animation
      }
    });
  },
  { 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Triggers when 50px from viewport bottom
  }
);

animateElements.forEach((element) => {
  observer.observe(element);
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", darkModeToggle.checked);
  });

  // Check for saved preference
  if (localStorage.getItem("darkMode") === "true") {
    darkModeToggle.checked = true;
    document.body.classList.add("dark-mode");
  }
}