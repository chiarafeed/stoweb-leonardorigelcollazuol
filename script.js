document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const portfolioImages = document.querySelectorAll('.immagini-portfolio img');

    // Funzione per aprire l'anteprima
    function openLightbox(imageUrl) {
        lightboxImage.src = imageUrl;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina
    }

    // Funzione per chiudere l'anteprima
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Riattiva lo scroll della pagina
        // Pulisce l'src per evitare che l'immagine precedente appaia per un istante
        lightboxImage.src = ''; 
    }

    // Aggiunge l'evento di clic a OGNI immagine del portfolio
    portfolioImages.forEach(image => {
        image.addEventListener('click', () => {
            // Usa l'src dell'immagine cliccata
            openLightbox(image.src);
        });
    });

    // Chiude l'anteprima quando clicchi sulla 'X'
    lightboxClose.addEventListener('click', closeLightbox);

    // Chiude l'anteprima quando clicchi sullo sfondo scuro
    lightbox.addEventListener('click', (event) => {
        // Verifica se hai cliccato sullo sfondo (lightbox) e non sull'immagine stessa
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Chiude l'anteprima con il tasto ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});