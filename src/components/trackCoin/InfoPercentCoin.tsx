import { FunctionComponent } from 'react'
import '../../style/trackCoin/infoPercentCoin.scss'

interface Props {
	percent_change_1h: string | undefined
	percent_change_24h: string | undefined
	percent_change_7d: string | undefined
}

export const InfoPercentCoin: FunctionComponent<Props> = ({
	percent_change_1h,
	percent_change_24h,
	percent_change_7d,
}) => {
	return (
		<div className='modalInfo-percent'>
			<p>
				<strong>1 hour: </strong>
				{Number(percent_change_1h) > 0 ? (
					<span>{percent_change_1h}%</span>
				) : (
					<span className='span-red'>{percent_change_1h}%</span>
				)}
			</p>
			<p>
				<strong>1 day: </strong>
				{Number(percent_change_24h) > 0 ? (
					<span>{percent_change_24h}%</span>
				) : (
					<span className='span-red'>{percent_change_24h}%</span>
				)}
			</p>
			<p>
				<strong>1 week: </strong>
				{Number(percent_change_7d) > 0 ? (
					<span>{percent_change_7d}%</span>
				) : (
					<span className='span-red'>{percent_change_7d}%</span>
				)}
			</p>
		</div>
	)
}
