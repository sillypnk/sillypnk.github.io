<script lang="ts">
	interface Track {
		title: string;
		artist: string;
		album: string;
		art: string | undefined;
		isNowPlaying: boolean;
	};

	async function getTrack(): Promise<Track> {
    const res = await fetch(
      `${window.location.origin}/api/lastfm`
    );
    const data = await res.json();
    return data
  }

  let track = getTrack();
  const { children, state_loading } = $props()
</script>

{#await track}
  {@render state_loading()}
{:then track}
    {@const isNowPlaying = track.isNowPlaying}
    {@const art = track.art}

    <div class="art-album" style:background-image={art ? `url(${art});` : undefined}>
	    <div class="lp-music">
		    {#if art}
			    <div class="avatar">
					<div style="width: min(10.5rem, 30vw); border-radius: 0.5rem;">
						<img
							src={art}
							alt="{track.title} Album Art"
							loading="eager"
							decoding="async"
						/>
					</div>
				</div>
			{:else}
				<div class="avatar">
					<div class="u-group--flex items--centered" style="background: var(--clr-secondary); color: var(--clr-primary); width: min(10.5rem, 30vw); border-radius: 0.5rem;">
						{@render children?.()}
					</div>
				</div>
			{/if}
				<div
					style="display: flex; flex-direction: column; justify-content: center;"
				>
					<div
						style="line-height: 1.5rem;"
					>
						<div class="u-group--flex" style="gap: 5px; font-size: var(--text-xs); color: var(--clr-primary); ">
							<svg style="width: var(--text-xs);" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2.83 8.33v7.34m4.59-11v14.66m13.75-11v7.34m-4.59-11v14.66M12 1v22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.83"/></svg>

							{#if isNowPlaying}
		       					<span aria-label="now playing"></span> Now Listening...
		         			{:else}
		                  		<span>Last Played...</span>
		              		{/if}
						</div>
						<span style="color: var(--clr-base); font-size: var(--text-base); font-weight: bold; letter-spacing: 2.5px;"
							>{track.title}</span
						>
					</div>
					<span style="color: light-dark(oklch(from var(--clr-secondary) calc(l + 0.4) c h), oklch(from var(--clr-primary) calc(l - 0.1) c h)); font-size: var(--text-sm);"
						>By {track.artist}</span
					>
					<span style="color: light-dark(oklch(from var(--clr-secondary) calc(l + 0.4) c h), oklch(from var(--clr-primary) calc(l - 0.1) c h)); font-size: var(--text-sm);"
						>On {track.album}</span
					>
			</div>
		</div>
    </div>
{:catch track}
	<!-- {@render state_error()} -->
{/await}

<style>
	.art-album {
		position: relative;
		background-size: cover;
		background-position: top center;
	 	background-repeat: no-repeat;
		height: 100%;
	 	width: 100%;
		overflow: hidden;
	}
		.lp-music {
			overflow: auto;
			display: flex;
			isolation: isolate;
			/*grid-template-rows: repeat(2, 1fr);
			grid-template-columns: repeat(2, 1fr);*/
			gap: 30px;
			inline-size: 100%;
			block-size: 100%;
			align-items: center;

			padding-block: 0.8rem;
			padding-inline: 0.8em;
			background-color: inherit;

		    background: linear-gradient(
		        to top,
		        var(--clr-secondary) 0%,
		        color-mix(in srgb, var(--clr-secondary) 80%, transparent) 25%,
		        color-mix(in srgb, var(--clr-secondary) 40%, transparent) 50%,
		        transparent 75%
		    );

		    backdrop-filter: brightness(60%);

			& > .avatar {
				pointer-events: none;
			}

			@container card (max-width: 25rem) {
				flex-direction: column;
				align-items: unset;
				gap: 8px;
			}
		}
</style>
