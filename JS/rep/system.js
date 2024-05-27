document.addEventListener('DOMContentLoaded', (event) => {
    const av = document.querySelector('.av');
    let posX = 0;
    let posY = 0;
    const step = 10;
    const boundaryX = 700 - 35; // Container width - element width
    const boundaryY = 700 - 35; // Container height - element height

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            if (posY > 0) {
                posY -= step;
            }
        } else if (e.key === 'ArrowDown') {
            if (posY < boundaryY) {
                posY += step;
            }
        } else if (e.key === 'ArrowLeft') {
            if (posX > 0) {
                posX -= step;
            }
        } else if (e.key === 'ArrowRight') {
            if (posX < boundaryX) {
                posX += step;
            }
        }
        av.style.transform = `translate(${posX}px, ${posY}px)`;
    });
});
