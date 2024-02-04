import { FunctionComponent } from 'react'
import '../../style/trackCoin/cardCoin.scss'
import { InfoPercentCoin } from './InfoPercentCoin'

interface Props {
	name: string | undefined
	price_usd: string | undefined
	symbol: string | undefined
	volume24: number | undefined
	percent_change_1h: string | undefined
	percent_change_7d: string | undefined
	percent_change_24h: string | undefined
}

export const CardCoin: FunctionComponent<Props> = ({
	name,
	price_usd,
	symbol,
	volume24,
	percent_change_1h,
	percent_change_24h,
	percent_change_7d,
}) => {
	return (
		<li key={Math.random()} className='select-card'>
			<p className='select-card-name'>{name}</p>
			<div className='select-card-total-price'>
				{symbol != undefined ? (
					<img
						className='select-card-img'
						src={'/imgCoin/' + symbol.toLowerCase() + '.png'}
						alt=''
					/>
				) : (
					<></>
				)}
				<p className='select-card-price'>{price_usd} $</p>
			</div>
			<InfoPercentCoin
				percent_change_1h={percent_change_1h}
				percent_change_24h={percent_change_24h}
				percent_change_7d={percent_change_7d}
			/>
			<p className='select-card-volume'>
				<strong className='select-card-volume-strong'>Volume:</strong>{' '}
				{volume24} $
			</p>
		</li>
	)
}
