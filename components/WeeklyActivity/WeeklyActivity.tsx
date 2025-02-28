import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	barThickness: 25,
	inflateAmount: -5,
	borderRadius: 8,
	maintainAspectRatio: false,
	borderSkipped: false,
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			beginAtZero: true,
			max: 500,
			ticks: {
				stepSize: 100,
			},
			grid: {
				drawBorder: false,
				drawTicks: false,
			},
		},
	},
	plugins: {
		legend: {
			position: 'top' as const,
			align: 'end',
			labels: {
				useBorderRadius: true,
				borderRadius: 8,
				boxWidth: 15,
				boxHeight: 15,
			},
		},
	},
}

export async function fetchWeeklyActivity() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/weeklyactivity`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function WeeklyActivity({ className, ...props }: { className?: string }) {
	const [weeklyActivity, setWeeklyActivity] = useState<Array<{ label: string; deposit: number; withdraw: number }>>([])

	useEffect(() => {
		const loadWeeklyActivity = async () => {
			try {
				const data = await fetchWeeklyActivity()
				setWeeklyActivity(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadWeeklyActivity()
	}, [])

	const data = {
		labels: weeklyActivity.map((d) => d.label),
		datasets: [
			{
				label: 'Withdraw',
				data: weeklyActivity.map((d) => d.withdraw),
				backgroundColor: '#232323',
			},
			{
				label: 'Deposit',
				data: weeklyActivity.map((d) => d.deposit),
				backgroundColor: '#396AFF',
			},
		],
	}

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>Weekly Activity</h2>
			</header>
			<div className='flex flex-col gap-2.5 rounded-2xl bg-white p-6'>
				{weeklyActivity.length > 0 ? <Bar options={options} data={data} /> : <p>Loading...</p>}
			</div>
		</section>
	)
}
