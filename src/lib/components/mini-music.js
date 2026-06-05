import MiniMusicIcon from '../../assets/media/musical-notes.gif'

import sharedCSS from '../../styles.css?inline'

class PumoMiniMusic extends HTMLElement {
    /**
     * @type {HTMLAudioElement}
     */
    audio

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.#render()
    }

    #render() {
        return (this.shadowRoot.innerHTML = `
				<article
					class="card"
					style="width: 15rem; margin-block: 1.2rem"
				>
					<div
						class="card__content"
						style="padding: 0; display: flex; align-items: center"
					>
						<div id="music" class="music-btn">
							<img
								id="is-playing-img"
								src="${MiniMusicIcon}"
								alt="Musical Note"
								style="max-width: 100%; mix-blend-mode: darken"
							/>
						</div>
						<div class="scroll-container">
							<span class="animate-scroll"
								>Friday Theme - uglyburger0<span
									id="is-playing"
								></span
							></span>
						</div>
					</div>
				</article>
`)
    }

    connectedCallback() {
        // Debugging
        console.log(
            '%c[PumoComponents]:',
            'background-color: orange; color: black; font-weight: bold; padding: 0.5em; border-radius: 5px;',
            'pumo-minimusic is successfully connected!',
        )

        // Initializing other stuff
        this.#setStyleSheets()

        this.audio = document.querySelector('#minimusic-audio')

        this.#handlePlayer()
    }

    #handlePlayer() {
        /**
         * @type {HTMLElement}
         */
        const musicBtn = this.shadowRoot.querySelector('.music-btn')
        let isAudioPlaying = false

        musicBtn.addEventListener('click', () => {
            if (!isAudioPlaying) {
                this.audio.play()
                isAudioPlaying = true
            } else {
                isAudioPlaying = false
                this.audio.pause()
            }
        })
    }

    // This will inject the stylesheets to the shadow DOM
    #setStyleSheets() {
        const sharedSheet = new CSSStyleSheet()
        sharedSheet.replace(sharedCSS)

        // Add some component styles here if you want
        // const componentSheet = new CSSStyleSheet()
        // componentSheet.replaceSync()
        this.shadowRoot.adoptedStyleSheets = [sharedSheet]
    }
}

customElements.define('pumo-minimusic', PumoMiniMusic)
