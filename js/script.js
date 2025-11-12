// Dark mode toggle
const toggleBtn = document.querySelector('.theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    applyTheme(isDark);
  });
}

function applyTheme(isDark) {
  const root = document.documentElement.style;
  if (isDark) {
    root.setProperty('--bg', '#0B1220');
    root.setProperty('--bg-soft', '#0F172A');
    root.setProperty('--text', '#E5E7EB');
    root.setProperty('--muted', '#CBD5E1');
    root.setProperty('--border', '#1F2937');
  } else {
    root.setProperty('--bg', '#FFFFFF');
    root.setProperty('--bg-soft', '#F8FAFC');
    root.setProperty('--text', '#0B1220');
    root.setProperty('--muted', '#64748B');
    root.setProperty('--border', '#E2E8F0');
  }
}

// Contact form → WhatsApp prefill
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(form.name.value.trim());
    const phone = encodeURIComponent(form.phone.value.trim());
    const service = encodeURIComponent(form.service.value.trim());
    const message = encodeURIComponent(form.message.value.trim());

    // Replace with your uncle's WhatsApp number (no leading 0)
    const waNumber = '03055051574';
    const text = `New service request:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AIssue: ${message}`;

    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  });
}
