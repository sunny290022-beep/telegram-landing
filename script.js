// 18 Telegram links (zkbet017 and zkbet018 removed)
const TELEGRAM_LINKS = [
  "https://t.me/+zbYcmsobWNgzMGEy", // zkbet001
  "https://t.me/+CGHSspUgX7NiNDhi", // zkbet004
  "https://t.me/+qiS5LFDAxFBmNTQy", // zkbet009
  "https://t.me/+JwWWcBjPQS82YzZi", // zkbet010
  "https://t.me/+q1Pyc7Wa9CphZDMy", // zkbet016
  "https://t.me/+drxdaGp38TBmOTZi", // zkbet019
  "https://t.me/+Xet_177GckE1YTMy", // zkbet020
  "https://t.me/+GqGx8dl6U_s2NGVi", // zkbet021
  "https://t.me/+m1WIoX4ee08zMWRi", // zkbet022
  "https://t.me/+joWGad8zgJ04ZDAy", // zkbet023
  "https://t.me/+GHOgkioya7wwZjBi", // zkbet024
  "https://t.me/+8_F5MP_X4do5N2Yy", // zkbet026
  "https://t.me/+4nIErvqDikE2MWVi", // zkbet027
  "https://t.me/+RiOvPvbbYYMxMzEy", // zkbet028
  "https://t.me/+OsiRs5WSgKNjNmIy", // zkbet029
  "https://t.me/+BCKow5a49_thY2Qy", // zkbet030
  "https://t.me/+PqcGf1UKH381NzYy", // zkbet031
  "https://t.me/+0ucCSMD-iew0OWQy", // zkbet032
];

const STORAGE_KEY = "telegram_link_index";

// Get elements
const joinBtn = document.getElementById('joinBtn');
const container = document.querySelector('.container');

// Initialize link index from localStorage
function getCurrentIndex() {
  const savedIndex = localStorage.getItem(STORAGE_KEY);
  if (savedIndex !== null) {
    const index = parseInt(savedIndex, 10);
    return index % TELEGRAM_LINKS.length;
  }
  return 0;
}

// Handle page click - click anywhere to open link
document.addEventListener('click', function(e) {
  // Don't trigger if clicking on button (button has its own handler)
  if (e.target === joinBtn) {
    return;
  }
  openTelegramLink();
});

// Handle button click
joinBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  openTelegramLink();
});

// Open Telegram link and update index
function openTelegramLink() {
  const currentIndex = getCurrentIndex();
  const link = TELEGRAM_LINKS[currentIndex];

  // Add loading state
  joinBtn.classList.add('loading');
  joinBtn.disabled = true;

  // Open link in new tab
  window.open(link, '_blank');

  // Update index for next click
  const nextIndex = (currentIndex + 1) % TELEGRAM_LINKS.length;
  localStorage.setItem(STORAGE_KEY, nextIndex.toString());

  // Remove loading state after delay
  setTimeout(() => {
    joinBtn.classList.remove('loading');
    joinBtn.disabled = false;
  }, 500);
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Prevent right-click context menu (optional)
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

// Track page interactions
let interactionStartTime = new Date().getTime();

window.addEventListener('beforeunload', function() {
  const timeSpent = Math.round((new Date().getTime() - interactionStartTime) / 1000);
  console.log('Time spent on page:', timeSpent, 'seconds');
});

// Add visual feedback
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    openTelegramLink();
  }
});

// Log current link index on load
console.log('Current link index:', getCurrentIndex());
console.log('Total links:', TELEGRAM_LINKS.length);
