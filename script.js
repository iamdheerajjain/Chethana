// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// Form submission handling
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector("textarea").value;

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Simulate form submission (replace with actual form handling)
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Enhanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");

      // Add staggered animations for skill categories
      if (entry.target.classList.contains("skill-category")) {
        const skillItems = entry.target.querySelectorAll(".skill-item");
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, index * 100);
        });
      }

      // Add staggered animations for project cards
      if (entry.target.classList.contains("project-card")) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 200);
      }

      // Add staggered animations for contact items
      if (entry.target.classList.contains("contact-item")) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 300);
      }
    }
  });
}, observerOptions);

// Enhanced animation system
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  const skillCategories = document.querySelectorAll(".skill-category");
  const projectCards = document.querySelectorAll(".project-card");
  const contactItems = document.querySelectorAll(".contact-item");
  const aboutStats = document.querySelectorAll(".stat-item");
  const sectionTitles = document.querySelectorAll(".section-title");

  // Add initial animation classes
  skillCategories.forEach((card) => {
    card.classList.add("animate-on-scroll");
    observer.observe(card);
  });

  projectCards.forEach((card) => {
    card.classList.add("animate-on-scroll");
    observer.observe(card);
  });

  contactItems.forEach((item) => {
    item.classList.add("animate-on-scroll");
    observer.observe(item);
  });

  aboutStats.forEach((stat) => {
    // Removed scale-on-scroll class to prevent conflicts with hover effects
    observer.observe(stat);
  });

  sectionTitles.forEach((title) => {
    title.classList.add("scale-on-scroll");
    observer.observe(title);
  });

  // Add staggered entrance animations
  setTimeout(() => {
    skillCategories.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 500);

  setTimeout(() => {
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 300);
    });
  }, 800);

  setTimeout(() => {
    contactItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 1000);

  // Enhanced hover effects
  addEnhancedHoverEffects();

  // Enhanced button effects
  addEnhancedButtonEffects();
});

// Enhanced hover effects function
function addEnhancedHoverEffects() {
  // Enhanced hover effects to skill items
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateX(4px)";
      item.style.background = "#f0e6ff";
      item.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.1)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateX(0)";
      item.style.background = "transparent";
      item.style.boxShadow = "none";
    });
  });

  // Enhanced hover effects to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
    });
  });

  // Enhanced hover effects to contact items
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-4px)";
      item.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.1)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
      item.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
  });
}

// Enhanced button effects function
function addEnhancedButtonEffects() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Add active class to navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add CSS for active navigation state and enhanced animations
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    
    /* Ripple effect for buttons */
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Enhanced animation classes */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    
    .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .scale-on-scroll {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.8s ease-out;
    }
    
    .scale-on-scroll.animated {
        opacity: 1;
        transform: scale(1);
    }
    
    /* Enhanced hover animations */
    .skill-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-item:hover {
        transform: translateX(8px) scale(1.02);
        background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    }
    
    .project-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .project-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
    
    .contact-item {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .contact-item:hover {
        transform: translateY(-8px) scale(1.03);
        box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    }
    
    /* Enhanced button animations */
    .btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn:hover {
        transform: translateY(-3px) scale(1.05);
    }
    
    /* Enhanced social links */
    .social-links a {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .social-links a:hover {
        transform: translateY(-5px) scale(1.2);
        color: #667eea;
        text-shadow: 0 5px 15px rgba(102, 126, 234, 0.5);
    }
`;
document.head.appendChild(style);
// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Add CSS for loading state
const loadingStyle = document.createElement("style");
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        font-weight: 700;
    }
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
    }
`;
document.head.appendChild(loadingStyle);

// Enhanced smooth scroll animations with better easing
function addSmoothScrollAnimations() {
  // Smooth scroll for all internal links with enhanced easing
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const targetPosition = target.offsetTop - 80; // Account for fixed navbar
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // 1 second
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = easeInOutCubic(
            timeElapsed,
            startPosition,
            distance,
            duration
          );
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Custom easing function for smoother animation
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
      }
    });
  });

  // Enhanced scroll-triggered animations with staggered effects
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScrollAnimation();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check for elements in view
  handleScrollAnimation();
}

