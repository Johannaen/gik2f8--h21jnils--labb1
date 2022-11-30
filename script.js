'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const test = document.querySelectorAll('.book-list__item');
}

function showDetails(event) {
  const targetBook = bookList.filter(({title, author}) => {
    return ( 
      event.target.innerHTML.includes(title) && event.target.innerHTML.includes(author) //returnera bara boken med titel och författare som boken vi är vid
    )}
  );


  const existingElement = document.getElementById("bookDetails");
  if (existingElement ){
    existingElement.remove()
  }
  
 
  if (targetBook.length > 0) {
  getBook(targetBook[0].id).then(book => {
    event.target.insertAdjacentHTML("beforeend", getBookCard(book))
  });
  }}

function removeDetails(event) {
  const existingElement = document.getElementById("bookDetails");
  if (existingElement ){
    existingElement.remove()
  }
}