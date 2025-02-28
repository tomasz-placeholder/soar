import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ label: 'Others', value: 35 },
		{ label: 'Bill Expense', value: 15 },
		{ label: 'Entertainment', value: 30 },
		{ label: 'Investment', value: 20 },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
