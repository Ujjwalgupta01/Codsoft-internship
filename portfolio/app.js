// Simple form submit handler (no backend—just client‐side feedback)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;
  document.getElementById('formResult').innerText =
    `Thanks, ${name}! Your message has been received.`;
  this.reset();
});
