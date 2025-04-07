document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('form-confirmation');

  confirmation.style.display = 'none'; // Hide by default

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    form.style.display = 'none';
    confirmation.style.display = 'block';
    confirmation.style.opacity = '1';
  });

  // Intersection Observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-section');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Initialize Swiper
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper('.mySwiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // Bottle rotation effect
  const bottle = document.getElementById("flacon-rotate");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.3; // Adjust speed here
    bottle.style.transform = `rotateY(${rotation}deg)`;
  });

  // Cookie consent functions
  function acceptCookies(all) {
    const analytics = document.getElementById('analytics-cookies').checked;
    const marketing = document.getElementById('marketing-cookies').checked;
    const preferences = all ? { necessary: true, analytics: true, marketing: true } : { necessary: true, analytics, marketing };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    document.getElementById('cookie-banner').style.display = 'none';
  }

  function declineCookies() {
    const preferences = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    document.getElementById('cookie-banner').style.display = 'none';
  }

  window.addEventListener('load', () => {
    const prefs = localStorage.getItem('cookiePreferences');
    if (prefs) {
      document.getElementById('cookie-banner').style.display = 'none';
    }
  });

  // GSAP animation
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#flacon-rotate", {
      scrollTrigger: {
        trigger: "#flacon-rotate",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
      rotateY: 360,
      scale: 1.5,
      y: -100,
      ease: "none"
    });
  }

  // ScrollTimeline animation
  if ('scrollTimeline' in document) {
    const el = document.getElementById('reverseScroll');

    const scrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: [CSS.percent(0), CSS.percent(100)],
    });

    el.animate(
      { transform: ['translateX(150px)', 'translateX(-150px)'] },
      {
        duration: 1,
        timeline: scrollTimeline,
      }
    );
  } else {
    console.warn('ScrollTimeline non supportée sur ce navigateur.');
  }

  // Shuffle gallery cards
  const container = document.querySelector(".gallery-dynamic");
  const cards = Array.from(container.children);

  function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.insertBefore(cards[j], cards[i]);
    }
  }

  setInterval(() => {
    cards.forEach(card => card.style.transform = `translateY(${Math.random() * 40 - 20}px)`);
    shuffleCards();
    setTimeout(() => {
      cards.forEach(card => card.style.transform = "translateY(0)");
    }, 500);
  }, 8000);
});
