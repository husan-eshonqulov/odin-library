const addBookModal = document.querySelector('#addBookModal');
const addBookBtn = document.querySelector('#addBookBtn');
const addBookForm = document.querySelector('#addBookForm');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const booksGrid = document.querySelector('#booksGrid');
const books = [];
let id = 0;

addBookBtn.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);
addBookForm.addEventListener('submit', submitForm);

function fillGrid(books) {
    booksGrid.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const buttonGroup = document.createElement('div');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        bookCard.append(title);
        bookCard.append(author);
        bookCard.append(pages);
        buttonGroup.append(readBtn);
        buttonGroup.append(removeBtn);
        bookCard.append(buttonGroup);

        bookCard.classList.add('book-card');
        buttonGroup.classList.add('button-group');
        readBtn.classList.add('btn');
        removeBtn.classList.add('btn');
        readBtn.addEventListener('click', toggleRead);
        removeBtn.addEventListener('click', removeBook);

        title.textContent = `"${books[i].title}"`;
        author.textContent = books[i].author;
        pages.textContent = `${books[i].pages} pages`;
        readBtn.textContent = 'Read';
        removeBtn.textContent = 'Remove';


        booksGrid.append(bookCard);
    }
}

function toggleRead() {

}

function removeBook() {

}

function submitForm(e) {
    e.preventDefault();
    books.push({
        id: id,
        title: title.value,
        author: author.value,
        pages: pages.value,
        isRead: isRead.checked,
    });
    id++;
    fillGrid(books);
    closeAddBookModal();
    addBookForm.reset();
}

function openAddBookModal() {
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}

function closeAddBookModal() {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
}

