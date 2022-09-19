
function BookStoring(title, author) {
  const bookFields = { StoredTitle: title, StoredAuthor: author};
  localStorage.setItem('Books_Storage_Data', JSON.stringify(bookFields));
  return true;
}