let myLibrary = [];
let id_counter = 0;

function Music(song, album, track, id) {
    this.song = song;
    this.album = album;
    this.track = track;
    this.id = id;
}

function addMusicToLibrary(song, album, track) {
    const library = document.querySelector(".library");
    const div = document.createElement("div");

    let music = new Music(song, album, track, id_counter);
    myLibrary.push(music);

    div.setAttribute("id", `${id_counter}`);
    div.append(`${song}, ${album}, ${track}`);
    library.append(div);

    id_counter += 1;
}

function remove_Music(id) {
    const music = document.getElementById(`${id}`);
    music.remove();
    myLibrary[id] = Music.prototype;
}

function receiveInput() {
    const enter = document.querySelector(".enter");
    const remove = document.querySelector(".remove");

    enter.addEventListener("click", () => addMusicToLibrary("Test", "Ting", "123"));
    remove.addEventListener("click", () => remove_Music(0));
}

receiveInput();
