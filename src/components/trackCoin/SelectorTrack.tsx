import StoreCoin from '../../store/storeCoin'
import '../../style/trackCoin/selectorCoin.scss'
import { CarouselCoin } from './CarouselCoin'
import { CardCoin } from './CardCoin'
export const SelectorTrack = () => {
	return (
		<ul className='select-content'>
			{StoreCoin.coinsList.length != 0 ? (
				StoreCoin.coinsList.length <= 4 ? (
					StoreCoin.coinsList.map(item => (
						<CardCoin
							name={item.name}
							price_usd={item.price_usd}
							symbol={item.symbol}
							volume24={item.volume24}
							percent_change_1h={item.percent_change_1h}
							percent_change_24h={item.percent_change_24h}
							percent_change_7d={item.percent_change_7d}
						/>
					))
				) : (
					<CarouselCoin />
				)
			) : (
				<li>Currency is not tracked</li>
			)}
		</ul>
	)
}
