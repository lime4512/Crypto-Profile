import StoreCoin from '../../store/storeCoin'
import '../../style/trackCoin/selectorCoin.scss'
export const SelectorTrack = () => {
	return (
		<div>
			select
			{StoreCoin.coinsList.length != 0 ? (
				StoreCoin.coinsList.map(item => (
					<div key={Math.random()} className='select-card'>
						<h2>{item.name}</h2>
					</div>
				))
			) : (
				<h1>False</h1>
			)}
		</div>
	)
}
