// ------------------ DOMContentLoaded: Badge Hover Animation ------------------
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
});

// ------------------ Placeholder Typing Animation ------------------
const placeholderText =
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
    input.setAttribute("placeholder", "");
    typePlaceholder(input);
  }
});

// ------------------ Chat Button Alert ------------------
document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.querySelector("button span:contains('Chat With Luca')");

  const fullBtn = chatButton?.closest("button");
  if (fullBtn) {
    fullBtn.addEventListener("click", () => {
      alert("Luca is thinking... 💬");
    });
  }
});

// ------------------ Counter Animation on Scroll ------------------
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 30;

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
  animateCounters();
});

// ------------------ FAQ Toggle ------------------
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    content.classList.toggle('hidden');
    icon.textContent = content.classList.contains('hidden') ? '+' : '–';
  });
});

// ------------------ Animate Button & Cards ------------------
const animateBtn = document.getElementById('btn-animate');
if (animateBtn) {
  animateBtn.addEventListener('click', () => {
    animateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      animateBtn.style.transform = 'scale(1)';
    }, 150);

    const cards = document.querySelectorAll('.card-content');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.animation = 'bounce 0.6s ease-in-out';
        setTimeout(() => {
          card.style.animation = '';
        }, 600);
      }, index * 100);
    });
  });
}

const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: scale(1) translateY(0); }
    40%, 43% { transform: scale(1.05) translateY(-10px); }
    70% { transform: scale(1.02) translateY(-5px); }
  }
  .card-content {
    transition: all 0.3s ease-out;
  }
`;
document.head.appendChild(style);
// ------------------ Scroll-Based Progress Bar for Sticky Cards ------------------

document.addEventListener("DOMContentLoaded", () => {
  const cardsWrapper = document.getElementById("cards-wrapper");
  const cards = cardsWrapper.querySelectorAll(".card-content");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const progressLabel = document.getElementById("progress-label");

  const updateProgressBar = () => {
    let currentIndex = 0;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top;
      const cardBottom = rect.bottom;

      const windowHeight = window.innerHeight;

      // Check if this card is the closest to center of viewport
      if (cardTop <= windowHeight / 2 && cardBottom >= windowHeight / 2) {
        currentIndex = parseInt(card.dataset.card, 10);
      }
    });

    const percentage = Math.min(Math.max((currentIndex - 1) * 20, 0), 100); // Based on 5 cards: 0%, 25%, 50%, 75%, 100%

    // Update bar
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;

    // Move label to match fill width
    const containerWidth = document.getElementById("progress-container").offsetWidth;
    const fillWidth = (percentage / 100) * containerWidth;
    progressLabel.style.left = `${fillWidth}px`;
  };

  window.addEventListener("scroll", updateProgressBar);
  updateProgressBar();
});


// ------------------ Testimonial Carousel ------------------
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentIndex = 0;
  const totalCards = cards.length;

  function updateCardsPosition() {
    cards.forEach((card, index) => {
      card.classList.remove('card-center', 'card-side');

      if (index === currentIndex) {
        card.style.left = '50%';
        card.style.transform = 'translateX(-50%) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '10';
        card.classList.add('card-center');
      } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        card.style.left = '15%';
        card.style.transform = 'translateX(-50%) scale(0.9)';
        card.style.opacity = '0.7';
        card.style.zIndex = '5';
        card.classList.add('card-side');
      } else if (index === (currentIndex + 1) % totalCards) {
        card.style.left = '85%';
        card.style.transform = 'translateX(-50%) scale(0.9)';
        card.style.opacity = '0.7';
        card.style.zIndex = '5';
        card.classList.add('card-side');
      } else {
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

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  setInterval(() => {
    nextSlide();
  }, 4000);

  updateCardsPosition();
});

  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
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
