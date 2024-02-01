import StoreCoin from '../../store/storeCoin'
import '../../style/trackCoin/selectorCoin.scss'
export const SelectorTrack = () => {
	return (
		<div className='select-content'>
			{StoreCoin.coinsList.length != 0 ? (
				StoreCoin.coinsList.map(item => (
					<div key={Math.random()} className='select-card'>
						<p className='select-card-name'>{item.name}</p>
						<div className='select-card-total-price'>
							{item.symbol != undefined ? (
								<img
									className='select-card-img'
									src={'/imgCoin/' + item.symbol.toLowerCase() + '.png'}
									alt=''
								/>
							) : (
								<></>
							)}
							<p className='select-card-price'>{item.price_usd} $</p>
						</div>
						<div className='modalInfo-percent'>
							<p>
								<strong>1 hour: </strong>
								{Number(item.percent_change_1h) > 0 ? (
									<span>{item.percent_change_1h}%</span>
								) : (
									<span className='span-red'>{item.percent_change_1h}%</span>
								)}
							</p>
							<p>
								<strong>1 day: </strong>
								{Number(item.percent_change_24h) > 0 ? (
									<span>{item.percent_change_24h}%</span>
								) : (
									<span className='span-red'>{item.percent_change_24h}%</span>
								)}
							</p>
							<p>
								<strong>1 week: </strong>
								{Number(item.percent_change_7d) > 0 ? (
									<span>{item.percent_change_7d}%</span>
								) : (
									<span className='span-red'>{item.percent_change_7d}%</span>
								)}
							</p>
						</div>
						<p className='select-card-volume'>
							<strong className='select-card-volume-strong'>Volume:</strong>{' '}
							{item.volume24} $
						</p>
					</div>
				))
			) : (
				<h1>False</h1>
			)}
		</div>
	)
}
