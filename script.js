const newBookBtn = document.getElementById("new-book-btn");

const readContainer = document.querySelector(".read-container");
const notReadContainer = document.querySelector(".not-read-container");

const modal = document.querySelector(".modal");
const modalCancelBtn = document.getElementById("modal-cancel-btn");
const bookForm = document.getElementById("book-form");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");

const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    const bookTitleVal = bookTitle.value;
    const bookAuthorVal = bookAuthorVal.value;
    const bookPagesVal = Number(bookPages.value);
    const bookStatusVal = bookStatus.checked;

    const book = new Book(bookTitleVal, bookAuthorVal, bookPagesVal, bookStatusVal);
    myLibrary.push(book);
}

function reset() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookStatus.checked = false;
}

newBookBtn.addEventListener("click", () => modal.showModal());

modalCancelBtn.addEventListener("click", () => {
    reset();
    modal.close();
})

bookForm.addEventListener("submit", e => {
    e.preventDefault();
    addBookToLibrary();
    reset();
    modal.close();
})

function renderBooks() {
    readContainer.innerHTML = "";
    notReadContainer.innerHTML = "";
    myLibrary.forEach(({title, author, pages, status}, index) => {
        const bookStat = status ? "Not Read" : "Read";
        const card = 
            `<div class="card" data-index="${index}">
                <h3>Title: ${title}</h3>
                <p>Auhtor: ${author}</p>
                <p>Number of Pages: ${pages}</div>
                <button type="button" class="change-status-btn">${bookStat}</button>
                <button type="button" class="remove-btn">Remove</button>
            </div>`;
        return status ? readContainer.innerHTML += card : notReadContainer.innerHTML += card;
    })
}

