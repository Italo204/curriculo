const items = document.querySelectorAll('.Carousel-conteiner');
let currentIndex = 0; // Começa no primeiro item

function updateCarousel() {
    const lastIndex = items.length - 1;

    items.forEach((item, index) => {
        item.classList.remove('item-left', 'item-center', 'item-right');

        // O item à esquerda deve ser o anterior, ou o último caso esteja no primeiro
        if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('item-left');
        } 
        // O item central é o atual
        else if (index === currentIndex) {
            item.classList.add('item-center');
        } 
        // O item à direita deve ser o próximo, ou o primeiro caso esteja no último
        else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('item-right');
        }
    });
}

function moveCarousel() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Inicia automaticamente
updateCarousel();
setInterval(moveCarousel, 2000);
