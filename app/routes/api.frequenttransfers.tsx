import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{
			photo: '/profiles/person_1.png',
			name: 'Livia Bator',
			position: 'CEO',
			uuid: 'a1b2c3d4-e5f6-7890-g1h2i3j4k5l6',
		},
		{ photo: '/profiles/person_2.png', name: 'Randy Press', position: 'Director', uuid: 'm7n8o9p0-q1r2s3t4-u5v6w7x8y9z0' },
		{ photo: '/profiles/person_3.png', name: 'Workman', position: 'Designer', uuid: 'z9y8x7w6-v5u4t3s2-r1q0p9o8n7m6' },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
