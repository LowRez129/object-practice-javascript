const myLibrary = [];
let id_counter = 0;

function Book(title, author, pages, id) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
    // do stuff here
    const library = document.querySelector("#content");
    const div = document.createElement("div");

    let book = new Book(title, author, pages, id_counter);
    myLibrary.push(book);

    div.classList.add(id_counter);
    div.append(`${title}, ${author}, ${pages}`);
    library.append(div);

    id_counter += 1;
}

function remove_book(id) {
 
}

addBookToLibrary("Test", "Ting", "123");
addBookToLibrary("Aegis", "Noctourniquet", "Track 2");
remove_book(0);

let tmv = myLibrary[1].id;
myLibrary.splice(tmv, 1);

console.log(myLibrary, tmv)