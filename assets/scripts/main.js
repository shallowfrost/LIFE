// main.js - General scripts for your website
document.addEventListener('DOMContentLoaded', () => {
    // no code here yet
});

function openFiveM(joinCode) {
    // Redirect to the FiveM server
    window.location.href = `fivem://connect/cfx.re/join/${joinCode}`;
}

function openDiscordInvite(inviteCode) {
    // Redirect to the Discord server
    window.location.href = `discord://invite/${inviteCode}`;
}
