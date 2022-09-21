const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#book-form');
const collection = document.querySelector('#collection');
let book;
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
function addBook() {
  book = {
    title: title.value,
    author: author.value,
    id: Math.floor(Math.random() * 100000),
  };
  bookList.push(book);
  localStorage.setItem('bookList', JSON.stringify(bookList));
}
function removeBook(id) {
  bookList = bookList.filter((books) => books.id !== id);
  localStorage.setItem('bookList', JSON.stringify(bookList));
}
function populate(book) {
  const row = document.createElement('tr');
  const bookTitle = document.createElement('td');
  const bookAuthor = document.createElement('td');
  const removeBtn = document.createElement('button');
  bookTitle.innerText = `"${book.title}" by ${book.author}`;
  removeBtn.innerText = 'delete';
  row.append(bookTitle, bookAuthor, removeBtn);
  collection.append(row);
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    const objBookClassRemove = new BookClass(book.id,book.title, book.author);
    objBookClassRemove.removeBook();

  });
}
bookList.forEach(populate);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    addBook();
    populate(book);
    form.reset();
  } else {
    alert('Please enter a title and author');
  }
});