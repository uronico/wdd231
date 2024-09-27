document.addEventListener('DOMContentLoaded', () => {
    const lastUpdate = document.getElementById('last-update');
    const now = new Date();
    lastUpdate.textContent = `Last Update: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
});
