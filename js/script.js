// Contact form → WhatsApp integration
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const rawName = contactForm.name.value.trim();
    const rawPhone = contactForm.phone.value.trim();
    const rawService = contactForm.service.value.trim();
    const rawMessage = contactForm.message.value.trim();

    if (!rawName || !rawPhone || !rawService || !rawMessage) {
      alert('Please fill all fields');
      return;
    }

    // basic phone normalization (remove spaces)
    const phoneNormalized = rawPhone.replace(/\s+/g, '');
    if (!/^\+?92\d{10}$/.test(phoneNormalized) && !/^92\d{10}$/.test(phoneNormalized)) {
      alert('Please enter a valid Pakistan phone number starting with +92 or 92');
      return;
    }

    const waNumber = phoneNormalized.startsWith('+') ? phoneNormalized.slice(1) : phoneNormalized; // remove + if present

    const textPlain = `🔧 New Service Request:\n\n📝 Name: ${rawName}\n📱 Phone: ${rawPhone}\n🛠️ Service: ${rawService}\n💬 Issue: ${rawMessage}`;
    const encoded = encodeURIComponent(textPlain);

    // Open WhatsApp (web or app) in a new tab
    const waUrl = `https://wa.me/${waNumber}?text=${encoded}`;
    window.open(waUrl, '_blank');

    contactForm.reset();
    // friendly confirmation
    setTimeout(() => {
      alert('Thank you! Your request has been prepared and will open in WhatsApp — send it there to complete the request.');
    }, 200);
  });
}

// Navbar Scroll Enhancement
const navbar = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for Scroll Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .service-card, .quote, .feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Button Hover Effects
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Form Validation
function validatePhone(phone) {
  const re = /^\+?92\d{10}$/;
  return re.test(phone.replace(/\s/g, ''));
}

if (contactForm) {
  const phoneInput = contactForm.querySelector('#phone');
  const nameInput = contactForm.querySelector('#name');

  if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value && !validatePhone(phoneInput.value)) {
        phoneInput.style.borderColor = '#ef4444';
      } else {
        phoneInput.style.borderColor = '#0EA5E9';
      }
    });
  }

  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      if (nameInput.value.length < 2) {
        nameInput.style.borderColor = '#ef4444';
      } else {
        nameInput.style.borderColor = '#0EA5E9';
      }
    });
  }
}
