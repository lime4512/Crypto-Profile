import './App.scss'
import { Diagram } from './components/diagram/Diagram'
import { Header } from './components/header/Header'
import { TrackCoin } from './components/trackCoin/TrackCoin'
import { WalletCoin } from './components/walletCoin/WalletCoin'
import { Container } from './components/Container'
function App() {
	return (
		<>
			<Header />
			<Container>
				<main>
					<div className='main-TrackCoin'>
						<TrackCoin />
					</div>
					<div className='main-coin'>
						<Diagram />
						<WalletCoin />
					</div>
				</main>
			</Container>
		</>
	)
}

export default App
