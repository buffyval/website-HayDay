document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const startOverlay = document.getElementById('start-overlay');
    const audioBlack = document.getElementById('audio-black');
    const audioLoading = document.getElementById('audio-loading');
    const audioFinal = document.getElementById('audio-final');

    btnStart.addEventListener('click', () => {
        // Nasconde l'overlay al primo click
        startOverlay.style.display = 'none';
        // Parte il primo audio
        audioBlack.play();
    }, { once: true });

    // Quando audioBlack finisce, fa partire il secondo
    audioBlack.addEventListener('ended', () => {
        audioLoading.play();
    });

    // Quando audioLoading finisce, fa partire il terzo
    audioLoading.addEventListener('ended', () => {
        audioFinal.play();
    });
    
    // Ferma l'audio finale dopo 30 secondi (opzionale)
    audioFinal.addEventListener('play', () => {
        setTimeout(() => {
            audioFinal.pause();
            audioFinal.currentTime = 0;
        }, 30000); 
    });
});
