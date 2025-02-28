import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ month: 'Jul', balance: 120 },
		{ month: 'Aug', balance: 320 },
		{ month: 'Sep', balance: 480 },
		{ month: 'Oct', balance: 770 },
		{ month: 'Nov', balance: 230 },
		{ month: 'Dec', balance: 570 },
		{ month: 'Jan', balance: 630 },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
