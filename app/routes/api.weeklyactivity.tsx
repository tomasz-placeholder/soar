import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ label: 'Sat', deposit: 423, withdraw: 198 },
		{ label: 'Sun', deposit: 312, withdraw: 256 },
		{ label: 'Mon', deposit: 487, withdraw: 102 },
		{ label: 'Tue', deposit: 259, withdraw: 321 },
		{ label: 'Wed', deposit: 398, withdraw: 189 },
		{ label: 'Thu', deposit: 175, withdraw: 411 },
		{ label: 'Fri', deposit: 341, withdraw: 275 },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
