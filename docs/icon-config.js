/**
 * K&L Recycling Icon Configuration System
 * Centralized icon management for consistent styling and accessibility
 */

// Icon configuration object
const IconConfig = {
  // Service Icons
  services: {
    containers: {
      png: 'assets/icons/icons/container_roll_off.png',
      fa: 'fas fa-truck',
      alt: 'Roll-off Container Services',
      color: 'primary'
    },
    pickup: {
      png: 'assets/icons/icons/truck_delivery_mobile.png',
      fa: 'fas fa-shipping-fast',
      alt: 'Commercial Pickup Services',
      color: 'success'
    },
    cash: {
      png: 'assets/icons/icons/weight_scale_accurate.png',
      fa: 'fas fa-dollar-sign',
      alt: 'Cash for Scrap Services',
      color: 'warning'
    },
    public: {
      png: 'assets/icons/icons/education_school.png',
      fa: 'fas fa-users',
      alt: 'Public Services',
      color: 'info'
    },
    demolition: {
      png: 'assets/icons/icons/construction_debris.png',
      fa: 'fas fa-building',
      alt: 'Industrial Demolition',
      color: 'error'
    },
    crushing: {
      png: 'assets/icons/icons/car_crusher_mobile.png',
      fa: 'fas fa-compress-arrows-alt',
      alt: 'Mobile Crushing Services',
      color: 'purple'
    },
    environmental: {
      png: 'assets/icons/icons/impact_sustainability.png',
      fa: 'fas fa-leaf',
      alt: 'Environmental Services',
      color: 'success'
    },
    emergency: {
      png: 'assets/icons/icons/construction_debris.png',
      fa: 'fas fa-exclamation-triangle',
      alt: 'Emergency Response',
      color: 'warning'
    }
  },

  // Feature Icons
  features: {
    quality: {
      png: 'assets/icons/icons/quality_control_verified.png',
      fa: 'fas fa-check-circle',
      alt: 'Quality Control',
      color: 'success'
    },
    coverage: {
      png: 'assets/icons/icons/service_coverage_area.png',
      fa: 'fas fa-map-marked-alt',
      alt: 'Service Coverage',
      color: 'primary'
    },
    inventory: {
      png: 'assets/icons/icons/inventory_management.png',
      fa: 'fas fa-boxes',
      alt: 'Inventory Management',
      color: 'info'
    },
    scheduling: {
      png: 'assets/icons/icons/pickup_schedule_calendar.png',
      fa: 'fas fa-calendar-alt',
      alt: 'Pickup Scheduling',
      color: 'purple'
    }
  },

  // Material Icons
  materials: {
    ferrous: {
      png: 'assets/icons/icons/metal_steel_fragments.png',
      fa: 'fas fa-magnet',
      alt: 'Ferrous Metals',
      color: 'primary'
    },
    nonferrous: {
      png: 'assets/icons/icons/metal_aluminum_sheets.png',
      fa: 'fas fa-gem',
      alt: 'Non-Ferrous Metals',
      color: 'success'
    },
    copper: {
      png: 'assets/icons/icons/metal_copper_wiring.png',
      fa: 'fas fa-coins',
      alt: 'Copper Materials',
      color: 'warning'
    },
    aluminum: {
      png: 'assets/icons/icons/metal_aluminum_sheets.png',
      fa: 'fas fa-cube',
      alt: 'Aluminum Materials',
      color: 'info'
    },
    brass: {
      png: 'assets/icons/icons/metal_brass_fittings.png',
      fa: 'fas fa-cog',
      alt: 'Brass Materials',
      color: 'orange'
    }
  },

  // UI Icons
  ui: {
    phone: {
      fa: 'fas fa-phone',
      alt: 'Phone',
      color: 'primary'
    },
    email: {
      fa: 'fas fa-envelope',
      alt: 'Email',
      color: 'primary'
    },
    location: {
      fa: 'fas fa-map-marker-alt',
      alt: 'Location',
      color: 'primary'
    },
    facebook: {
      fa: 'fab fa-facebook-f',
      alt: 'Facebook',
      color: 'info'
    },
    linkedin: {
      fa: 'fab fa-linkedin-in',
      alt: 'LinkedIn',
      color: 'info'
    },
    check: {
      fa: 'fas fa-check-circle',
      alt: 'Check',
      color: 'success'
    },
    star: {
      fa: 'fas fa-star',
      alt: 'Star',
      color: 'warning'
    },
    quote: {
      fa: 'fas fa-quote-right',
      alt: 'Quote',
      color: 'primary'
    }
  }
};

