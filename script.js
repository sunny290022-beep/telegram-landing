// Single Telegram account link
const TELEGRAM_LINK = "https://t.me/BOSSZK99999?text=%E1%9E%81%E1%9F%92%E1%9E%89%E1%9E%BB%E1%9F%86%E1%9E%85%E1%9E%84%E1%9F%8B%E1%9E%85%E1%9E%BC%E1%9E%9B%E1%9E%9A%E1%9E%BD%E1%9E%98%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9E%BB%E1%9E%98%E1%9E%9C%E1%9E%B7%E1%9E%93%E1%9E%B7%E1%9E%99%E1%9F%84%E1%9E%82%20%F0%9F%91%89%E1%9E%85%E1%9E%BB%E1%9E%85%E1%9E%85%E1%9E%BC%E1%9E%9B%E1%9E%93%E1%9F%81%E1%9F%87%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9F%92%E1%9E%94%E1%9E%B8%E1%9E%91%E1%9E%91%E1%9E%BD%E1%9E%9B%E1%9E%94%E1%9E%B6%E1%9E%93%E1%9E%80%E1%9E%B6%E1%9E%9A%E1%9E%8E%E1%9F%82%E1%9E%93%E1%9E%B6%E1%9F%86%F0%9F%91%89%20";

// Get elements
const joinBtn = document.getElementById('joinBtn');

// Handle page click - click anywhere to open link
document.addEventListener('click', function(e) {
  openTelegramLink();
});

// Handle button click
joinBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  openTelegramLink();
});

// Open Telegram link
function openTelegramLink() {
  // Add loading state
  joinBtn.classList.add('loading');
  joinBtn.disabled = true;

  // Open link in new tab
  window.open(TELEGRAM_LINK, '_blank');

  // Remove loading state after delay
  setTimeout(() => {
    joinBtn.classList.remove('loading');
    joinBtn.disabled = false;
  }, 500);
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add visual feedback
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    openTelegramLink();
  }
});

// Log Telegram link on load
console.log('Telegram link:', TELEGRAM_LINK);
