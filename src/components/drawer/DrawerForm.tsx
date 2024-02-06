import { FunctionComponent } from 'react'
import '../../style/drawer/drawerForm.scss'
import { DrawerInp } from './DrawerInp'
interface Props {
	dataCoin: {
		name: string
		symbol: string
		price_usd: string
	}
	onClose: () => void
}

export const DrawerForm: FunctionComponent<Props> = ({ dataCoin, onClose }) => {
	return (
		<div className='form'>
			<div className='form-title-content'>
				<img
					src={'/imgCoin/' + dataCoin.symbol?.toLowerCase() + '.png'}
					alt=''
					className='form-title-img'
				/>
				<h1 className='form-title'>{dataCoin.name}</h1>
			</div>
			<DrawerInp
				price={dataCoin.price_usd}
				symbol={dataCoin.symbol}
				name={dataCoin.name}
				onClose={onClose}
			/>
		</div>
	)
}
