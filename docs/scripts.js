// Mobile menu toggle with animations
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  } else {
    menu.classList.add('open');
    icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
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

// Form validation and submission
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
    }
  });

  return isValid;
}

function submitContactForm() {
  if (validateForm('contact-form')) {
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    document.getElementById('contact-form').reset();
  }
}

function submitQuoteForm() {
  if (validateForm('quote-form')) {
    // Simulate form submission
    alert('Thank you for your quote request! Our team will contact you within 24 hours.');
    document.getElementById('quote-form').reset();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Any initialization code here
  console.log('K&L Recycling website loaded successfully');
});
