import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ icon: '/icons/dashboard.svg', label: 'Dashboard', slug: '/' },
		{ icon: '/icons/transactions.svg', label: 'Transactions', slug: '/transactions' },
		{ icon: '/icons/accounts.svg', label: 'Accounts', slug: '/accounts' },
		{ icon: '/icons/investments.svg', label: 'Investments', slug: '/investments' },
		{ icon: '/icons/credit-cards.svg', label: 'Credit Cards', slug: '/credit-cards' },
		{ icon: '/icons/loans.svg', label: 'Loans', slug: '/loans' },
		{ icon: '/icons/services.svg', label: 'Services', slug: '/services' },
		{ icon: '/icons/privileges.svg', label: 'My Privileges', slug: '/my-privileges' },
		{ icon: '/icons/settings.svg', label: 'Settings', slug: '/settings' },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
