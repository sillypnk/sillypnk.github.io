import { randomInt } from "./rand.js";
import { getRelativeTimeString } from "./getRelativeTimeString.js";
import { MICROBLOGS as microblogsData } from "./microblogsData.js";

const microblogsContainer = document.querySelector("#microblogs");

// Sorting out the date first
microblogsData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Loop through the microblog data and put it in each card
microblogsData.forEach((microblog) => {
  let templateHasGallery = "";
  if (microblog.images)
    templateHasGallery = `
      <div class="post__images">
        ${microblog.images.map((img) => `<img src='${img.src}'/>`)}
      </div>
    `;

  let comments = randomInt(100, 1000);
  let hearts = randomInt(100, 5000);
  let reposts = randomInt(100, 1000);
  let views = randomInt(500, 8000);

  const templatePost = `<div
            class="card"
            style="width: 33rem; height: auto; position: static;"
          >
            <div class="card__content" style="padding-inline: 2em; padding-block: 1.5em;">
              <div style="display: flex; align-items: center; vertical-align: middle; gap: 0.7rem">
                <div class="avatar">
                  <div
                    style="
                      width: 3.4rem;
                      border-radius: 30em;
                      outline: 1px solid var(--clr-base-content);
                      outline-offset: 2px;
                    "
                  >
                  <picture>
                      <!-- Fallbacks -->
                      <source srcset="../public/media/avatar.webp" type="image/webp" />
                      <source srcset="../public/media/avatar.jpg" type="image/jpeg" />
                      <img src="../public/media/avatar.jpg" style="
                          width: 145%;
                          height: 145%;
                          object-position: -1.07em -5px;
                          " alt="Avatar Image" />
                    </picture>
                  </div>
                </div>
                <div style="display: block">
                  <span style="font-size: 1.3rem; line-height: 2px;">James Pendon</span>
                  <span style="display: block; font-size: 1rem; color: grey"
                    >@pumoreiichi</span
                  >
                </div>
                <div style="margin-left: auto; color: var(--clr-secondary);">
                  <svg style="width: 23px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="currentColor" stroke-width="2" stroke-linecurrentcap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
              </div>

              <div
                style="
                  display: block;
                  margin-top: 0.8rem;
                  margin-inline: 5px;
                  color: light-dark(var(--clr-secondary), var(--clr-base));
                "
              >
                <p style="line-height: 21px; margin-block: 10px; letter-spacing: 0.6px;">${microblog.content}</p>
                <div style="display: block; margin-block: 5px; font-size: 0.7rem; color: grey; text-rendering: geometricPrecision;">
                  ${getRelativeTimeString(new Date(microblog.date))} - ${new Date(microblog.date).toLocaleString(navigator.language, { dateStyle: "short" })}
                </div>
                <div>
                    ${microblog.tags ? microblog.tags.map((tag) => `<span class="link" style="display: inline;">#${tag}</span>`).join(" ") : ""}
                </div>
              <div style="
                --_divider-color: light-dark(oklch(0.7448 0 0), oklch(0.3264 0 0));
                --_divider-m: -20px 0;
              " class="divider"></div>
              <div class="post__action">
                <div>
                  <button title="Comment">
                    <svg style="width: 15px;" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_icurrentColoronCarrier">
                        <path fill-rule="evenodd" currentclip-rule="evenodd"
                          d="M16.1266 22.1995C16.7081 22.5979 17.4463 23.0228 18.3121 23.3511C19.9903 23.9874 21.244 24.0245 21.8236 23.9917C23.1167 23.9184 23.2907 23.0987 22.5972 22.0816C21.8054 20.9202 21.0425 19.6077 21.1179 18.1551C22.306 16.3983 23 14.2788 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C13.4578 23 14.8513 22.7159 16.1266 22.1995ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.3697 21 14.6654 20.6947 15.825 20.1494C16.1635 19.9902 16.5626 20.0332 16.8594 20.261C17.3824 20.6624 18.1239 21.1407 19.0212 21.481C19.4111 21.6288 19.7674 21.7356 20.0856 21.8123C19.7532 21.2051 19.4167 20.4818 19.2616 19.8011C19.1018 19.0998 18.8622 17.8782 19.328 17.2262C20.3808 15.7531 21 13.9503 21 12C21 7.02944 16.9706 3 12 3Z"
                          fill="currentColor"></path>
                      </g>
                    </svg>
                  </button>
                    <span>${comments > 1000
      ? comments.toString().slice(0, 1) + "k"
      : comments
    }</span>
                  </div>
                <div>
                  <button title="Repost">
                    <svg style="width: 20px;" viewBox="0 0 24 24" id="_24x24_On_Light_Repeat" data-name="24x24/On Light/Repeat" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <recurrentct id="view-box" width="24" height="24" fill="none"></recurrentct> <path id="Shape" d="M10.22,17.28a.75.75,0,0,1,0-1.06l1.72-1.72H5.75A5.757,5.757,0,0,1,0,8.75a.75.75,0,0,1,1.5,0A4.254,4.254,0,0,0,5.75,13h6.188L10.22,11.281a.75.75,0,0,1,1.061-1.061l3,3a.75.75,0,0,1,0,1.06l-3,3a.75.75,0,0,1-1.061,0ZM16,8.75A4.255,4.255,0,0,0,11.75,4.5H5.56L7.28,6.22A.75.75,0,0,1,6.22,7.28l-3-3a.751.751,0,0,1,0-1.061l3-3A.75.75,0,0,1,7.28,1.281L5.561,3H11.75A5.756,5.756,0,0,1,17.5,8.75a.75.75,0,0,1-1.5,0Z" transform="translate(3.25 3.25)" fill="currentColor"></path> </g></svg>
                  </button>
                  <span>${reposts > 1000
      ? reposts.toString().slice(0, 1) + "k"
      : reposts
    }</span>
                </div>
                <div style="--hovered-btn: oklch(0.6426 0.2557 7 / 96.76%);">
                  <button title="Like">
                    <svg style="width: 20px; color: oklch(0.6426 0.2557 7 / 96.76%);" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="currentColor"></path> </g></svg>
                  </button>
                  <span>${hearts > 1000 ? hearts.toString().slice(0, 1) + "k" : hearts}</span>
                </div>
                <div>
                  <button title="Views">
                    <svg style="width: 25px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="currentColor" d="M9.037,40.763h4.286c0.552,0,1-0.447,1-1v-7.314c0-0.553-0.448-1-1-1H9.037c-0.552,0-1,0.447-1,1v7.314 C8.037,40.315,8.485,40.763,9.037,40.763z M10.037,33.448h2.286v5.314h-2.286V33.448z"></path> <path fill="currentColor" d="M21.894,40.763c0.552,0,1-0.447,1-1v-20.64c0-0.553-0.448-1-1-1h-4.286c-0.552,0-1,0.447-1,1v20.64 c0,0.553,0.448,1,1,1H21.894z M18.608,20.123h2.286v18.64h-2.286V20.123z"></path> <path fill="currentColor" d="M30.465,40.763c0.552,0,1-0.447,1-1V25.96c0-0.553-0.448-1-1-1H26.18c-0.552,0-1,0.447-1,1v13.803 c0,0.553,0.448,1,1,1H30.465z M27.18,26.96h2.286v11.803H27.18V26.96z"></path> <path fill="currentColor" d="M33.751,9.763v30c0,0.553,0.448,1,1,1h4.286c0.552,0,1-0.447,1-1v-30c0-0.553-0.448-1-1-1h-4.286 C34.199,8.763,33.751,9.21,33.751,9.763z M35.751,10.763h2.286v28h-2.286V10.763z"></path> </g></svg>
                  </button>
                  <span>${views > 1000 ? views.toString().slice(0, 1) + "k" : views}</span>
                </div>
                <div style="margin-left: auto; margin-right: 0; --hovered-btn: oklch(0.8754 0.1776 99);">
                  <button title="Bookmark">
                    <img style="width: 25px;" src="../public/icons/bookmark.svg" alt="" />
                  </button>
                </div>
                <div style="margin-right: 0;">
                  <button title="Share Post">
                    <svg style="width: 17px;" viewBox="0 -2 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <title>upload</title> <descurrentc>Created with SketcurrentColorh Beta.</descurrentc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketcurrentch:type="MSPage"> <g id="IcurrentColoron-Set" sketcurrentch:type="MSLayerGroup" transform="translate(-569.000000, -674.000000)" fill="currentColor"> <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 L579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 L598,690 Z" id="upload" sketcurrentch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>`;
  const postContainer = document.createElement("section");
  postContainer.innerHTML = templatePost;
  microblogsContainer.appendChild(postContainer);
});
