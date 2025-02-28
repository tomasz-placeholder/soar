import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels)

export async function fetchExpenseStatistics() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/expensestatistics`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function ExpenseStatistics({ className, ...props }: { className?: string }) {
	const [expenseStatistics, setExpenseStatistics] = useState<Array<{ label: string; value: number }>>([])

	useEffect(() => {
		const loadExpenseStatistics = async () => {
			try {
				const data = await fetchExpenseStatistics()
				setExpenseStatistics(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadExpenseStatistics()
	}, [])

	const data = {
		labels: expenseStatistics.map((item) => item.label),
		datasets: [
			{
				label: 'Expense Statistics',
				data: expenseStatistics.map((item) => item.value),
				backgroundColor: ['#E87D36', '#343C6A', '#232323', '#396AFF'],
				offset: [40, 30, 10, 10],
				borderWidth: 0,
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				callbacks: {
					label: (context) => {
						const label = context.label || ''
						const value = context.raw || 0
						return `${label}: ${value}%`
					},
				},
			},
			datalabels: {
				color: '#fff',
				font: {
					weight: 'bold',
					size: 12,
				},
				formatter: (value, context) => {
					const label = context.chart.data.labels[context.dataIndex]
					return [`${value}%`, `${label}`]
				},
				anchor: 'center',
				align: 'center',
				textAlign: 'center',
			},
		},
		cutout: '0%',
		radius: ['100%'],
	}

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>Expense Statistics</h2>
			</header>
			<div className='flex h-full flex-col gap-2.5 rounded-2xl bg-white p-6'>
				{expenseStatistics.length > 0 ? <Pie options={options} data={data} /> : <p>Loading...</p>}
			</div>
		</section>
	)
}
