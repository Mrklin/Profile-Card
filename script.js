// Profile Card Script - Updates current time every 1000ms
// Uses aria-live="polite" for screen reader announcements

const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateCurrentTime() {
  const nowMs = Date.now();
  timeEl.textContent = nowMs;
}

// Initial update
updateCurrentTime();

// Update every second (1000ms) - reasonable for time display
setInterval(updateCurrentTime, 1000);

