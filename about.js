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

  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
});

// Close mobile menu when clicking on links
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// ===== Stats Count-Up Observer =====
const stats = document.querySelectorAll('.stat-number');

const animateCount = (el) => {
  const target = +el.getAttribute('data-target');
  const type = el.getAttribute('data-type'); // 'plus' or 'percent'
  let count = 0;
  const speed = 50;
  const increment = Math.max(1, Math.floor(target / speed));

  const update = () => {
    count += increment;
    if (count < target) {
      el.innerText = count + (type === 'percent' ? '%' : '+');
      requestAnimationFrame(update);
    } else {
      el.innerText = target + (type === 'percent' ? '%' : '+');
    }
  };
  update();
};

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));


// ===== Animate Elements Observer =====
const animateElements = document.querySelectorAll(".animate");

const animateObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

animateElements.forEach(el => animateObserver.observe(el));

// Enhanced hover effects for cards and stat items
document.querySelectorAll(".course-card, .gallery-item, .stat-item").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
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

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", function () {
  // Page fade-in
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  // Trigger initial animation check
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

// Keyboard navigation (Escape closes mobile menu)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Newsletter form submission
document.querySelector(".newsletter-form button").addEventListener("click", function (e) {
  e.preventDefault();
  const input = this.parentElement.querySelector("input");
  if (input.value) {
    this.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    this.style.background = "linear-gradient(135deg, #4CAF50, #45a049)";
    setTimeout(() => {
      this.innerHTML = "Subscribe";
      this.style.background = "";
      input.value = "";
    }, 2000);
  }
});
// ===== Infinite Auto Gallery Slider =====
// ===== Infinite Auto Gallery Slider with Dots =====
const galleryGrid = document.querySelector(".gallery-grid");
const galleryItems = document.querySelectorAll(".gallery-item");
const totalItems = galleryItems.length;
const dotsContainer = document.querySelector(".gallery-dots");
let galleryIndex = 0;

// Clone items for seamless loop
galleryItems.forEach(item => {
  const clone = item.cloneNode(true);
  galleryGrid.appendChild(clone);
});

// Create dots
for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    galleryIndex = i;
    updateGallery();
  });
}

const dots = document.querySelectorAll(".gallery-dots button");

// Function to update slider and dots
function updateGallery() {
  const itemWidth = galleryItems[0].offsetWidth + 25; // 25px = gap
  galleryGrid.style.transition = "transform 1s ease-in-out";
  galleryGrid.style.transform = `translateX(${-galleryIndex * itemWidth}px)`;
  
  dots.forEach((dot, i) => dot.classList.toggle("active", i === galleryIndex));
}

// Auto slide every 3 seconds
setInterval(() => {
  galleryIndex++;
  if (galleryIndex >= totalItems) {
    galleryIndex = 0;
  }
  updateGallery();
}, 3000);

