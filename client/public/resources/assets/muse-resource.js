const copyText = async (button) => {
  const text = button.closest('[data-copy]')?.dataset.copy;
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const temporary = document.createElement('textarea');
    temporary.value = text;
    temporary.setAttribute('readonly', '');
    temporary.style.position = 'fixed';
    temporary.style.opacity = '0';
    document.body.appendChild(temporary);
    temporary.select();
    document.execCommand('copy');
    temporary.remove();
  }

  const original = button.textContent;
  button.textContent = 'Copied';
  button.classList.add('is-copied');
  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove('is-copied');
  }, 1600);
};

document.querySelectorAll('[data-copy] .copy-button').forEach((button) => {
  button.addEventListener('click', () => copyText(button));
});

document.querySelectorAll('[data-scroll-to-access]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const access = document.querySelector('#access');
    if (!access) return;
    event.preventDefault();
    access.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
});
