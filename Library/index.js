const myLibrary = [
  {
    id: crypto.randomUUID(),
    author: "james clear",
    title: "atomic habits",
    pages: 234,
  },
  {
    id: crypto.randomUUID(),
    author: "mark manson",
    title: "the subtle art of not giving fuck",
    pages: 212,
  },
];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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