// Add smooth reveal animations for sections
function addSectionRevealAnimations() {
  const sections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-revealed");

        // Add staggered animations for child elements
        const animatedElements =
          entry.target.querySelectorAll(".animate-stagger");
        animatedElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("element-revealed");
          }, index * 150);
        });
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    sectionObserver.observe(section);
  });
}

// Add floating scroll indicators
function addScrollIndicators() {
  // Create scroll progress indicator
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.appendChild(progressBar);

  // Update progress bar on scroll
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });

  // Add scroll-to-top button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.className = "scroll-top-btn";
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show/hide scroll-to-top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });
}

// Add parallax scroll effects
function addParallaxEffects() {
  const parallaxElements = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Add CSS for new animations
function addAnimationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* Enhanced scroll animations */
    .scroll-animate {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scroll-animate.scrolled {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Section reveal animations */
    .section-hidden {
      opacity: 0;
      transform: translateY(60px);
      transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .section-revealed {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Staggered element animations */
    .animate-stagger {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .element-revealed {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Scroll progress bar */
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      z-index: 10000;
      transition: width 0.1s ease;
    }
    
    /* Scroll to top button */
    .scroll-top-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 1000;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
    }
    
    .scroll-top-btn.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .scroll-top-btn:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
    }
    
    /* Enhanced hover effects with smooth transitions */
    .skill-item, .project-card, .contact-item {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .skill-item:hover, .project-card:hover, .contact-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    }
    
    /* Smooth text reveal animation */
    .text-reveal {
      overflow: hidden;
    }
    
    .text-reveal span {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .text-reveal.revealed span {
      transform: translateY(0);
    }
    
    /* Enhanced button animations */
    .btn {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
    }
    
    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    .btn:hover::before {
      left: 100%;
    }
    
    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }
    
    /* Smooth image reveal */
    .image-reveal {
      overflow: hidden;
      border-radius: 12px;
    }
    
    .image-reveal img {
      transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .image-reveal:hover img {
      transform: scale(1.05);
    }
    
    /* Enhanced navigation animations */
    .nav-link {
      position: relative;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: translateX(-50%);
    }
    
    .nav-link:hover::after,
    .nav-link.active::after {
      width: 100%;
    }
    
    /* Smooth section transitions */
    section {
      transition: opacity 0.6s ease-out;
    }
    
    /* Enhanced loading animations */
    .fade-in {
      animation: fadeIn 1s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Smooth scroll behavior for the entire page */
    html {
      scroll-behavior: smooth;
    }
    
    /* Enhanced focus states for accessibility */
    .btn:focus,
    .nav-link:focus,
    .project-link:focus {
      outline: 2px solid #667eea;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

// Initialize all enhanced animations
document.addEventListener("DOMContentLoaded", () => {
  addAnimationStyles();
  addSmoothScrollAnimations();
  addSectionRevealAnimations();
  addScrollIndicators();
  addParallaxEffects();

  // Add animation classes to elements
  const skillItems = document.querySelectorAll(".skill-item");
  const projectCards = document.querySelectorAll(".project-card");
  const contactItems = document.querySelectorAll(".contact-item");
  const sectionTitles = document.querySelectorAll(".section-title");

  // Add scroll animation classes
  skillItems.forEach((item) => item.classList.add("scroll-animate"));
  projectCards.forEach((card) => card.classList.add("scroll-animate"));
  contactItems.forEach((item) => item.classList.add("scroll-animate"));
  sectionTitles.forEach((title) => title.classList.add("scroll-animate"));

  // Add staggered animation classes
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    const items = category.querySelectorAll(".skill-item");
    items.forEach((item) => item.classList.add("animate-stagger"));
  });

  // Add text reveal animations
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroDescription = document.querySelector(".hero-description");

  if (heroTitle) heroTitle.classList.add("text-reveal");
  if (heroSubtitle) heroSubtitle.classList.add("text-reveal");
  if (heroDescription) heroDescription.classList.add("text-reveal");

  // Trigger text reveal after a short delay
  setTimeout(() => {
    const textReveals = document.querySelectorAll(".text-reveal");
    textReveals.forEach((reveal) => reveal.classList.add("revealed"));
  }, 500);

  // Add parallax class to hero section
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("parallax");
    hero.setAttribute("data-speed", "0.3");
  }
});
