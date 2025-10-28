// Enhanced mobile menu toggle with animations
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  const header = document.getElementById('main-header');

  if (!menu) {
    console.error('Mobile menu element not found');
    return;
  }

  const isHidden = menu.classList.contains('hidden');

  if (isHidden) {
    // Open menu
    menu.classList.remove('hidden');
    menu.classList.add('animate-fade-in-up');
    header.classList.add('menu-open');

    // Animate menu items
    const menuItems = menu.querySelectorAll('a, button');
    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 50);
    });

    if (icon) {
      icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
  } else {
    // Close menu
    header.classList.remove('menu-open');

    // Animate menu items out
    const menuItems = menu.querySelectorAll('a, button');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
      }, index * 30);
    });

    setTimeout(() => {
      menu.classList.add('hidden');
      menu.classList.remove('animate-fade-in-up');
    }, 300);

    if (icon) {
      icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
  }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (header && window.scrollY > 100) {
    header.classList.add('scrolled');
  } else if (header) {
    header.classList.remove('scrolled');
  }
});

// Service tab switching with enhanced UX
function setActiveServiceTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.service-tab-button').forEach(btn => {
    btn.classList.remove('bg-royal-blue-600', 'text-white', 'active');
    btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-50');
  });

  // Activate selected tab
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-50');
    activeTab.classList.add('bg-royal-blue-600', 'text-white', 'active');
  }

  // Hide all content
  document.querySelectorAll('.service-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Show selected content
  const activeContent = document.getElementById(`${tabName}-content`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
  }
}

// Banner rotation system
let currentBanner = 0;
const banners = [
  { text: "Scrap Metal Recycling Services", icon: "♻️" },
  { text: "REMA Certified Recycling", icon: "🎖️" },
  { text: "Roller Container Services", icon: "🚛" },
  { text: "ISN Compliant Operations", icon: "🛡️" },
  { text: "Mobile Demolition Services", icon: "🏗️" },
  { text: "56+ Years of Experience", icon: "🏆" },
  { text: "Fast Pickup Scheduling", icon: "⚡" },
  { text: "ISN Safety Standards", icon: "🔒" },
];

function rotateBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  const bannerElement = document.getElementById('banner-content');
  if (bannerElement) {
    bannerElement.innerHTML = `
      <div class="text-2xl md:text-3xl font-bold mb-2">${banners[currentBanner].icon} ${banners[currentBanner].text}</div>
      <div class="text-base md:text-lg opacity-90">Professional Service • East Texas & Kansas</div>
    `;
  }
}

setInterval(rotateBanner, 3000);

// Sponsorship tier selection
function setSelectedTier(tier) {
  // Hide all tier details
  document.getElementById('tier-details').classList.add('hidden');

  // Reset all tier buttons
  document.querySelectorAll('.sponsor-tier-card').forEach(card => {
    card.classList.remove('selected-tier');
  });

  // Show selected tier details
  const details = document.getElementById('tier-details');
  details.classList.remove('hidden');
  details.innerHTML = getTierDetails(tier);
}

function getTierDetails(tier) {
  const details = {
    platinum: `
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Platinum Sponsorship Benefits</h3>
      <ul class="space-y-2 mb-6">
        <li>Full page feature on K&L website</li>
        <li>Logo on all company vehicles and marketing materials</li>
        <li>Annual community event sponsorship</li>
        <li>Quarterly environmental impact report</li>
        <li>VIP invitations to K&L events</li>
        <li>Social media partnership promotion</li>
      </ul>
      <p class="text-green-600 font-bold mb-4">$10,000+ annually</p>
      <button class="bg-platinum text-white px-6 py-3 rounded-lg font-semibold">Learn More & Apply</button>
    `,
    gold: `
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Gold Sponsorship Benefits</h3>
      <ul class="space-y-2 mb-6">
        <li>Logo on K&L website and social media</li>
        <li>Quarterly partnership announcements</li>
        <li>Event sponsorship opportunities</li>
        <li>Environmental impact highlights in newsletters</li>
        <li>Recognition at community events</li>
      </ul>
      <p class="text-green-600 font-bold mb-4">$5,000-$9,999 annually</p>
      <button class="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Learn More & Apply</button>
    `,
    silver: `
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Silver Sponsorship Benefits</h3>
      <ul class="space-y-2 mb-6">
        <li>Logo recognition on K&L website</li>
        <li>Monthly social media mentions</li>
        <li>Environmental awareness support</li>
        <li>Community volunteer opportunities</li>
        <li>Recycling education partnership</li>
      </ul>
      <p class="text-green-600 font-bold mb-4">$2,000-$4,999 annually</p>
      <button class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">Learn More & Apply</button>
    `,
    "in-kind": `
      <h3 class="text-2xl font-bold text-gray-900 mb-4">In-Kind Partnership Benefits</h3>
      <ul class="space-y-2 mb-6">
        <li>K&L provides recycled metal materials for projects</li>
        <li>Equipment donation opportunities</li>
        <li>Environmental education support</li>
        <li>Community outreach collaboration</li>
        <li>Volunteer workforce for environmental initiatives</li>
      </ul>
      <p class="text-green-600 font-bold mb-4">$0-$1,999 value</p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Learn More & Apply</button>
    `,
  };

  return details[tier] || '<p>Details not available for this tier.</p>';
}

