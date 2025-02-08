// Riferimenti agli elementi
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const fullImg = document.getElementById('full-img');
const closeModal = document.getElementById('close-modal');

// Aggiungi l'evento click sulle miniature
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const fullImageSrc = this.getAttribute('data-full'); // Ottieni il percorso dell'immagine a grandezza naturale
        fullImg.src = fullImageSrc; // Imposta l'immagine grande nel modal
        modal.style.display = 'flex'; // Mostra il modal
    });
});

// Chiudi il modal quando si clicca sulla "X"
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Nascondi il modal
});

// Chiudi il modal cliccando fuori dall'immagine
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Nascondi il modal
    }
});
