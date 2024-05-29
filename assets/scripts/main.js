// main.js - General scripts for your website
document.addEventListener('DOMContentLoaded', () => {
    // no code here yet
});

// Parse the URL query string
const urlParams = new URLSearchParams(window.location.search);

// Check if 'app' parameter is for discord
if (urlParams.get('app') === 'discord') {
  const inviteCode = urlParams.get('invite');
  // Redirect to Discord invite link
  window.location.href = `discord://invite/${inviteCode}`;
}

// Check if 'app' parameter is for fivem
if (urlParams.get('app') === 'fivem') {
  const serverId = urlParams.get('server');
  // Open FiveM app with server ID
  window.location.href = `fivem://connect/cfx.re/join/${serverId}`;
}
