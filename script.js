let ticking = false;

document.addEventListener('mousemove', (e) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const width = window.innerWidth;
            const mouseX = e.clientX;

            const trigger = 0.20;
            const leftLimit = width * trigger;
            const rightLimit = width * (1 - trigger);

            // Zone neutre (morte) élargie pour éviter le "clignotement" entre les états
            if (mouseX < leftLimit) {
                document.body.classList.add('left-active');
                document.body.classList.remove('right-active');
            } 
            else if (mouseX > rightLimit) {
                document.body.classList.add('right-active');
                document.body.classList.remove('left-active');
            } 
            else if (mouseX > width * 0.35 && mouseX < width * 0.65) {
                document.body.classList.remove('left-active', 'right-active');
            }
            ticking = false;
        });
        ticking = true;
    }
});