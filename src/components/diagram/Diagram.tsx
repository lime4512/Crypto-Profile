import '../../style/diagram/diagram.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { DuplicateCoins } from '../../utils/DuplicateListCoin'
import { observer } from 'mobx-react-lite'

ChartJS.register(ArcElement, Tooltip, Legend)
export const Diagram = observer(() => {
	const dataDuplicate = DuplicateCoins()
	const data = {
		labels: dataDuplicate.map(i => i.name),
		datasets: [
			{
				label: 'Coins',
				data: dataDuplicate.map(i => i.amount),
				backgroundColor: [
					'rgb(225, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
					'rgb(255, 81, 132)',
					'rgb(54, 153, 235)',
					'rgb(255, 206, 86)',
					'rgb(75, 192, 192)',
					'rgb(153, 102, 255)',
					'rgb(255, 159, 64)',
				],
			},
		],
	}
	return (
		<section>
			{dataDuplicate.length != 0 ? (
				<div className='diagram'>
					<Pie data={data} />
				</div>
			) : (
				<></>
			)}
		</section>
	)
})
