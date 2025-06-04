
  const button = document.getElementById('cuteButton');
  const popup = document.getElementById('cutePopup');

  button.addEventListener('click', () => {
    popup.classList.remove('hidden');

    // Auto-hide after 2.5 seconds
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 2500);
  });
