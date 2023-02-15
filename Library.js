/* eslint linebreak-style: ["error", "windows"] */

let n = 0;

let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = bookRead;
}

function addBookCard() {
    /* Generate text container */
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book-div", "book-container");
  bookDiv.setAttribute("id", "book-container-" + n);

  /* Generate bookTitle  div and append title from form */

  let bookTitleDivText = document.createElement("div");
  bookTitleDivText.appendChild(document.createTextNode('"' + myLibrary[n].title + '"'));
  bookTitleDivText.classList.add("book-button-container-text");
  
  bookDiv.appendChild(bookTitleDivText);

  /* Generate bookAuthor div and append author from form */

  let bookAuthorDivText = document.createElement("div");
  bookAuthorDivText.appendChild(document.createTextNode(myLibrary[n].author));
  bookAuthorDivText.classList.add("book-button-container-text");

  bookDiv.appendChild(bookAuthorDivText);

    /* Generate bookPages number div and append number from form */

  let bookPagesDivNumber = document.createElement("div");
  bookPagesDivNumber.appendChild(document.createTextNode(myLibrary[n].pages + " pages"));
  bookPagesDivNumber.classList.add("book-button-container-text");

  bookDiv.appendChild(bookPagesDivNumber);

    /* Generate bookRead button and add read status based on checkbox state */
  let bookReadButton = document.createElement("button");
  bookReadButton.className = "header-log-in";
  bookReadButton.setAttribute("id", "book-read-button");

      /* Allow user to toggle "read" status of book */
  bookReadButton.onclick = function toggleRead () {
    if (bookReadButton.innerHTML === "Read") {
      bookReadButton.innerHTML = "Not Read";
      bookReadButton.classList.remove("book-read-button-read");
      bookReadButton.classList.add("book-read-button-notread");
    }
    else {
      bookReadButton.innerHTML = "Read"
      bookReadButton.classList.remove("book-read-button-notread");
      bookReadButton.classList.add("book-read-button-read");
    }
  };
      /* Adds the "read" text and appropriate class to the bookRead button */
  let checkbox = document.getElementById("book-read");
  if (checkbox.checked === true) {
    bookReadButton.appendChild(document.createTextNode("Read"));
    bookReadButton.classList.remove("book-read-button-notread");
    bookReadButton.classList.add("book-read-button-read");
  } else {
    bookReadButton.appendChild(document.createTextNode("Not Read"));
    bookReadButton.classList.remove("book-read-button-read");
    bookReadButton.classList.add("book-read-button-notread");
  }

  bookDiv.appendChild(bookReadButton);

    /* Generate bookRemove button and allow the user to remove the bookDiv onclick */
  let bookRemoveButton = document.createElement("button");
  bookRemoveButton.className = "header-log-in";
  bookRemoveButton.setAttribute("id", "book-remove-button");

      /* Allow bookRemove button to remove div from page */
  bookRemoveButton.onclick = function removeDiv () {
    this.parentNode.style.scale = '0';
    setTimeout(() => this.parentNode.remove(), 500);
  };
  bookRemoveButton.appendChild(document.createTextNode("Remove"));
  bookDiv.appendChild(bookRemoveButton);

      /* Increment index */
  n += 1;

      /* Add complete div to page */
  document.getElementById('div-landing-space').appendChild(bookDiv);
}

function addBookToLibrary() {
  let bookTitle = document.getElementById('book-title').value;
  let bookAuthor = document.getElementById('book-author').value;
  let bookPages = document.getElementById('book-pages').value;
  let bookRead = document.getElementById('book-read').value;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  
  myLibrary.push(newBook);
  addBookCard();
}

