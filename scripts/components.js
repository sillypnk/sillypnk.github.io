class StartMenu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
            <style>
 .modal {
  display: grid;
  grid-template-columns: 1fr min(31rem, 100%) 1fr;
  grid-template-rows: 1fr min(33rem, 100%) 1fr;

  position: fixed;
  inset: 0;
  margin: 0;
  height: 100%;
  max-height: none;
  width: 100%;
  max-width: none;
  overflow: hidden;
  z-index: 1000;
  overscroll-behavior: contain;
  border: none;

  background: transparent;
  padding: 0;
  color: inherit;

  pointer-events: none;
  visibility: hidden;
  transition:
    translate 0.3s ease-out,
    visibility 0.3s allow-discrete,
    background-color 0.3s ease-out,
    opacity 0.1s ease-out;

  &::backdrop {
    display: hidden;
  }

  &[open],
  &:target {
    pointer-events: auto;
    visibility: visible;
    opacity: 100%;
    background-color: oklch(from var(--clr-base-content) l c h / 0.32);

    .modal__content {
      transform: translateY(0);
      translate: 0 0;
      opacity: 1;
    }

    @starting-style {

      &[open],
      &:target {
        visibility: hidden;
        opacity: 0;
      }
    }
  }

  .modal__action {
    margin-top: 0.2rem;
  }

  .modal__content {
    transition:
      translate 0.3s ease-out,
      transform 1.3s linear(0,
        0.029 1.6%,
        0.123 3.5%,
        0.651 10.6%,
        0.862 14.1%,
        1.002 17.7%,
        1.046 19.6%,
        1.074 21.6%,
        1.087 23.9%,
        1.086 26.6%,
        1.014 38.5%,
        0.994 46.3%,
        1),
      box-shadow 0.3s ease-out;
    will-change: transform;
    grid-column: 2;
    grid-row: 2;
    transform: translateY(100vh);
    border-radius: 0.5rem;
    background-color: var(--clr-white);
    border: 1px solid var(--clr-base-content);
    color: var(--clr-base-content);
    max-height: 100vh;
    width: 91.66%;
    z-index: 2000;
    max-width: 32rem;
    overflow-y: auto;
    overscroll-behavior: contain;
    font-size: 1.5rem;
  }
}

