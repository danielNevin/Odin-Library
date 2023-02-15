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
    /* Generate book container */
  let bookDivContainer = document.createElement("div");
  bookDivContainer.classList.add("book-container", "new-book-container");
  bookDivContainer.setAttribute("id", "book-" + n);

    /* Generate text container */
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book-div");
  bookDiv.setAttribute("id", "book-container-" + n);
  bookDivContainer.appendChild(bookDiv);

    /* Generate button container */
  let bookDivButton = document.createElement("div");
  bookDivButton.classList.add("book-button-container");
  bookDivButton.setAttribute("id", "book-button-" + n);
  bookDivContainer.appendChild(bookDivButton);

    /* Generate bookTitle text div and append text from form */
  let bookTitleDiv = document.createElement("div");
  bookTitleDiv.className = "book-container-text";
  bookTitleDiv.setAttribute("id", "book-title");

  let bookTitleDivTitle = document.createElement("div");
  bookTitleDivTitle.appendChild(document.createTextNode("Title:"));
  bookTitleDiv.appendChild(bookTitleDivTitle);

  let bookTitleDivText = document.createElement("div");
  bookTitleDivText.appendChild(document.createTextNode(myLibrary[n].title));
  bookTitleDiv.appendChild(bookTitleDivText);
  
  bookDiv.appendChild(bookTitleDiv);

    /* Generate bookAuthor text div and append text from form */
  let bookAuthorDiv = document.createElement("div");
  bookAuthorDiv.className = "book-container-text";
  bookAuthorDiv.setAttribute("id", "book-author");

  let bookAuthorDivAuthor = document.createElement("div");
  bookAuthorDivAuthor.appendChild(document.createTextNode("Author:"));
  bookAuthorDiv.appendChild(bookAuthorDivAuthor);

  let bookAuthorDivText = document.createElement("div");
  bookAuthorDivText.appendChild(document.createTextNode(myLibrary[n].author));
  bookAuthorDiv.appendChild(bookAuthorDivText);

  bookDiv.appendChild(bookAuthorDiv);

    /* Generate bookPages number div and append number from form */
  let bookPagesDiv = document.createElement("div");
  bookPagesDiv.className = "book-container-text";
  bookPagesDiv.setAttribute("id", "book-pages");

  let bookPagesDivPages = document.createElement("div");
  bookPagesDivPages.appendChild(document.createTextNode("Pages:"));
  bookPagesDiv.appendChild(bookPagesDivPages);

  let bookPagesDivNumber = document.createElement("div");
  bookPagesDivNumber.appendChild(document.createTextNode(myLibrary[n].pages));
  bookPagesDiv.appendChild(bookPagesDivNumber);

  bookDiv.appendChild(bookPagesDiv);

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

  bookDivButton.appendChild(bookReadButton);

    /* Generate bookRemove button and allow the user to remove the bookDiv onclick */
  let bookRemoveButton = document.createElement("button");
  bookRemoveButton.className = "header-log-in";
  bookRemoveButton.setAttribute("id", "book-remove-button");

      /* Allow bookRemove button to remove div from page */
  bookRemoveButton.onclick = function removeDiv () {
    this.parentNode.parentNode.style.scale = '0';
    setTimeout(() => this.parentNode.parentNode.remove(), 500);
  };
  bookRemoveButton.appendChild(document.createTextNode("Remove"));
  bookDivButton.appendChild(bookRemoveButton);

      /* Increment index */
  n += 1;

      /* Add complete div to page */
  document.getElementById('div-landing-space').appendChild(bookDivContainer);
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

