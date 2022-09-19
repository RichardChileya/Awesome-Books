/*Variables*/

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const button = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');
let book;

const  addBook = [ {
  title: titleInput
  author: authorInput
}];

function bookStore (){
  localStorage.setItem('booksData', JSON.stringify(addBook))
} 

button.addEventListener('click',(e) =>{
  e.preventDefault();
  bookStore();
  console.log(addBook.title);
});