.startmenu__list {
  position: relative;
  list-style: none;
  height: 100%;
  font-size: 1rem;

  >a {
    text-decoration: none !important;
  }

  >a:checked,
  >a:visited,
  >a:any-link {
    color: oklch(from var(--clr-base-content) l c h / 0.266);
  }

  a>li {
    border-bottom: 1px solid var(--clr-base-content);
    color: var(--clr-base-content);
    display: flex;
    align-items: center;
    vertical-align: middle;
    padding-block: 0.59rem;
    padding-left: 1rem;
    transition:
      background 0.2s ease-in-out,
      color 0.5s ease-out;

    &:hover {
      background-color: var(--clr-base-content);
      color: var(--clr-base);

      &:after {
        background-color: var(--clr-base);
      }
    }

    &:after {
      content: "";
      mask: url("/public/icons/arrow_right.svg") no-repeat;
      mask-size: cover;
      background-color: var(--clr-base-content);
      width: 1.5em;
      height: 1.5em;
      position: absolute;
      right: 1em;
    }
  }

  a:last-child>li {
    border-bottom: none;
  }
} 
            </style>

  <dialog id="modal__start" class="modal">
    <div class="modal__content" style="height: 32rem; width: 32rem">
      <div class="modal__action">
        <form method="dialog">
          <h2>START MENU</h2>
          <button class="btn" style="margin-left: auto; color: inherit; background: transparent; border: none;">
            <svg fill="currentColor" style="width: 2.5em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_icurrentColoronCarrier">
                <g>
                  <g>
                    <polygon
                      points="365.714,231.619 365.714,195.048 402.286,195.048 402.286,158.476 438.857,158.476 438.857,121.905 475.429,121.905 475.429,85.333 512,85.333 512,36.571 475.429,36.571 475.429,0 426.667,0 426.667,36.571 390.095,36.571 390.095,73.143 353.524,73.143 353.524,109.714 316.952,109.714 316.952,146.286 280.381,146.286 280.381,182.857 231.619,182.857 231.619,146.286 195.048,146.286 195.048,109.714 158.476,109.714 158.476,73.143 121.905,73.143 121.905,36.571 85.333,36.571 85.333,0 36.571,0 36.571,36.571 0,36.571 0,85.333 36.571,85.333 36.571,121.905 73.143,121.905 73.143,158.476 109.714,158.476 109.714,195.048 146.286,195.048 146.286,231.619 182.857,231.619 182.857,280.381 146.286,280.381 146.286,316.952 109.714,316.952 109.714,353.524 73.143,353.524 73.143,390.095 36.571,390.095 36.571,426.667 0,426.667 0,475.429 36.571,475.429 36.571,512 85.333,512 85.333,475.429 121.905,475.429 121.905,438.857 158.476,438.857 158.476,402.286 195.048,402.286 195.048,365.714 231.619,365.714 231.619,329.143 280.381,329.143 280.381,365.714 316.952,365.714 316.952,402.286 353.524,402.286 353.524,438.857 390.095,438.857 390.095,475.429 426.667,475.429 426.667,512 475.429,512 475.429,475.429 512,475.429 512,426.667 475.429,426.667 475.429,390.095 438.857,390.095 438.857,353.524 402.286,353.524 402.286,316.952 365.714,316.952 365.714,280.381 329.143,280.381 329.143,231.619 ">
                    </polygon>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <div style="
            display: grid;
            grid-template-columns: 13rem auto;
            grid-template-rows: 22rem auto;
          ">
        <div style="
              grid-row: 1;
              grid-column: 1;
              justify-content: center;
              text-align: center;
              border-right: 1px solid var(--clr-base-content);
              border-bottom: 1px solid var(--clr-base-content);
              border-top: 1px solid var(--clr-base-content);
              padding-top: 15px;
            ">
          <div class="avatar" style="margin-bottom: 2rem">
            <div style="
                  width: 8rem;
                  border-radius: 50em;
                  outline: 1px solid var(--clr-base-content);
                  outline-offset: 2px;
                ">
              <img src="/public/media/avatar.jpg" style="width: 140%; height: 140%; object-position: -2em -10px"
                alt="An avatar for the dialog" />
            </div>
          </div>
          <h4>PUMOREIICHI</h4>
          <p style="
                font-size: 0.6em;
                padding-left: 2rem;
                text-align: left;
                font-style: italic;
              ">
            OS: AdachiOS
            <br />
            Version: 1.0.0
            <br />
            Host: Github Pages
            <br />
            Processor: Vanilla
            <br />
            Since: August
          </p>
        </div>
        <div style="
              grid-row: 1;
              grid-column: 2;
              border-bottom: 1px solid var(--clr-base-content);
              border-top: 1px solid var(--clr-base-content);
            ">
          <ul class="startmenu__list">
            <a href="/pumoreiichi.vanilla/">
              <li>Home</li>
            </a><a href="/pumoreiichi.vanilla/pages/about.html">
              <li>About</li>
            </a><a href="/pumoreiichi.vanilla/pages/gallery.html">
              <li>Gallery</li>
            </a><a href="/pumoreiichi.vanilla/pages/blog.html">
              <li>Blog</li>
            </a><a href="/pumoreiichi.vanilla/pages/microblog.html">
              <li>Microblog</li>
            </a><a href="/pumoreiichi.vanilla/pages/projects.html">
              <li>Projects</li>
            </a><a href="/pumoreiichi.vanilla/pages/resources.html">
              <li>Resources</li>
            </a><a href="/pumoreiichi.vanilla/pages/resume.html">
              <li>Resume</li>
            </a>
          </ul>
        </div>
        <div style="
              display: flex;
              align-items: center;
              min-height: 100%;
              grid-row: 2;
              grid-column: 1 / 3;
              margin-inline: 2rem;
            ">
          <div>
            <svg style="
                  vertical-align: middle;
                  width: 0.7em;
                  color: var(--clr-base-content);
                  margin-right: 6px;
                " fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362.027 362.027" xml:space="preserve"
              stroke="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M181.014,68.957c-56.864,0-103.127,46.263-103.127,103.127c0,19.826,5.642,39.084,16.316,55.69 c7.799,12.132,17.992,22.433,29.904,30.321c-4.212,4.332-6.812,10.236-6.812,16.74c0,6.402,2.521,12.223,6.616,16.535 c-4.095,4.313-6.616,10.133-6.616,16.535c0,13.253,10.782,24.035,24.035,24.035h3.155v3.228c0,15.061,15.644,26.857,35.615,26.857 h1.828c19.971,0,35.614-11.797,35.614-26.857v-3.228h3.155c13.254,0,24.035-10.782,24.035-24.035 c0-6.402-2.521-12.223-6.615-16.535c4.095-4.313,6.615-10.133,6.615-16.535c0-6.51-2.606-12.42-6.823-16.752 c11.913-7.888,22.116-18.176,29.915-30.31c10.674-16.606,16.316-35.864,16.316-55.69 C284.141,115.22,237.878,68.957,181.014,68.957z M202.542,335.17c0,5.608-8.466,11.857-20.614,11.857H180.1 c-12.148,0-20.615-6.249-20.615-11.857v-3.228h43.058V335.17z M220.697,316.941H141.33c-4.982,0-9.035-4.053-9.035-9.035 c0-4.982,4.053-9.035,9.035-9.035h79.368c4.982,0,9.035,4.053,9.035,9.035C229.733,312.889,225.68,316.941,220.697,316.941z M220.697,283.871H141.33c-4.982,0-9.035-4.053-9.035-9.035c0-4.983,4.053-9.035,9.035-9.035h79.368 c4.982,0,9.035,4.053,9.035,9.035C229.733,279.818,225.68,283.871,220.697,283.871z M163.647,197.205h34.734 c-7.839,18.796-12.217,42.332-14,53.596h-6.734C175.862,239.525,171.481,215.992,163.647,197.205z M220.649,250.801H199.59 c2.306-13.774,7.814-41.184,17.273-57.299c1.361-2.319,1.377-5.189,0.041-7.523c-1.336-2.334-3.82-3.773-6.509-3.773h-58.764 c-2.689,0-5.172,1.439-6.508,3.773c-1.337,2.333-1.321,5.204,0.04,7.522c9.444,16.091,14.961,43.519,17.27,57.3h-21.055 c-29.513-14.898-48.492-45.588-48.492-78.717c0-48.594,39.534-88.127,88.127-88.127c48.594,0,88.127,39.533,88.127,88.127 C269.141,205.212,250.162,235.902,220.649,250.801z">
                    </path>
                    <g>
                      <g>
                        <path
                          d="M181.014,47.08c-4.143,0-7.5-3.357-7.5-7.5V7.5c0-4.143,3.357-7.5,7.5-7.5c4.143,0,7.5,3.357,7.5,7.5v32.08 C188.514,43.723,185.156,47.08,181.014,47.08z">
                        </path>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M85.372,86.729c-1.919,0-3.839-0.732-5.303-2.196L57.385,61.849c-2.929-2.93-2.929-7.678,0-10.607 c2.929-2.928,7.678-2.928,10.606,0l22.684,22.684c2.929,2.93,2.929,7.678,0,10.607C89.211,85.996,87.291,86.729,85.372,86.729z ">
                          </path>
                        </g>
                        <g>
                          <path
                            d="M276.672,86.713c-1.92,0-3.84-0.732-5.304-2.196c-2.929-2.93-2.929-7.678,0-10.607l22.684-22.684 c2.929-2.928,7.678-2.928,10.606,0c2.93,2.93,2.93,7.678,0,10.607l-22.684,22.684C280.51,85.98,278.591,86.713,276.672,86.713z ">
                          </path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M46.619,174.916H14.541c-4.142,0-7.5-3.357-7.5-7.5c0-4.143,3.358-7.5,7.5-7.5h32.079c4.142,0,7.5,3.357,7.5,7.5 C54.119,171.559,50.761,174.916,46.619,174.916z">
                          </path>
                        </g>
                        <g>
                          <path
                            d="M347.487,174.916h-32.079c-4.142,0-7.5-3.357-7.5-7.5c0-4.143,3.358-7.5,7.5-7.5h32.079c4.142,0,7.5,3.357,7.5,7.5 C354.987,171.559,351.629,174.916,347.487,174.916z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p style="display: inline-flex; font-size: 0.8rem">
              <span id="pro-tip"></span>
            </p>
          </div>

          <div style="margin-left: auto; padding-top: 8px">
            <svg style="width: 0.85em; margin-right: 5px" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M18.364 8.05026L17.6569 7.34315C14.5327 4.21896 9.46734 4.21896 6.34315 7.34315C3.21895 10.4673 3.21895 15.5327 6.34315 18.6569C9.46734 21.7811 14.5327 21.7811 17.6569 18.6569C19.4737 16.84 20.234 14.3668 19.9377 12.0005M18.364 8.05026H14.1213M18.364 8.05026V3.80762"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <svg style="width: 0.85em; margin-right: 4px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="currentColor"
              stroke="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
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
                <path class="st0"
                  d="M17,5c-0.27,0-0.54,0.02-0.8,0.04C19.05,6.55,21,9.55,21,13c0,4.97-4.03,9-9,9c-2.74,0-5.19-1.23-6.85-3.17 C6.04,24.59,11,29,17,29c6.63,0,12-5.37,12-12S23.63,5,17,5z">
                </path>
                <g>
                  <path class="st0"
                    d="M11,9c-2.58,0.62-3.38,1.42-4,4c-0.62-2.58-1.42-3.38-4-4c2.58-0.62,3.38-1.42,4-4C7.62,7.58,8.42,8.38,11,9z">
                  </path>
                </g>
                <line class="st0" x1="12" y1="14" x2="12" y2="16"></line>
                <line class="st0" x1="11" y1="15" x2="13" y2="15"></line>
              </g>
            </svg>
            <svg style="width: 0.8em" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.462 482.462" xml:space="preserve"
              stroke="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <rect x="231.385" width="19.692" height="245.199"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M287.038,47.534l-4.086,19.26C374.76,86.26,441.394,168.611,441.394,262.606c0,110.37-89.793,200.163-200.163,200.163 S41.067,372.976,41.067,262.606c0-94,66.639-176.351,158.452-195.813l-4.087-19.264C94.577,68.909,21.375,159.361,21.375,262.606 c0,121.231,98.625,219.856,219.856,219.856s219.856-98.625,219.856-219.856C461.087,159.365,387.889,68.913,287.038,47.534z">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </dialog>
        `;
  }
}

customElements.define("start-menu", StartMenu);