// Icon utility functions
const IconUtils = {
  /**
   * Create a standardized icon element
   * @param {string} category - Icon category (services, features, materials, ui)
   * @param {string} name - Icon name within category
   * @param {Object} options - Configuration options
   */
  createIcon: function(category, name, options = {}) {
    const config = IconConfig[category]?.[name];
    if (!config) {
      console.warn(`Icon not found: ${category}.${name}`);
      return null;
    }

    const {
      size = 'md',
      type = 'png', // 'png' or 'fa'
      animate = false,
      background = false,
      color = config.color,
      className = '',
      containerClass = ''
    } = options;

    const iconContainer = document.createElement('div');
    iconContainer.className = `icon-container ${containerClass}`;
    iconContainer.setAttribute('role', 'img');
    iconContainer.setAttribute('aria-label', config.alt);

    if (type === 'png' && config.png) {
      const img = document.createElement('img');
      img.src = config.png;
      img.alt = config.alt;
      img.loading = 'lazy';
      img.decoding = 'async';

      const iconDiv = document.createElement('div');
      iconDiv.className = `professional-icon icon-${size} icon-bg-${color} ${animate ? `icon-animate-${animate}` : ''} ${className}`;

      if (background) {
        iconDiv.classList.add(`icon-bg-${color}`);
      }

      iconDiv.appendChild(img);
      iconContainer.appendChild(iconDiv);
    } else if (type === 'fa' && config.fa) {
      const iconDiv = document.createElement('div');
      iconDiv.className = `icon-fa icon-${size} icon-color-${color} ${animate ? `icon-animate-${animate}` : ''} ${className}`;

      const i = document.createElement('i');
      i.className = config.fa;
      i.setAttribute('aria-hidden', 'true');

      iconDiv.appendChild(i);
      iconContainer.appendChild(iconDiv);
    }

    return iconContainer;
  },

  /**
   * Replace existing icon with standardized version
   * @param {Element} element - Element to replace
   * @param {string} category - Icon category
   * @param {string} name - Icon name
   * @param {Object} options - Configuration options
   */
  replaceIcon: function(element, category, name, options = {}) {
    const newIcon = this.createIcon(category, name, options);
    if (newIcon) {
      element.parentNode.replaceChild(newIcon, element);
    }
  },

  /**
   * Initialize all icons on page load
   */
  init: function() {
    // Auto-replace Font Awesome icons with standardized versions
    this.replaceFontAwesomeIcons();
    this.enhanceExistingIcons();
  },

  /**
   * Replace Font Awesome icons with standardized versions
   */
  replaceFontAwesomeIcons: function() {
    const faIcons = document.querySelectorAll('i.fas, i.far, i.fab');
    faIcons.forEach(icon => {
      const classes = Array.from(icon.classList);
      const faClass = classes.find(cls => cls.startsWith('fa-'));

      if (faClass) {
        // Map common Font Awesome icons to our system
        const iconMap = {
          'fa-truck': ['services', 'containers'],
          'fa-shipping-fast': ['services', 'pickup'],
          'fa-dollar-sign': ['services', 'cash'],
          'fa-users': ['services', 'public'],
          'fa-building': ['services', 'demolition'],
          'fa-leaf': ['services', 'environmental'],
          'fa-exclamation-triangle': ['services', 'emergency'],
          'fa-check-circle': ['ui', 'check'],
          'fa-star': ['ui', 'star'],
          'fa-phone': ['ui', 'phone'],
          'fa-envelope': ['ui', 'email'],
          'fa-map-marker-alt': ['ui', 'location'],
          'fa-facebook-f': ['ui', 'facebook'],
          'fa-linkedin-in': ['ui', 'linkedin']
        };

        const mapping = iconMap[faClass];
        if (mapping) {
          this.replaceIcon(icon, mapping[0], mapping[1], {
            type: 'fa',
            size: this.getSizeFromClasses(classes),
            animate: this.getAnimationFromClasses(classes)
          });
        }
      }
    });
  },

  /**
   * Enhance existing professional icons
   */
  enhanceExistingIcons: function() {
    const professionalIcons = document.querySelectorAll('.professional-icon');
    professionalIcons.forEach(icon => {
      // Add hover effects if not already present
      if (!icon.classList.contains('hover:scale-110')) {
        icon.classList.add('transition-all', 'duration-300', 'cursor-pointer');
      }
    });
  },

  /**
   * Get icon size from class list
   */
  getSizeFromClasses: function(classes) {
    if (classes.includes('text-xs')) return 'xs';
    if (classes.includes('text-sm')) return 'sm';
    if (classes.includes('text-lg')) return 'lg';
    if (classes.includes('text-xl')) return 'xl';
    return 'md';
  },

  /**
   * Get animation from class list
   */
  getAnimationFromClasses: function(classes) {
    if (classes.includes('animate-float') || classes.includes('fa-spin')) return 'float';
    if (classes.includes('animate-pulse')) return 'pulse';
    if (classes.includes('animate-bounce')) return 'bounce';
    return false;
  }
};

// Initialize icon system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  IconUtils.init();
});

// Export for use in other scripts
window.IconConfig = IconConfig;
window.IconUtils = IconUtils;
