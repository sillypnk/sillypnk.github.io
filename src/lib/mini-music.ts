interface SongModule {
  default: string;
}

interface SongData {
  producer: string;
  title: string;
  src: string;
  row?: HTMLLIElement;
}

const matches = import.meta.glob("../assets/media/audio/songs/*.mp3", {
  eager: true,
});

const SONG_DATA: SongData[] = Object.entries(matches).map(([path, module]) => {
  const songModule = module as SongModule;
  const filename = path.split("/").pop()?.replace(".mp3", "") ?? "";
  const match = filename.match(/^\[(.+?)\]\s*(.+)$/);

  return {
    producer: match ? match[1] : "Unknown",
    title: match ? match[2] : filename,
    src: songModule.default,
  };
});

document.addEventListener("DOMContentLoaded", () => {
  // (A) INITIALIZING PLAYER & ELEMENTS
  const audio = new Audio();
  const playlistEl =
    document.querySelector<HTMLUListElement>("#mini-playlist")!;
  const playEl = document.querySelector<HTMLButtonElement>("#music-play")!;
  const durationNow = document.querySelector<HTMLElement>("#duration-now")!;
  const durationTime = document.querySelector<HTMLElement>("#duration-time")!;
  const seekBar = document.querySelector<HTMLInputElement>("#seekbar")!;
  const musicPlayIcon =
    document.querySelector<HTMLElement>("#music-play_icon")!;

  let audioCurrentSong: number = 0;
  let audioAutoStart: boolean = false;

  const audioPlay = (currentSongIndex: number, noAutoStart?: boolean): void => {
    audioCurrentSong = currentSongIndex;
    audioAutoStart = noAutoStart ? false : true;
    audio.src = SONG_DATA[currentSongIndex].src;

    SONG_DATA.forEach((song, songIndex) => {
      const el = song.row!;
      const hasActivePlayingClass = el.classList.contains(
        "song-currently-playing",
      );

      if (currentSongIndex === songIndex && hasActivePlayingClass) {
        el.classList.remove("song-currently-playing");
      } else if (currentSongIndex === songIndex && !hasActivePlayingClass) {
        el.classList.add("song-currently-playing");
      } else {
        el.classList.remove("song-currently-playing");
      }
    });
  };

  SONG_DATA.forEach((song, index) => {
    const songList = document.createElement("li");
    songList.innerHTML = song.title;
    songList.addEventListener("click", () => audioPlay(index));
    song.row = songList;
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
    if (audioCurrentSong >= SONG_DATA.length) audioCurrentSong = 0;
    audioPlay(audioCurrentSong);
  });

  // Init set first song
  audioPlay(0, true);

  // -------- ACTIONS ---------
  // TODO: Manipulating the icons
  audio.addEventListener("play", () => {
    playEl.innerHTML = `
      <Icon
          name="misc/pause"
          width="12"
          height="12"
      />
      `;
  });
  audio.addEventListener("pause", () => {
    playEl.innerHTML = `
      <Icon
          name="misc/play"
          width="12"
          height="12"
      />
      `;
  });

  playEl.addEventListener("click", () => {
    if (audio.paused) return void audio.play();
    audio.pause();
  });

  const timeString = (secs: number): string => {
    let ss = Math.floor(secs);
    let hh = Math.floor(ss / 3600);
    let mm = Math.floor((ss - hh * 3600) / 60);
    ss = ss - hh * 3600 - mm * 60;

    const mmStr = hh > 0 ? String(mm).padStart(2, "0") : String(mm);
    const ssStr = String(ss).padStart(2, "0");
    return hh > 0 ? `${hh}:${mmStr}:${ssStr}` : `${mmStr}:${ssStr}`;
  };

  // (D2) INIT SET TRACK TIME
  audio.addEventListener("loadedmetadata", () => {
    durationNow.innerHTML = timeString(0);
    durationTime.innerHTML = timeString(audio.duration);

    // (E1) SET SEEK BAR MAX TIME
    seekBar.max = String(Math.floor(audio.duration));

    // (E2) USER CHANGE SEEK BAR TIME
    let seeking: boolean = false;
    seekBar.addEventListener("input", () => (seeking = true));
    seekBar.addEventListener("change", () => {
      audio.currentTime = Number(seekBar.value);
      if (!audio.paused) audio.play();
      seeking = false;
    });

    // (E3) UPDATE SEEK BAR ON PLAYING
    audio.addEventListener("timeupdate", () => {
      if (!seeking) seekBar.value = String(Math.floor(audio.currentTime));
    });
  });

  // (D3) UPDATE TIME ON PLAYING
  audio.addEventListener("timeupdate", () => {
    durationNow.innerHTML = timeString(audio.currentTime);
  });
});
