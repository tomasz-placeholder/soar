import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ title: 'Deposit from my Card', value: '-$850', date: '28 January 2021', icon: '/transactions/deposit.svg' },
		{ title: 'Deposit Paypal', value: '+$2,500', date: '28 January 2021', icon: '/transactions/deposit_paypal.svg' },
		{ title: 'Jemi Wilson', value: '+$5,400', date: '28 January 2021', icon: '/transactions/jemi_wilson.svg' },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
