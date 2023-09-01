let myLibrary = [];

function Music(song, album, band) {
    this.song = song;
    this.album = album;
    this.band = band;
}

function addMusicToLibrary(song, album, band) {
    const library = document.querySelector(".library");
    const div = document.createElement("div");
    const div_music_container = document.createElement("div");
    const div_song = document.createElement("div");
    const div_album = document.createElement("div");
    const div_band = document.createElement("div");
    const remove = document.createElement("button");
    const checkbox = document.createElement("input");

    let music = new Music(song, album, band);
    myLibrary.push(music);

    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        let get_music = div.getAttribute("music");
        let get_id = document.getElementById(`${get_music}`);
        get_id.remove()
    });

    checkbox.setAttribute("type", "checkbox");

    div.setAttribute("music", `${myLibrary.length - 1}`);
    div.id = `${myLibrary.length - 1}`;
    div_song.append(`${song}`);
    div_album.append(`${album}`);
    div_band.append(`${band}`);
    div_music_container.setAttribute("class", "music-container")
    div_music_container.append(div_song, div_album, div_band);
    div.append(div_music_container, checkbox, remove)
    library.append(div);
}

function receiveInput() {
    const enter = document.querySelector(".enter");
    const song = document.querySelector(".song");
    const album = document.querySelector(".album");
    const band = document.querySelector(".band");

    enter.addEventListener("click", () => addMusicToLibrary(song.value, album.value, band.value));
}

receiveInput();
