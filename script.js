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
          <th><input type="button" id="remove-btn" class="form-control" value="Remove"></th>
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