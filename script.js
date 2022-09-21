const titleNew = document.querySelector('#title');
const authorNew = document.querySelector('#author');
const form = document.querySelector('#book-form');
const collection = document.querySelector('#collection');
let book = [];
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

class BookClass {
  constructor(id, title, author) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    book = { id: this.id, title: this.title, author: this.author };
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  removeBook() {
    bookList = bookList.filter((books) => books.id !== this.id);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
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
    const objBookClassRemove = new BookClass(book.id, book.title, book.author);
    objBookClassRemove.removeBook();
  });
}

bookList.forEach(populate);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (titleNew.value !== '' && authorNew.value !== '') {
    const bookId = Math.floor(Math.random() * 100000);
    const objBookClass = new BookClass(bookId, titleNew.value, authorNew.value);
    objBookClass.addBook();
    populate(book);
    form.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter a title and author');
  }
});

const bookSection = document.querySelector('#book-list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact');

const listButton = document.querySelector('#list-nav');
const addButton = document.querySelector('#add-nav');
const contactButton = document.querySelector('#contact-nav');

function homeSectionDisplay (){
  if (bookSection.style.display === 'none') {
    bookSection.style.display = 'flex';
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
  } else {
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
  }
}

listButton.addEventListener('click', () => {
  homeSectionDisplay();
});

addButton.addEventListener('click', () => {
  if (formSection.style.display === 'none') {
    formSection.style.display = 'flex';
    bookSection.style.display = 'none';
    contactSection.style.display = 'none';
  } else {
    bookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }
});
contactButton.addEventListener('click', () => {
  if (contactSection.style.display === 'none') {
    contactSection.style.display = 'flex';
    formSection.style.display = 'none';
    bookSection.style.display = 'none';
  } else {
    formSection.style.display = 'none';
    bookSection.style.display = 'none';
  }
});