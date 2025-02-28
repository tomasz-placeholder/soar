import Cards from 'components/Cards/Cards'
import ExpenseStatistics from 'components/ExpenseStatistics/ExpenseStatistics'
import TopBar from 'components/TopBar/TopBar'
import Transactions from 'components/Transactions/Transactions'
import WeeklyActivity from 'components/WeeklyActivity/WeeklyActivity'
import type { Route } from './+types/_index'


export function meta({}: Route.MetaArgs) {
	return [{ title: 'Soar: Front-End Task' }, { name: 'description', content: 'Front-End Developer Assessment Task' }]
}

export default function Overview() {
	return (
		<main>
			<TopBar title="Overview" />
			<section className="grid grid-cols-2 xl:grid-cols-3 grid-flow-dense gap-x-7.5 gap-y-6 px-10 py-6 bg-[#F5F7FA]">
				<Cards className="col-span-2"/>
				<Transactions />
				<WeeklyActivity className="col-span-2" />
				<ExpenseStatistics />
				<div className="bg-amber-100">
					Quick Transfer
				</div>
				<div className="col-span-2 bg-amber-100">
					Balance History
				</div>
			</section>
		</main>
	)
}
