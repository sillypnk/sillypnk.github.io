const Songs = [
  {
    title: "Machine Love - JamieP",
    source: "/pumoreiichi.vanilla/public/media/audio/[JamieP] Machine Love.mp3",
  },
  {
    title: "Koala (Self Cover) - Will Stetson",
    source: "/pumoreiichi.vanilla/public/media/audio/[Will Stetson] Koala (Self cover).mp3",
  },
  {
    title: "Heat Abnormal - Iyowa Ft. Adachi Rei",
    source: "/pumoreiichi.vanilla/public/media/audio/[Iyowa Ft. Adachi Rei] Heat Abnormal.mp3",
  },
  {
    title: "Absolute Zero - Natori",
    source: "/pumoreiichi.vanilla/public/media/audio/[Natori] Absolute Zero.mp3",
  },
  {
    title: "Theater - Natori",
    source: "/pumoreiichi.vanilla/public/media/audio/[Natori] Theater.mp3",
  },
  {
    title: "∞ - Oguri Cap",
    source: "/pumoreiichi.vanilla/public/media/audio/[Oguri Cap] ∞.mp3",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  // (A) INITIALIZING PLAYER & ELEMENTS
  const audio = new Audio();
  const playlistEl = document.querySelector("#mini-playlist");
  const playEl = document.querySelector("#music-play");
  const durationNow = document.querySelector("#duration-now");
  const durationTime = document.querySelector("#duration-time");
  const seekBar = document.querySelector("#seekbar");

  let audioCurrentSong = 0;
  let audioAutoStart = false;
  /**
   * @param {number} currentSongIndex
   * @param {boolean} noAutoStart
   * */
  const audioPlay = (currentSongIndex, noAutoStart) => {
    audioCurrentSong = currentSongIndex;
    audioAutoStart = noAutoStart ? false : true;
    audio.src = Songs[currentSongIndex].source;
    for (let songIndex in Songs) {
      /**
       * @type {HTMLLIElement}
       */
      const el = Songs[songIndex]["row"];

      // Debugging Area
      // console.log(songIndex);
      // console.log(el);

      const hasActivePlayingClass = el.classList.contains(
        "is-currently-playing"
      );
      if (songIndex == currentSongIndex && !hasActivePlayingClass) {
        el.classList.add("is-currently-playing");
      } else {
        el.classList.remove("is-currently-playing");
      }
    }
  };

  // for (const index in Songs) {
  //   let song = Songs[index];

  Songs.forEach((song, index) => {
    let songList = document.createElement("li");
    songList.innerHTML = song.title;
    songList.addEventListener("click", () => audioPlay(index));
    song["row"] = songList;
    playlistEl.appendChild(songList);
  });

  // Auto start when sufficiently buffered
  audio.addEventListener("canplay", () => {
    if (audioAutoStart) {
      audio.play();
      audioAutoStart = false;
    }
  });

  // AutoPlay next song in the playlist
  audio.addEventListener("ended", () => {
    audioCurrentSong++;
    if (audioCurrentSong >= Songs.length) audioCurrentSong = 0;
    audioPlay(audioCurrentSong);
  });

  // Init set first song
  audioPlay(0, true);

  // -------- ACTIONS ---------
  audio.addEventListener("play", () => {
    playEl.innerHTML = `<img src="../public/icons/pause.svg" alt="Play/Pause Icon" width="12" />`;
  });
  audio.addEventListener("pause", () => {
    playEl.innerHTML = `<img src="../public/icons/play.svg" alt="Play/Pause Icon" width="12" />`;
  });

  playEl.addEventListener("click", () => {
    if (audio.paused) return audio.play();
    audio.pause();
  });

  const timeString = (secs) => {
    // (D1-1) HOURS, MINUTES, SECONDS
    let ss = Math.floor(secs);
    let hh = Math.floor(ss / 3600);
    let mm = Math.floor((ss - hh * 3600) / 60);
    ss = ss - hh * 3600 - mm * 60;

    // (D1-2) RETURN FORMATTED TIME
    if (hh > 0) mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    return hh > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
  };

  // (D2) INIT SET TRACK TIME
  audio.addEventListener("loadedmetadata", () => {
    durationNow.innerHTML = timeString(0);
    durationTime.innerHTML = timeString(audio.duration);
  });

  // (D3) UPDATE TIME ON PLAYING
  audio.addEventListener(
    "timeupdate",
    () => (durationNow.innerHTML = timeString(audio.currentTime))
  );

  // (E) SEEK BAR
  audio.addEventListener("loadedmetadata", () => {
    // (E1) SET SEEK BAR MAX TIME
    seekBar.max = Math.floor(audio.duration);

    // (E2) USER CHANGE SEEK BAR TIME
    let seeking = false; // user is now changing time
    seekBar.addEventListener("input", () => (seeking = true)); // prevents clash with (e3)
    seekBar.addEventListener("change", () => {
      audio.currentTime = seekBar.value;
      if (!audio.paused) audio.play();
      seeking = false;
    });

    // (E3) UPDATE SEEK BAR ON PLAYING
    audio.addEventListener("timeupdate", () => {
      if (!seeking) {
        seekBar.value = Math.floor(audio.currentTime);
      }
    });
  });
  // };
});
