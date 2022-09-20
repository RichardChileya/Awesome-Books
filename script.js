const titleNew = document.querySelector('#title');
const authorNew = document.querySelector('#author');
const form = document.querySelector('#book-form');
const collection = document.querySelector('#collection');
let book = [];
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

class bookClass {
  constructor (id, title, author){
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook(){
    book = {id: this.id, title: this.title, author: this.author };
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  removeBook(bid){
    bookList = bookList.filter((books) => books.id !== bid);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

}

function populate(book) {
  const row = document.createElement('tr');
  const bookTitle = document.createElement('td');
  const bookAuthor = document.createElement('td');
  const removeBtn = document.createElement('button');
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  removeBtn.innerText = 'delete';
  row.append(bookTitle, bookAuthor, removeBtn);
  collection.append(row);
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    let objBookClass = new bookClass();
    objBookClass.removeBook(book.id);
  });
}

bookList.forEach(populate);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (titleNew.value !== '' && authorNew.value !== '') {
    let bookId=Math.floor(Math.random() * 100000);
    let objBookClass = new bookClass(bookId,titleNew.value,authorNew.value)
    objBookClass.addBook();
    populate(book);
    form.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter a title and author');
  }
});