document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const startOverlay = document.getElementById('start-overlay');
    const audioBlack = document.getElementById('audio-black');
    const audioLoading = document.getElementById('audio-loading');
    const audioFinal = document.getElementById('audio-final'); // Recuperiamo il terzo audio

    btnStart.addEventListener('click', () => {
        startOverlay.style.display = 'none';
        audioBlack.play();

        // 1. Dopo 2.5s passa da Nero a Caricamento
        setTimeout(() => {
            audioBlack.pause();
            audioBlack.currentTime = 0;
            audioLoading.play();
        }, 2500);

        // 2. Dopo 5s (fine splash caricamento) passa a Audio Finale
        setTimeout(() => {
            audioLoading.pause();
            audioLoading.currentTime = 0;
            audioFinal.play(); // Parte l'audio del sito
        }, 5000);

        // 3. Dopo 35s totali (5s di caricamento + 30s di audio finale) lo ferma
        setTimeout(() => {
            audioFinal.pause();
            audioFinal.currentTime = 0;
        }, 35000);

    }, { once: true });
});