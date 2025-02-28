import type { Route } from './+types/api'

export async function loader({ params }: Route.LoaderArgs) {
	const json = JSON.stringify([
		{ label: 'Your Name', name: 'name', type: 'text', defaultValue: 'Charlene Reed' },
		{ label: 'User Name', name: 'username', type: 'text', defaultValue: 'Charlene Reed' },
		{ label: 'Email', name: 'email', type: 'email', defaultValue: 'charlenereed@gmail.com' },
		{ label: 'Password', name: 'password', type: 'password', defaultValue: '********' },
		{ label: 'Date of Birth', name: 'dob', type: 'date', defaultValue: '1990-01-25' },
		{ label: 'Present Address', name: 'presentAddress', type: 'text', defaultValue: 'San Jose, California, USA' },
		{ label: 'Permanent Address', name: 'permanentAddress', type: 'text', defaultValue: 'San Jose, California, USA' },
		{ label: 'City', name: 'city', type: 'text', defaultValue: 'San Jose' },
		{ label: 'Postal Code', name: 'postalCode', type: 'text', defaultValue: '45962' },
		{ label: 'Country', name: 'country', type: 'text', defaultValue: 'USA' },
	])

	return new Response(json, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
