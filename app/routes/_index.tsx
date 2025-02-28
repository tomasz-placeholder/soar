import TopBar from 'components/TopBar/TopBar'
import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Soar: Front-End Task' }, { name: 'description', content: 'Front-End Developer Assessment Task' }]
}

export default async function Overview() {
	return <>
		<TopBar title="Overview"/>
	</>
}
