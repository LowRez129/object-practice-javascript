let myLibrary = [];

function Music(song, album, band) {
    this.song = song;
    this.album = album;
    this.band = band;
}

function addMusicToLibrary(song, album, band) {
    const library = document.querySelector(".library");
    const div = document.createElement("div");
    const remove = document.createElement("button");

    let music = new Music(song, album, band);
    myLibrary.push(music);

    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        let get_music = div.getAttribute("music");
        let get_id = document.getElementById(`${get_music}`);
        get_id.remove()
    });

    div.setAttribute("music", `${myLibrary.length - 1}`);
    div.id = `${myLibrary.length - 1}`;
    library.append(div);
    div.append(`${song}, ${album}, ${band}`, remove);
}

function receiveInput() {
    const enter = document.querySelector(".enter");
    const song = document.querySelector(".song");
    const album = document.querySelector(".album");
    const band = document.querySelector(".band");

    enter.addEventListener("click", () => addMusicToLibrary(song.value, album.value, band.value));
}

receiveInput();
