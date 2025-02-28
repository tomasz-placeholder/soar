import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ dark: true, balance: '$5,756', holder: 'Eddy Cusuma', valid: '12/22', number: '3778 **** **** 1234' },
		{ balance: '$5,756', holder: 'Eddy Cusuma', valid: '12/22', number: '3778 **** **** 1234' },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
