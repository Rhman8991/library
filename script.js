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
    const bookPagesVal = Number(bookPagesVal.value);
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

