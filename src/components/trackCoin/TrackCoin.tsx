import { useEffect, useState } from 'react'
import '../../style/trackCoin/trackCoin.scss'
import axios from 'axios'

export const TrackCoin = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const CoinApi = async () => {
			axios
				.get(
					'https://api.coinlore.net/api/ticker/?id=90,80,518,2710,48543,58,33285,46971,257,44883,2,2713,45219,2751,54683,45088'
				)
				.then(res => {
					setData(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		}
		CoinApi()
	}, [])

	return (
		<section className='trackCoin'>
			{data.map(item => (
				<div key={Math.random()}>
					<h1>{item.symbol}</h1>
					<h1>{item.price_usd}</h1>
					<img
						className='img-coin'
						src={'/imgCoin/' + item.symbol.toLowerCase() + '.png'}
						alt=''
					/>
				</div>
			))}
		</section>
	)
}
