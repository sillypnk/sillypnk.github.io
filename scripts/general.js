function useTheme() {
  const themeToggler = document.querySelector("#theme-toggler");
  const themeIcon = document.querySelector("#theme-icon");
  const root = document.documentElement;

  const toggleTheme = function () {
    let colorScheme = root.getAttribute("data-theme");

    if (colorScheme === "light") {
      themeIcon.innerHTML = `
						<svg style="width: 0.85em; margin-right: 4px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M10.5766 8.70419C11.2099 7.56806 11.5266 7 12 7C12.4734 7 12.7901 7.56806 13.4234 8.70419L13.5873 8.99812C13.7672 9.32097 13.8572 9.48239 13.9975 9.5889C14.1378 9.69541 14.3126 9.73495 14.6621 9.81402L14.9802 9.88601C16.2101 10.1643 16.825 10.3034 16.9713 10.7739C17.1176 11.2443 16.6984 11.7345 15.86 12.715L15.643 12.9686C15.4048 13.2472 15.2857 13.3865 15.2321 13.5589C15.1785 13.7312 15.1965 13.9171 15.2325 14.2888L15.2653 14.6272C15.3921 15.9353 15.4554 16.5894 15.0724 16.8801C14.6894 17.1709 14.1137 16.9058 12.9622 16.3756L12.6643 16.2384C12.337 16.0878 12.1734 16.0124 12 16.0124C11.8266 16.0124 11.663 16.0878 11.3357 16.2384L11.0378 16.3756C9.88634 16.9058 9.31059 17.1709 8.92757 16.8801C8.54456 16.5894 8.60794 15.9353 8.7347 14.6272L8.76749 14.2888C8.80351 13.9171 8.82152 13.7312 8.76793 13.5589C8.71434 13.3865 8.59521 13.2472 8.35696 12.9686L8.14005 12.715C7.30162 11.7345 6.88241 11.2443 7.02871 10.7739C7.17501 10.3034 7.78993 10.1643 9.01977 9.88601L9.33794 9.81402C9.68743 9.73495 9.86217 9.69541 10.0025 9.5889C10.1428 9.48239 10.2328 9.32097 10.4127 8.99812L10.5766 8.70419Z" fill="currentColor"></path> <path opacurrentcity="0.8" fill-rule="evenodd" currentclip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="currentColor"></path> <g opacurrentcity="0.5"> <path d="M18.5304 5.46967C18.8233 5.76256 18.8233 6.23744 18.5304 6.53033L18.1872 6.87359C17.8943 7.16648 17.4194 7.16648 17.1265 6.87359C16.8336 6.5807 16.8336 6.10583 17.1265 5.81293L17.4698 5.46967C17.7627 5.17678 18.2376 5.17678 18.5304 5.46967Z" fill="currentColor"></path> <path d="M5.46967 5.46979C5.76256 5.17689 6.23744 5.17689 6.53033 5.46979L6.87359 5.81305C7.16648 6.10594 7.16648 6.58081 6.87359 6.87371C6.5807 7.1666 6.10583 7.1666 5.81293 6.87371L5.46967 6.53045C5.17678 6.23755 5.17678 5.76268 5.46967 5.46979Z" fill="currentColor"></path> <path d="M6.87348 17.1266C7.16637 17.4195 7.16637 17.8944 6.87348 18.1873L6.53043 18.5303C6.23754 18.8232 5.76266 18.8232 5.46977 18.5303C5.17688 18.2375 5.17688 17.7626 5.46977 17.4697L5.81282 17.1266C6.10571 16.8337 6.58058 16.8337 6.87348 17.1266Z" fill="currentColor"></path> <path d="M17.1265 17.1269C17.4194 16.834 17.8943 16.834 18.1872 17.1269L18.5302 17.4699C18.8231 17.7628 18.8231 18.2377 18.5302 18.5306C18.2373 18.8235 17.7624 18.8235 17.4695 18.5306L17.1265 18.1875C16.8336 17.8946 16.8336 17.4198 17.1265 17.1269Z" fill="currentColor"></path> </g> </g></svg>
						`;
      return "dark";
    } else {
      themeIcon.innerHTML = `
							<svg
							style="width: 0.85em; margin-right: 4px"
							version="1.1"
							id="Icons"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 32 32"
							xml:space="preserve"
							fill="currentColor"
							stroke="currentColor"
							>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
							<style type="text/css">
							.st0 {
								fill: none;
								stroke: currentColor;
								stroke-width: 2;
								stroke-linecap: round;
								stroke-linejoin: round;
								stroke-miterlimit: 10;
							}
							
							.st1 {
								fill: none;
								stroke: currentColor;
								stroke-width: 2;
								stroke-linejoin: round;
								stroke-miterlimit: 10;
							}
							</style>
							<path
							class="st0"
							d="M17,5c-0.27,0-0.54,0.02-0.8,0.04C19.05,6.55,21,9.55,21,13c0,4.97-4.03,9-9,9c-2.74,0-5.19-1.23-6.85-3.17 C6.04,24.59,11,29,17,29c6.63,0,12-5.37,12-12S23.63,5,17,5z"
							></path>
							<g>
							<path
							class="st0"
							d="M11,9c-2.58,0.62-3.38,1.42-4,4c-0.62-2.58-1.42-3.38-4-4c2.58-0.62,3.38-1.42,4-4C7.62,7.58,8.42,8.38,11,9z"
							></path>
							</g>
							<line class="st0" x1="12" y1="14" x2="12" y2="16"></line>
							<line class="st0" x1="11" y1="15" x2="13" y2="15"></line>
							</g>
							</svg>
							`;
      return "light";
    }
  };

  themeToggler.addEventListener("click", () => {
    const theme = toggleTheme();
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  const colorScheme = document.documentElement.getAttribute("data-theme");

  if (colorScheme === "dark") {
    themeIcon.innerHTML = `
								<svg style="width: 0.85em; margin-right: 4px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M10.5766 8.70419C11.2099 7.56806 11.5266 7 12 7C12.4734 7 12.7901 7.56806 13.4234 8.70419L13.5873 8.99812C13.7672 9.32097 13.8572 9.48239 13.9975 9.5889C14.1378 9.69541 14.3126 9.73495 14.6621 9.81402L14.9802 9.88601C16.2101 10.1643 16.825 10.3034 16.9713 10.7739C17.1176 11.2443 16.6984 11.7345 15.86 12.715L15.643 12.9686C15.4048 13.2472 15.2857 13.3865 15.2321 13.5589C15.1785 13.7312 15.1965 13.9171 15.2325 14.2888L15.2653 14.6272C15.3921 15.9353 15.4554 16.5894 15.0724 16.8801C14.6894 17.1709 14.1137 16.9058 12.9622 16.3756L12.6643 16.2384C12.337 16.0878 12.1734 16.0124 12 16.0124C11.8266 16.0124 11.663 16.0878 11.3357 16.2384L11.0378 16.3756C9.88634 16.9058 9.31059 17.1709 8.92757 16.8801C8.54456 16.5894 8.60794 15.9353 8.7347 14.6272L8.76749 14.2888C8.80351 13.9171 8.82152 13.7312 8.76793 13.5589C8.71434 13.3865 8.59521 13.2472 8.35696 12.9686L8.14005 12.715C7.30162 11.7345 6.88241 11.2443 7.02871 10.7739C7.17501 10.3034 7.78993 10.1643 9.01977 9.88601L9.33794 9.81402C9.68743 9.73495 9.86217 9.69541 10.0025 9.5889C10.1428 9.48239 10.2328 9.32097 10.4127 8.99812L10.5766 8.70419Z" fill="currentColor"></path> <path opacurrentcity="0.8" fill-rule="evenodd" currentclip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="currentColor"></path> <g opacurrentcity="0.5"> <path d="M18.5304 5.46967C18.8233 5.76256 18.8233 6.23744 18.5304 6.53033L18.1872 6.87359C17.8943 7.16648 17.4194 7.16648 17.1265 6.87359C16.8336 6.5807 16.8336 6.10583 17.1265 5.81293L17.4698 5.46967C17.7627 5.17678 18.2376 5.17678 18.5304 5.46967Z" fill="currentColor"></path> <path d="M5.46967 5.46979C5.76256 5.17689 6.23744 5.17689 6.53033 5.46979L6.87359 5.81305C7.16648 6.10594 7.16648 6.58081 6.87359 6.87371C6.5807 7.1666 6.10583 7.1666 5.81293 6.87371L5.46967 6.53045C5.17678 6.23755 5.17678 5.76268 5.46967 5.46979Z" fill="currentColor"></path> <path d="M6.87348 17.1266C7.16637 17.4195 7.16637 17.8944 6.87348 18.1873L6.53043 18.5303C6.23754 18.8232 5.76266 18.8232 5.46977 18.5303C5.17688 18.2375 5.17688 17.7626 5.46977 17.4697L5.81282 17.1266C6.10571 16.8337 6.58058 16.8337 6.87348 17.1266Z" fill="currentColor"></path> <path d="M17.1265 17.1269C17.4194 16.834 17.8943 16.834 18.1872 17.1269L18.5302 17.4699C18.8231 17.7628 18.8231 18.2377 18.5302 18.5306C18.2373 18.8235 17.7624 18.8235 17.4695 18.5306L17.1265 18.1875C16.8336 17.8946 16.8336 17.4198 17.1265 17.1269Z" fill="currentColor"></path> </g> </g></svg>
								`;
  } else {
    themeIcon.innerHTML = `
									<svg
									style="width: 0.85em; margin-right: 4px"
									version="1.1"
									id="Icons"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 32 32"
									xml:space="preserve"
									fill="currentColor"
									stroke="currentColor"
									>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
									<style type="text/css">
									.st0 {
										fill: none;
										stroke: currentColor;
										stroke-width: 2;
										stroke-linecap: round;
										stroke-linejoin: round;
										stroke-miterlimit: 10;
									}
									
									.st1 {
										fill: none;
										stroke: currentColor;
										stroke-width: 2;
										stroke-linejoin: round;
										stroke-miterlimit: 10;
									}
									</style>
									<path
									class="st0"
									d="M17,5c-0.27,0-0.54,0.02-0.8,0.04C19.05,6.55,21,9.55,21,13c0,4.97-4.03,9-9,9c-2.74,0-5.19-1.23-6.85-3.17 C6.04,24.59,11,29,17,29c6.63,0,12-5.37,12-12S23.63,5,17,5z"
									></path>
									<g>
									<path
									class="st0"
									d="M11,9c-2.58,0.62-3.38,1.42-4,4c-0.62-2.58-1.42-3.38-4-4c2.58-0.62,3.38-1.42,4-4C7.62,7.58,8.42,8.38,11,9z"
									></path>
									</g>
									<line class="st0" x1="12" y1="14" x2="12" y2="16"></line>
									<line class="st0" x1="11" y1="15" x2="13" y2="15"></line>
									</g>
									</svg>
									`;
  }
}

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
  if (now_playing_img) {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      now_playing_img.style = `max-width: 100%; mix-blend-mode: lighten; filter: invert(100%);`;
    } else {
      now_playing_img.style = `max-width: 100%; mix-blend-mode: darken;`;
    }
  }
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
  const cursor = document.createElement("div");
  cursor.classList.add("cursor", "cursor--hidden");
  document.body.appendChild(cursor);

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
    modal.open === false ? showModal() : modal.close();

    const sfx_two = new Audio("../public/media/audio/umamusume_sfx_01.mp3");
    sfx_two.play();
    sfx_two.currentTime = 0.2;
  }
});
if (modal) {
  modal.addEventListener("close", () => (modal.open = false));
}

document.addEventListener("DOMContentLoaded", () => {
  useTime();
  useMusic();
  useCustomCursor();
  useTheme();

  const sfx_two = new Audio("../public/media/audio/umamusume_sfx_01.mp3");
  const sfx_one = new Audio("../public/media/audio/umamusume_sfx_02.mp3");
  document.querySelectorAll(".startmenu__list li").forEach((menuList) => {
    menuList.addEventListener("mouseover", () => {
      sfx_one.play();
      sfx_one.currentTime = 0.2;
    });
    menuList.addEventListener("mouseleave", () => {
      sfx_one.pause();
      sfx_one.currentTime = 0;
    });
  });

  document.querySelector("div.modal__action button").addEventListener("click", () => {
    sfx_two.play();
    sfx_two.currentTime = 0.2;
  });

  document.querySelector("button.taskbar__menu").addEventListener("click", () => {
    sfx_two.play();
    sfx_two.currentTime = 0.2;
  });
});