// Enhanced form validation and submission
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) {
    console.error(`Form with id ${formId} not found`);
    return false;
  }

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  let firstErrorField = null;

  inputs.forEach(input => {
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) errorElement.remove();

    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      input.classList.remove('border-green-500');
      showFieldError(input, 'This field is required');
      if (!firstErrorField) firstErrorField = input;
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
      input.classList.add('border-green-500');
      // Additional validation for specific fields
      if (input.type === 'email' && !isValidEmail(input.value)) {
        input.classList.add('border-red-500');
        input.classList.remove('border-green-500');
        showFieldError(input, 'Please enter a valid email address');
        if (!firstErrorField) firstErrorField = input;
        isValid = false;
      } else if (input.type === 'tel' && !isValidPhone(input.value)) {
        input.classList.add('border-red-500');
        input.classList.remove('border-green-500');
        showFieldError(input, 'Please enter a valid phone number');
        if (!firstErrorField) firstErrorField = input;
        isValid = false;
      }
    }
  });

  if (firstErrorField) {
    firstErrorField.focus();
    firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return isValid;
}

function showFieldError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message text-red-500 text-sm mt-1';
  errorDiv.textContent = message;
  input.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function submitContactForm() {
  if (validateForm('contact-form')) {
    // Show loading state
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

    // Simulate form submission with delay
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      document.getElementById('contact-form').reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Clear validation styles
      document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea').forEach(field => {
        field.classList.remove('border-red-500', 'border-green-500');
      });
    }, 1500);
  }
}

function submitQuoteForm() {
  if (validateForm('quote-form')) {
    // Show loading state
    const submitBtn = document.querySelector('#quote-form button[type="button"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';

    // Simulate form submission with delay
    setTimeout(() => {
      alert('Thank you for your quote request! Our team will contact you within 24 hours.');
      document.getElementById('quote-form').reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Clear validation styles
      document.querySelectorAll('#quote-form input, #quote-form select, #quote-form textarea').forEach(field => {
        field.classList.remove('border-red-500', 'border-green-500');
      });
    }, 1500);
  }
}

// Chat widget toggle
function toggleChat() {
  const popup = document.getElementById('chat-popup');
  popup.classList.toggle('hidden');
}

// Typewriter effect for text elements
function typewriterEffect(element, text, speed = 50) {
  element.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Legacy typewriter function kept for future use
function initTypewriter() {
  const typewriterElements = document.querySelectorAll('.typewriter-text');
  typewriterElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = ''; // Clear first
    typewriterEffect(element, text, 100);
  });
}

// Animated counter for numbers
function animateCounter(element, target, duration = 2000, suffix = '') {
  let start = 0;
  const increment = target / (duration / 16); // 60fps
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + suffix;
    }
  }, 16);
}

// Intersection Observer for scroll-triggered animations
function createScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
        if (entry.target.dataset.counter) {
          animateCounter(entry.target, parseInt(entry.target.dataset.counter), 2000, entry.target.dataset.suffix || '');
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('[data-animate], .animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Interactive material cards
function enhanceMaterialCards() {
  const cards = document.querySelectorAll('.material-card, .bg-white.p-8.rounded-2xl');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';

      // Show expanded details if they exist
      const details = this.querySelector('.card-details');
      if (details) {
        details.style.maxHeight = '200px';
        details.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';

      const details = this.querySelector('.card-details');
      if (details) {
        details.style.maxHeight = '0';
        details.style.opacity = '0';
      }
    });
  });
}

// Progress bars animation
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const width = bar.dataset.width || '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
}

// Parallax effect for hero background
function addParallaxEffect() {
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    if (hero) {
      const bg = hero.querySelector('.absolute.bg-cover');
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }
  });
}

// Modal functionality
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modal.classList.add('modal-visible');
    }, 10);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal-visible');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
}

// Carousel/slider functionality
function createCarousel(containerClass) {
  const containers = document.querySelectorAll('.' + containerClass);
  containers.forEach(container => {
    const slides = container.querySelectorAll('.carousel-slide');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const indicators = container.querySelectorAll('.carousel-indicator');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Auto-play
    setInterval(nextSlide, 5000);

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => showSlide(i));
    });
  });
}

// Enhanced form interactions
function enhanceForms() {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentNode.classList.remove('focused');
      }
    });
  });
}

// Initialize all enhancements on page load
document.addEventListener('DOMContentLoaded', function() {
  createScrollAnimations();
  enhanceMaterialCards();
  animateProgressBars();
  addParallaxEffect();
  createCarousel('carousel-container');
  enhanceForms();

  console.log('K&L Recycling website loaded successfully with enhanced interactivity');
});

// Slide-up animations for hero title
document.addEventListener('DOMContentLoaded', function() {
  // Hero title slide-up animations with delays
  const lines = document.querySelectorAll('.animate-slide-up-1, .animate-slide-up-2');
  lines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    setTimeout(() => {
      line.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, index * 300); // Stagger the animations
  });
});
