
function BookStoring(title, author) {
  var bookID = Math.floor(Math.random() * 100);
  const bookFields = { StoredID: bookID, StoredTitle: title, StoredAuthor: author};
  localStorage.setItem('Books_Storage_Data', JSON.stringify(bookFields));
  return true;
}