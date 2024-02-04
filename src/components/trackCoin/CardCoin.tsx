import { FunctionComponent } from 'react'
import '../../style/trackCoin/cardCoin.scss'
import { InfoPercentCoin } from './InfoPercentCoin'
import StoreCoin from '../../store/storeCoin'
import { observer } from 'mobx-react-lite'

interface Props {
	name: string | undefined
	price_usd: string | undefined
	symbol: string | undefined
	volume24: number | undefined
	percent_change_1h: string | undefined
	percent_change_7d: string | undefined
	percent_change_24h: string | undefined
	item: {
		name: string | undefined
		price_usd: string | undefined
		symbol: string | undefined
		volume24: number | undefined
		percent_change_1h: string | undefined
		percent_change_7d: string | undefined
		percent_change_24h: string | undefined
	}
}

export const CardCoin: FunctionComponent<Props> = observer(
	({
		name,
		price_usd,
		symbol,
		volume24,
		percent_change_1h,
		percent_change_24h,
		percent_change_7d,
		item,
	}) => {
		return (
			<li className='select-card' key={Math.random()}>
				<div className='select-card-name-btn'>
					<p className='select-card-name'>{name}</p>
					<button
						onClick={() => StoreCoin.removeCoin(item)}
						className='select-card-btn'
					>
						<img src='/close_FILL0_wght400_GRAD0_opsz24 (1).svg' alt='' />
					</button>
				</div>
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
)
