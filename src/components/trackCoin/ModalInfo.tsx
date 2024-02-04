import { FunctionComponent } from 'react'
import { InfoPercentCoin } from './InfoPercentCoin'
interface Props {
	name: string | undefined
	symbol: string | undefined
	percent_change_1h: string | undefined
	percent_change_24h: string | undefined
	percent_change_7d: string | undefined
	price_usd: string | undefined
	price_btc: string | undefined
	market_cap_usd: string | undefined
	volume24: number | undefined
}

export const ModalInfo: FunctionComponent<Props> = ({
	symbol,
	name,
	percent_change_1h,
	percent_change_24h,
	percent_change_7d,
	price_usd,
	price_btc,
	market_cap_usd,
	volume24,
}) => {
	return (
		<>
			<div className='modalInfo-title-cont'>
				<img
					src={'/imgCoin/' + symbol?.toLowerCase() + '.png'}
					alt=''
					className='modalInfo-title-img'
				/>
				<h1 className='modalInfo-title'>
					({symbol}) {name}
				</h1>
			</div>
			<InfoPercentCoin
				percent_change_1h={percent_change_1h}
				percent_change_24h={percent_change_24h}
				percent_change_7d={percent_change_7d}
			/>
			<p>
				<strong>Price:</strong> {price_usd} $
			</p>
			<p>
				<strong>Price BTC:</strong> {price_btc}
			</p>
			<p>
				<strong>Market Cap:</strong> {market_cap_usd} $
			</p>
			<p>
				<strong>Volume:</strong> {volume24} $
			</p>
		</>
	)
}
