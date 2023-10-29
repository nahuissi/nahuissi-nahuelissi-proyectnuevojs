document.addEventListener('DOMContentLoaded', () => {
    function fetchBooks() {
        return new Promise((resolve, reject) => {
            const booksData = [
                {
                    id: 1,
                    title: "Cien años de soledad",
                    author: "Gabriel García Márquez",
                    genre: "Realismo mágico"
                },
                {
                    id: 2,
                    title: "El señor de los anillos",
                    author: "J.R.R. Tolkien",
                    genre: "Fantasía"
                },
                {
                    id: 3,
                    title: "Pinocho",
                    author: "Carlo Collodi",
                    genre: "Fantasia"
                }
            
            ];

            setTimeout(() => {
                resolve(booksData);
            }, 1000); 
        });
    }

    function showBookDetails(selectedBook) {
        const bookTitle = document.getElementById('bookTitle');
        const bookAuthor = document.getElementById('bookAuthor');
        const bookGenre = document.getElementById('bookGenre');

        bookTitle.textContent = `Título: ${selectedBook.title}`;
        bookAuthor.textContent = `Autor: ${selectedBook.author}`;
        bookGenre.textContent = `Género: ${selectedBook.genre}`;
    }

    function loadBookOptions(data) {
        const bookSelect = document.getElementById('bookSelect');

        data.forEach((book, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = book.title;
            bookSelect.appendChild(option);
        });

        bookSelect.addEventListener('change', (event) => {
            const selectedIndex = event.target.value;
            const selectedBook = data[selectedIndex];
            showBookDetails(selectedBook);
        });
    }

    fetchBooks()
        .then(data => {
            loadBookOptions(data);
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
});