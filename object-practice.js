const myLibrary = [];
let id_counter = 0;

function Book(song, album, track, id) {
    this.song = song;
    this.album = album;
    this.track = track;
    this.id = id;
}

function addBookToLibrary(song, album, track) {
    const library = document.querySelector("#content");
    const div = document.createElement("div");

    let book = new Book(song, album, track, id_counter);
    myLibrary.push(book);

    div.setAttribute("id", `${id_counter}`);
    div.append(`${song}, ${album}, ${track}`);
    library.append(div);

    id_counter += 1;
}

function remove_book(id) {
    const book = document.getElementById(`${id}`);
    book.remove();
    myLibrary[id] = Book.prototype;
}

addBookToLibrary("Test", "Ting", "123");
addBookToLibrary("Aegis", "Noctourniquet", "Track 2");
addBookToLibrary("Eunuch Provocateur", "Tremulant", "Track 3");
remove_book(0)
addBookToLibrary("Test", "Ting", "123");
addBookToLibrary("Roullete Dares", "De-loused in the Comatorium", "Track 2");
addBookToLibrary("Tourmaline", "Que Dios Te Maldiga Mi Corazon", "Track 11");

console.log(myLibrary);
