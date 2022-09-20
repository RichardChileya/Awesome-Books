const tableArea = document.getElementById('table');

function BookStoring(title, author) {
  var bookID = Math.floor(Math.random() * 100);
  var getOldData =JSON.parse(window.localStorage.getItem('AllBooks_Data'));
  var bookFields = { StoredID: bookID, StoredTitle: title, StoredAuthor: author};
    if(getOldData === null){ getOldData = [];}
      window.localStorage.setItem('LastBook_Data',JSON.stringify(bookFields));
      getOldData.push(bookFields);
      window.localStorage.setItem('AllBooks_Data',JSON.stringify(getOldData));
  return true;
}
var bookFieldsGetting = JSON.parse(window.localStorage.getItem('AllBooks_Data'));

function loadElements(i) {
  const tablerow = document.createElement('tr');
  tablerow.classname = 'tablerow';
  tablerow.innerHTML = `<thead>
  <tr>
          <th><input type="button" onclick="remFunction(${bookFieldsGetting[i].StoredID})" id="rembtn-${bookFieldsGetting[i].StoredID}" class="remove-btn" value="Remove"></th>
          <th>${bookFieldsGetting[i].StoredTitle}</th>
          <th>${bookFieldsGetting[i].StoredAuthor}</th>
        </tr>
  </thead>`;
  tableArea.appendChild(tablerow);
}
function ShowDataOnload() {
  for (let i = 0; i <= bookFieldsGetting.length; i += 1) {
    loadElements(i);
  }
}
function remFunction(bookID)
{
  let bookCollection =[]
  var removeBtn = document.getElementById('rembtn-'+ bookID);
  var booksItems = localStorage.getItem('AllBooks_Data'); // updated
  var bookFieldsGetting = JSON.parse(window.localStorage.getItem('AllBooks_Data'));
  for (var i =0; i< booksItems.length ; i++) {
      if (bookFieldsGetting[i].StoredID == bookID) {
        bookFieldsGetting.splice(i,1);
        
       break;
      }
  }
   booksItems = JSON.stringify(bookFieldsGetting); 
  localStorage.setItem('AllBooks_Data', booksItems);
  setTimeout(window.location.reload(), 2000);
}