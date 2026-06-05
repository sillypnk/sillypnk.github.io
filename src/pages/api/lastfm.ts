export const prerender = false

export const GET = async () => {
	const res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Pumoreiichi&api_key=${import.meta.env.LASTFM_API_KEY}&format=json&limit=1`,
	)
	const data = await res.json()
	return new Response(JSON.stringify(data.recenttracks?.track?.[0] ?? null), {
		headers: { 'Content-Type': 'application/json' },
	})
}
