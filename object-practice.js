let myLibrary = [];
let id_counter = 0;

function Music(song, album = "unknown", band, id) {
    this.song = song;
    this.album = album;
    this.band = band;
    this.id = id;
}

function addMusicToLibrary(song, album, band) {
    const library = document.querySelector(".library");
    const div = document.createElement("div");
    id_counter += 1;

    let music = new Music(song, album, band, id_counter);
    myLibrary.push(music);

    div.setAttribute("id", `${id_counter}`);
    div.append(`${song}, ${album}, ${band}`);
    library.append(div);
}

function remove_Music(id) {
    const music = document.getElementById(`${id}`);
    music.remove();
    myLibrary[id] = Music.prototype;
}

function receiveInput() {
    const enter = document.querySelector(".enter");
    const remove = document.querySelector(".remove");

    const song = document.querySelector(".song");
    const album = document.querySelector(".album");
    const band = document.querySelector(".band");
    const id = document.querySelector(".id");

    enter.addEventListener("click", () => addMusicToLibrary(song.value, album.value, band.value));
    remove.addEventListener("click", () => remove_Music(id.value));
}

receiveInput();
