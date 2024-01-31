import { Modal } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import '../../style/trackCoin/modalCoin.scss'

interface Props {
	modal: boolean
	setModal: () => void
	infoCoin:
		| undefined
		| {
				name: string
				price_usd: string
				price_btc: string
				symbol: string
				market_cap_usd: string
				volume24: number
				percent_change_1h: string
				percent_change_7d: string
				percent_change_24h: string
		  }
}

export const ModalCoin: FunctionComponent<Props> = ({
	modal,
	setModal,
	infoCoin,
}) => {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		setOpen(modal)
	}, [modal])
	const handleCancel = () => {
		setOpen(false)
		setModal()
	}
	return (
		<>
			<Modal
				open={open}
				onCancel={handleCancel}
				footer={[<button className='modalInfo-btn'>track currency</button>]}
			>
				<div className='modalInfo-title-cont'>
					<img
						src={'/imgCoin/' + infoCoin?.symbol.toLowerCase() + '.png'}
						alt=''
						className='modalInfo-title-img'
					/>
					<h1 className='modalInfo-title'>
						({infoCoin?.symbol}) {infoCoin?.name}
					</h1>
				</div>
				<div className='modalInfo-percent'>
					<p>
						<strong>1 hour: </strong>
						{Number(infoCoin?.percent_change_1h) > 0 ? (
							<span>{infoCoin?.percent_change_1h}%</span>
						) : (
							<span className='span-red'>{infoCoin?.percent_change_1h}%</span>
						)}
					</p>
					<p>
						<strong>1 day: </strong>
						{Number(infoCoin?.percent_change_24h) > 0 ? (
							<span>{infoCoin?.percent_change_24h}%</span>
						) : (
							<span className='span-red'>{infoCoin?.percent_change_24h}%</span>
						)}
					</p>
					<p>
						<strong>1 week: </strong>
						{Number(infoCoin?.percent_change_7d) > 0 ? (
							<span>{infoCoin?.percent_change_7d}%</span>
						) : (
							<span className='span-red'>{infoCoin?.percent_change_7d}%</span>
						)}
					</p>
				</div>
				<p>
					<strong>Price:</strong> {infoCoin?.price_usd} $
				</p>
				<p>
					<strong>Price BTC:</strong> {infoCoin?.price_btc}
				</p>
				<p>
					<strong>Market Cap:</strong> {infoCoin?.market_cap_usd} $
				</p>
				<p>
					<strong>Volume:</strong> {infoCoin?.volume24} $
				</p>
			</Modal>
		</>
	)
}
