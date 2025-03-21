const uuid = crypto.randomUUID();
const addBookButton = document.getElementById("newBook");
const newBookForm = document.querySelector(".new_book");

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

function Book() {}

function addBookToLibrary() {
  addBookButton.addEventListener("click", () => {
    newBookForm.classList.toggle("hidden");
  });
}

addBookToLibrary();
