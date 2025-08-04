// index.js
document.addEventListener("DOMContentLoaded", () => {
  const badge = document.getElementById("hoverBadge");

  if (badge) {
    badge.addEventListener("mouseenter", () => {
      badge.classList.add("scale-105", "shadow-md");
    });

    badge.addEventListener("mouseleave", () => {
      badge.classList.remove("scale-105", "shadow-md");
    });
  }
}); const placeholderText =
  "Ask Luca to find a Senior manager in Toronto with 6+ years of experience";
let i = 0;

function typePlaceholder(inputElement) {
  if (i < placeholderText.length) {
    inputElement.setAttribute(
      "placeholder",
      placeholderText.substring(0, i + 1)
    );
    i++;
    setTimeout(() => typePlaceholder(inputElement), 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[placeholder]");
  if (input) {
    input.setAttribute("placeholder", ""); // Clear first
    typePlaceholder(input);
  }
}); document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.querySelector("button span:contains('Chat With Luca')");

  const fullBtn = chatButton?.closest("button");
  if (fullBtn) {
    fullBtn.addEventListener("click", () => {
      alert("Luca is thinking... 💬");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 30; // smaller is faster

  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

  function animateCounters() {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace('%', '');
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = `${current + increment}%`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = `${target}%`;
        }
      };

      if (isInViewport(counter) && !counter.classList.contains("done")) {
        counter.classList.add("done");
        updateCount();
      }
    });
  }

  window.addEventListener("scroll", animateCounters);
  animateCounters(); // in case already visible
});
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('previewVideo');

  // Video event listeners
  video.addEventListener('loadstart', () => {
    console.log('Video loading started');
  });

  video.addEventListener('canplay', () => {
    console.log('Video can start playing');
  });

  video.addEventListener('play', () => {
    console.log('Video started playing');
  });

  video.addEventListener('pause', () => {
    console.log('Video paused');
  });

  video.addEventListener('ended', () => {
    console.log('Video ended');
    // Optional: Reset to beginning or show replay button
    video.currentTime = 0;
  });

  video.addEventListener('error', (e) => {
    console.error('Video error:', e);
    // Handle video loading errors
  });

  // Optional: Custom video controls
  const playPauseBtn = document.getElementById('playPauseBtn');
  const muteBtn = document.getElementById('muteBtn');

  // Play/Pause functionality (if you add custom buttons)
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
      } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
      }
    });
  }

  // Mute/Unmute functionality (if you add custom buttons)
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    });
  }

  // Auto-play on scroll into view (optional)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(e => {
          console.log('Auto-play prevented by browser:', e);
        });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(video);
});

document.addEventListener('DOMContentLoaded', function () {
  const slidesWrapper = document.getElementById('testimonialSlides');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const slideCounter = document.getElementById('testimonialCounter');
  let currentSlide = 0;
  const totalSlides = 3;

  function updateSlideCounter() {
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const translateX = -slideIndex * 100;
    slidesWrapper.style.transform = `translateX(${translateX}%)`;
    updateSlideCounter();
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }

  // Navigation button event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard navigation
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Initialize slide counter
  updateSlideCounter();
});

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    // Toggle the visibility of the content
    content.classList.toggle('hidden');

    // Change the icon between + (minimized) and – (maximized)
    icon.textContent = content.classList.contains('hidden') ? '+' : '–';
  });
});
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    // Toggle the visibility of the content
    content.classList.toggle('hidden');

    // Change the icon between + (minimized) and – (maximized)
    icon.textContent = content.classList.contains('hidden') ? '+' : '–';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentIndex = 0;
  const totalCards = cards.length;

  function updateCardsPosition() {
    cards.forEach((card, index) => {
      // Reset all classes
      card.classList.remove('card-center', 'card-side');

      if (index === currentIndex) {
        // Center card - large and fully visible
        card.style.left = '50%';
        card.style.transform = 'translateX(-50%) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '10';
        card.classList.add('card-center');
      } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        // Left card - smaller and transparent
        card.style.left = '15%';
        card.style.transform = 'translateX(-50%) scale(0.9)';
        card.style.opacity = '0.7';
        card.style.zIndex = '5';
        card.classList.add('card-side');
      } else if (index === (currentIndex + 1) % totalCards) {
        // Right card - smaller and transparent
        card.style.left = '85%';
        card.style.transform = 'translateX(-50%) scale(0.9)';
        card.style.opacity = '0.7';
        card.style.zIndex = '5';
        card.classList.add('card-side');
      } else {
        // Hidden cards
        card.style.left = '50%';
        card.style.transform = 'translateX(-50%) scale(0.8)';
        card.style.opacity = '0';
        card.style.zIndex = '1';
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCardsPosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCardsPosition();
  }

  // Navigation button event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard navigation
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Auto-slide every 4 seconds (optional)
  setInterval(() => {
    nextSlide();
  }, 4000);

  // Initialize cards position
  updateCardsPosition();
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const faqItems = document.querySelectorAll('.faq-item');

  // FAQ toggle functionality
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.toggle-icon');

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '−';
        this.parentElement.classList.add('expanded');
      } else {
        content.classList.add('hidden');
        icon.textContent = '+';
        this.parentElement.classList.remove('expanded');
      }
    });
  });

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // Update active filter button
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-blue-500', 'text-white');
        b.classList.add('bg-gray-200', 'text-gray-700');
      });

      this.classList.add('active', 'bg-blue-500', 'text-white');
      this.classList.remove('bg-gray-200', 'text-gray-700');

      // Filter FAQ items
      faqItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          // Add fade in animation
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 100);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

 const toggleButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

