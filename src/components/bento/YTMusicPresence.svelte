<script lang="ts">
	// import { type Snippet } from "svelte";
  async function getTrack() {
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
  <!-- optional loading state -->
  {@render state_loading()}
{:then track}
    {@const isNowPlaying = track["@attr"]?.nowplaying === "true"}
    {@const art = track.image?.[2]?.["#text"]}
    {@const hasArt = art && !art.includes("2a96cbd8b46e442fc41c2b86b821562f")}

    <div class="art-album" style:background-image={hasArt ? `url(${track.image?.[3]?.["#text"]});` : undefined}>
	    <!-- <svg style="width: 15%; position: absolute; right: 0; top: 0; margin: 1rem; rotate: 10deg; opacity: 70%;" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="prefix__SVGRepo_iconCarrier"><style>.prefix__st95{fill:var(--clr-base-content)}</style><g id="prefix__Layer_2"><path class="prefix__st95" d="M50 2.5A47.56 47.56 0 0 0 2.5 50.13c2.5 63.17 92.5 63.15 95 0A47.56 47.56 0 0 0 50 2.5m0 74.9a27.3 27.3 0 0 1-27.27-27.27C23.47 31.47 37.38 23 50 23s26.53 8.47 27.27 27.07A27.3 27.3 0 0 1 50 77.4"/><path class="prefix__st95" d="M50 26.1c-15.94 0-23.7 12.49-24.16 24.1 0 13.25 10.84 24.1 24.16 24.1s24.16-10.85 24.16-24.17C73.71 38.59 65.95 26.11 50 26.1"/><path d="M41.06 52.53v10.46l21.8-13.42-21.8-12.3z" fill="#f1f1f1"/></g></g></svg> -->

	    <div class="lp-music">
		    {#if hasArt}
			    <div class="avatar">
					<div style="width: min(10.5rem, 30vw); border-radius: 0.5rem;">
						<img
							src={art}
							alt="{track.name} Album Art"
							loading="lazy"
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
		       					<span aria-label="now playing"></span> Now playing...
		         			{:else}
		                  		<span>Last Played...</span>
		              		{/if}
						</div>
						<span style="color: var(--clr-base); font-size: var(--text-base); font-weight: bold; letter-spacing: 2.5px;"
							>{track.name}</span
						>
					</div>
					<span style="color: light-dark(oklch(from var(--clr-secondary) calc(l + 0.4) c h), oklch(from var(--clr-primary) calc(l - 0.1) c h)); font-size: var(--text-sm);"
						>By {track.artist["#text"]}</span
					>
					<span style="color: light-dark(oklch(from var(--clr-secondary) calc(l + 0.4) c h), oklch(from var(--clr-primary) calc(l - 0.1) c h)); font-size: var(--text-sm);"
						>On {track.album["#text"]}</span
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
