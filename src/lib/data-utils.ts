import { getCollection, render, type CollectionEntry } from 'astro:content'

export async function getAllMicroblogs(): Promise<
	CollectionEntry<'microblogs'>[]
> {
	const microblogs = await getCollection('microblogs')
	return microblogs.sort((a, b) => {
		const aDate = a.data.updatedDate ?? a.data.date
		const bDate = b.data.updatedDate ?? b.data.date
		return bDate.valueOf() - aDate.valueOf()
	})
}

export async function getPinnedMicroblog(): Promise<CollectionEntry<'microblogs'> | null> {
	const microblogs = await getCollection('microblogs')
	return microblogs.find(microblog => microblog.data.pinned) ?? null
}

export async function getRecentMicroblog(): Promise<
	CollectionEntry<'microblogs'>
> {
	const microblogs = await getCollection('microblogs')
	microblogs.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
	return microblogs[0]
}

export async function getAdjacentMicroblogs(currentId: string): Promise<{
	newer: CollectionEntry<'microblogs'> | null
	older: CollectionEntry<'microblogs'> | null
	parent: CollectionEntry<'microblogs'> | null
}> {
	const posts = await getAllMicroblogs()
	const currentIndex = posts.findIndex(post => post.id === currentId)

	if (currentIndex === -1) {
		return { newer: null, older: null, parent: null }
	}

	return {
		newer: currentIndex > 0 ? posts[currentIndex - 1] : null,
		older: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
		parent: null,
	}
}
