function useTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let timeString = `${hours}:${minutes} ${ampm}`;
  document.getElementById("taskbar-time").innerText = timeString;

  setTimeout(useTime, 1000);
}

function useMusic() {
  let el = document.getElementById("music-player");
  let now_playing = document.getElementById("is-playing");
  let now_playing_img = document.getElementById("is-playing-img");
  const music_id = document.getElementById("music");
  if (el) el.volume = 0;

  const FADE_DELAY = 40;

  const musicPlay = async () => {
    if (el.paused || el.ended) {
      if (el.ended) el.currentTime = 0;
      now_playing.innerHTML = "&nbsp;&nbsp; | &nbsp;&nbsp;Now Playing";
      now_playing_img.setAttribute("src", "../public/media/audio-wave.gif");
      await el.play();

      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume += 0.05; // step
          if (volume > 1) volume = 1;
          el.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, FADE_DELAY);
    } else {
      now_playing.innerHTML = "";
      now_playing_img.setAttribute("src", "../public/media/musical-notes.gif");
      let volume = el.volume;
      const fadeOut = setInterval(() => {
        if (volume > 0) {
          volume -= 0.05;
          if (volume < 0) volume = 0;
          el.volume = volume;
        } else {
          clearInterval(fadeOut);
          el.pause();
        }
      }, FADE_DELAY);
    }
  };

  const music = () => {
    if (music_id === undefined)
      throw new Error("Audio element to play for is missing.");

    // On click event
    music_id.onclick = async () => {
      musicPlay();
    };

    // On space event
    let playInSpace = true;
    let input = document.querySelector("input");

    input.addEventListener("focusin", () => (playInSpace = false));
    input.addEventListener("focusout", () => (playInSpace = true));

    document.addEventListener("keydown", (e) => {
      if (e.key === " " && playInSpace) {
        e.preventDefault();
        return musicPlay();
      }
    });
  };
  if (music_id) music();
}

/**
 * Setting Custom Cursor
 */
function useCustomCursor() {
  const cursor = document.querySelector("#cursor");

  // When cursor leaves the viewport
  document.addEventListener("mouseleave", () => {
    cursor.classList.add("cursor--hidden");
  });

  let mouseEvents = ["mouseenter", "mouseover"];
  mouseEvents.forEach((event) => {
    document.addEventListener(event, () => {
      cursor.classList.remove("cursor--hidden");
    });
  });

  // ---- TOP-LAYER FIX FOR <dialog> ----
  const moveCursorToTopLayer = () => {
    // Pick the most recently-opened dialog (last in DOM order with [open])
    const openDialogs = Array.from(document.querySelectorAll("dialog[open]"));
    const top = openDialogs.at(-1);

    if (top && cursor.parentNode !== top) {
      top.appendChild(cursor); // move cursor inside dialog -> enters top layer
    } else if (!top && cursor.parentNode !== document.body) {
      document.body.appendChild(cursor); // move back when no dialog is open
    }
  };

  // Patch dialog methods so the cursor is moved whenever dialogs open/close
  const proto = HTMLDialogElement.prototype;
  const _show = proto.show;
  const _showModal = proto.showModal;
  const _close = proto.close;

  proto.show = function (...args) {
    const r = _show.apply(this, args);
    moveCursorToTopLayer();
    return r;
  };
  proto.showModal = function (...args) {
    const r = _showModal.apply(this, args);
    moveCursorToTopLayer();
    return r;
  };
  proto.close = function (...args) {
    const r = _close.apply(this, args);
    moveCursorToTopLayer();
    return r;
  };

  // Also react if someone toggles the "open" attribute directly
  new MutationObserver(moveCursorToTopLayer).observe(document.documentElement, {
    subtree: true,
    attributes: true,
    attributeFilter: ["open"],
  });

  // Initial placement
  moveCursorToTopLayer();

  let reset_cursor = () => {
    cursor.classList.remove("cursor-pointer");
  };

  // This is where the cursor movement magic happens 🐰🎊
  let mouseX;
  let mouseY;
  const animateCursor = () => {
    // cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  };
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // requestAnimationFrame(animateCursor);
    animateCursor();
  });

  document.querySelectorAll("a, button, label, checkbox").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      reset_cursor();
      cursor.classList.add("cursor-pointer");
    });
    el.addEventListener("mouseleave", reset_cursor);
  });
}

/**
 * Used for showing the modal
 */
const modal = document.getElementById(`modal__start`);

function showModal() {
  modal.showModal();

  const proTips = [
    "Try pressing space on a page with a mini music",
    "Do alt + n if you're on desktop",
    "ESC to escape this menu",
    "I uh... forgot, what was it again?",
    "Dark theme is the coolest!",
  ];
  const randNum = Math.floor(Math.random() * proTips.length);
  const proTipSpan = document.getElementById("pro-tip");
  proTipSpan.innerHTML = proTips[randNum];
}

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.code === "KeyN") {
    e.preventDefault();
    return modal.open === false ? showModal() : modal.close();
  }
});
modal.addEventListener("close", () => (modal.open = false));

document.addEventListener("DOMContentLoaded", () => {
  useTime();
  useMusic();
  useCustomCursor();
});
