import StoreCoin from '../../store/storeCoin'
import '../../style/trackCoin/selectorCoin.scss'
import { CarouselCoin } from './CarouselCoin'
import { CardCoin } from './CardCoin'
import { observer } from 'mobx-react-lite'
export const SelectorTrack = observer(() => {
	return (
		<ul className='select-content'>
			{StoreCoin.coinsList.length != 0 ? (
				StoreCoin.coinsList.length <= 4 ? (
					StoreCoin.coinsList.map(item => (
						<CardCoin
							key={Math.random()}
							name={item.name}
							price_usd={item.price_usd}
							symbol={item.symbol}
							volume24={item.volume24}
							percent_change_1h={item.percent_change_1h}
							percent_change_24h={item.percent_change_24h}
							percent_change_7d={item.percent_change_7d}
							item={item}
						/>
					))
				) : (
					<CarouselCoin />
				)
			) : (
				<li></li>
			)}
		</ul>
	)
})
