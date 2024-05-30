document.addEventListener('DOMContentLoaded', function () {
  const discordInviteCode = 'lifeawaits';
  const fivemServerId = 'poj6vm';

  // Fetch FiveM server data and update link text
  const fivemLink = document.getElementById('fivem');
  if (fivemLink) {
      fetch(`https://servers-live.fivem.net/api/servers/single/${fivemServerId}`)
          .then(response => response.json())
          .then(data => {
              const { Data } = data;
              fivemLink.textContent = `Server Connect (${Data.clients}/${Data.sv_maxclients})`;
              fivemLink.href = `fivem://connect/cfx.re/join/${fivemServerId}`;
          })
          .catch(console.error);
  }

  // Check the app parameter to handle redirection
  const urlParams = new URLSearchParams(window.location.search);
  const app = urlParams.get('app');

  if (app === 'discord') {
      window.location.href = `discord://invite/${discordInviteCode}`;
  } else if (app === 'fivem') {
      window.location.href = `fivem://connect/cfx.re/join/${fivemServerId}`;
  }
});
