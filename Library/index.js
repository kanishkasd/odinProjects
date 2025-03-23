function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [
  new Book("Atomic Habits", "James Clear", 234, true),
  new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 212, true),
];

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
  displayBooks();
};

function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    bookCard.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.read ? "✅ Yes" : "❌ No"}</p>
    <button onclick="toggleRead('${book.id}')">Toggle Read<button> 
 <button onclick="removeBook('${book.id}')">Remove</button>`;
    libraryDiv.appendChild(bookCard);
  });
}

function toggleRead(bookId) {
  const book = myLibrary.find((book) => book.id === bookId);
  if (book) {
    book.toggleReadStatus();
  }
}

// remove book
function removeBook(bookId) {
  const index = myLibrary.findIndex((book) => book.id === bookId);
  if (index === -1) {
    console.log("no books available with this id!");
  }

  myLibrary.splice(index, 1);
  displayBooks();
}

//show hide form
document.getElementById("newBook").addEventListener("click", () => {
  document.querySelector(".new_book").classList.toggle("hidden");
});

// handle form submit
document
  .querySelector(".new_book")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(author, title, pages, read);
    this.reset();
  });

displayBooks();
