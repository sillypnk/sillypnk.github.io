export const prerender = false

const BLANK_ART = '2a96cbd8b46e442fc41c2b86b821562f'

/**
 * It should default to LastFM's Album.
 * Otherwise, falls into other sources to fetch for.
 * If it fails, it shows a fallback instead.
 */
async function getAlbumArt(
	artist: string,
	track: string,
	album: string,
	lastfmUrl: string,
) {
	if (lastfmUrl && !lastfmUrl.includes(BLANK_ART)) return lastfmUrl

	try {
		const query = encodeURIComponent(`${artist} ${album || track}`)
		const res = await fetch(
			`https://itunes.apple.com/search?term=${query}&media=music&limit=1`,
		)
		const data = await res.json()
		const art = data.results?.[0]?.artworkUrl100
		if (art) return art.replace('100x100bb', '600x600bb')
	} catch {
		return
	}

	return null
}

export const GET = async () => {
	try {
		const USERNAME = 'Pumoreiichi'
		const API_KEY = import.meta.env.LASTFM_API_KEY

		const res = await fetch(
			`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`,
		)
		const data = await res.json()
		const track = data.recenttracks?.track?.[0] ?? null

		if (!track) return new Response(JSON.stringify(null), { status: 200 })

		const art = await getAlbumArt(
			track.artist['#text'],
			track.name,
			track.album['#text'],
			track.image?.[4]?.['#text'] || track.image?.[3]?.['#text'],
		)

		return new Response(
			JSON.stringify({
				title: track.name,
				artist: track.artist['#text'],
				album: track.album['#text'],
				art,
				isNowPlaying: track['@attr']?.nowplaying === 'true',
			}),
			{
				headers: { 'Content-Type': 'application/json' },
			},
		)
	} catch {
		return new Response(JSON.stringify(null), { status: 500 })
	}
}
