const myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.showvalue = () => { console.log(title, author, pages) };
}

function addBookToLibrary(title, author, pages) {
    // do stuff here
    const library = document.querySelector("#content");
    const div = document.createElement("div");

    let book = new Book(title, author, pages);
    myLibrary.push(book);

    div.append(`${title}, ${author}, ${pages}`);
    library.append(div);
}

addBookToLibrary("Test", "Ting", "123");
addBookToLibrary("Aegis", "Noctourniquet", "Track 2");

console.log(myLibrary);
myLibrary[0].showvalue();
myLibrary[1].showvalue();