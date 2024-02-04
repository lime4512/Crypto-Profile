import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import StoreCoin from '../../store/storeCoin'
import { CardCoin } from './CardCoin'

export const CarouselCoin = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		speed: 500,
	}
	return (
		<>
			<Slider {...settings}>
				{StoreCoin.coinsList.length != 0 ? (
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
					<h1>false</h1>
				)}
			</Slider>
		</>
	)
}
