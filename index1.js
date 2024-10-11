
document.addEventListener('DOMContentLoaded', function() {
    // Muestra la tarjeta al cargar la página
    const welcomeCard = document.getElementById('welcomeCard');
    welcomeCard.style.display = 'block';

    // Función para cerrar la tarjeta
    document.getElementById('closeCardButton').addEventListener('click', function() {
        welcomeCard.style.display = 'none'; // Oculta la tarjeta
    });
    
    // El resto de tu código
    let currentPage = 0; // Página actual
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.remove('active');
            if (index === pageIndex) {
                page.classList.add('active');
            }
        });
    }

    function nextPage() {
        currentPage = (currentPage + 1) % totalPages; // Avanza a la siguiente página
        showPage(currentPage);
    }

    // Agregar evento de clic a cada página para cambiar de página
    pages.forEach((page, index) => {
        page.addEventListener('click', nextPage);
    });

    // Mostrar la primera página inicialmente
    showPage(currentPage);
});

