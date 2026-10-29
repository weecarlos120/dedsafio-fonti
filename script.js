// Scroll suave del menú

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if(destino){
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});

// Animación de aparición

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        }

    });

});

cards.forEach(card => {
    observer.observe(card);
});
