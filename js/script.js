// Contact form → WhatsApp integration
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = encodeURIComponent(contactForm.name.value.trim());
    const phone = encodeURIComponent(contactForm.phone.value.trim());
    const service = encodeURIComponent(contactForm.service.value.trim());
    const message = encodeURIComponent(contactForm.message.value.trim());

    // WhatsApp business number for AC-Fridge Repair
    const waNumber = '923001234567'; // Replace with actual number
    const text = `🔧 New Service Request:%0A%0A📝 Name: ${name}%0A📱 Phone: ${phone}%0A🛠️ Service: ${service}%0A💬 Issue: ${message}`;

    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    
    // Reset form
    contactForm.reset();
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
