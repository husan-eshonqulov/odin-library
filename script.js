const addBookModal = document.querySelector('#addBookModal');
const addBookBtn = document.querySelector('#addBookBtn');
const addBookForm = document.querySelector('#addBookForm');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const booksGrid = document.querySelector('#bookGrid');
const books = [];

addBookBtn.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);

addBookForm.addEventListener('submit', (e) => { e.preventDefault() })

function openAddBookModal() {
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}

function closeAddBookModal() {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
}

