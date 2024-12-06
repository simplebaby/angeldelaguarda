// Cargar Navbar y Footer
fetch('includes/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });

fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

// Cargar noticias desde un archivo JSON
fetch('noticias/noticias.json')
    .then(response => response.json())
    .then(data => {
        const noticiasLista = document.getElementById('noticias-lista');
        data.forEach(noticia => {
            const noticiaElement = document.createElement('div');
            noticiaElement.classList.add('card', 'mb-3');
            noticiaElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.descripcion}</p>
                </div>
            `;
            noticiasLista.appendChild(noticiaElement);
        });
    });
