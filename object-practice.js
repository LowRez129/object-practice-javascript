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

    enter.addEventListener("click", () => addMusicToLibrary("Test", "Ting", "123"));
}

receiveInput();
addMusicToLibrary("Test", "Ting", "123");
addMusicToLibrary("Aegis", "Noctourniquet", "Track 2");
addMusicToLibrary("Eunuch Provocateur", "Tremulant", "Track 3");
remove_Music(0)
addMusicToLibrary("Test", "Ting", "123");
addMusicToLibrary("Roullete Dares", "De-loused in the Comatorium", "Track 2");
addMusicToLibrary("Tourmaline", "Que Dios Te Maldiga Mi Corazon", "Track 11");

console.log(myLibrary);
