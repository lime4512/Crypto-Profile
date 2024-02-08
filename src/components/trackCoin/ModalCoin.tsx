import { Modal, notification } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import '../../style/trackCoin/modalCoin.scss'
import StoreCoin from '../../store/storeCoin'
import { ModalInfo } from './ModalInfo'
import { HeaderButton } from '../header/HeaderButton'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

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
	const [api, contextHolder] = notification.useNotification()

	useEffect(() => {
		setOpen(modal)
	}, [modal])

	const handleCancel = () => {
		setOpen(false)
		setModal()
	}
	const handelInfoCoin = () => {
		const objCoin = {
			name: infoCoin?.name,
			price_usd: infoCoin?.price_usd,
			symbol: infoCoin?.symbol,
			volume24: infoCoin?.volume24,
			percent_change_1h: infoCoin?.percent_change_1h,
			percent_change_7d: infoCoin?.percent_change_7d,
			percent_change_24h: infoCoin?.percent_change_24h,
		}
		if (
			StoreCoin.coinsList.findIndex(obj => obj.name === objCoin.name) !== -1
		) {
			console.log(`Объект уже существует в коллекции.`)
			openNotificationWithIcon('info')
		} else {
			StoreCoin.addCoin(objCoin)
		}
		setOpen(false)
		setModal()
	}

	//notification
	const openNotificationWithIcon = (type: NotificationType) => {
		api[type]({
			message: 'This currency is tracked',
		})
	}
	return (
		<>
			{contextHolder}
			<Modal
				open={open}
				onCancel={handleCancel}
				footer={[
					<div className='modalInfo-btn' key='submit'>
						<HeaderButton onClick={handelInfoCoin}>Track currency</HeaderButton>
					</div>,
				]}
			>
				<ModalInfo
					name={infoCoin?.name}
					symbol={infoCoin?.symbol}
					percent_change_1h={infoCoin?.percent_change_1h}
					percent_change_24h={infoCoin?.percent_change_24h}
					percent_change_7d={infoCoin?.percent_change_7d}
					price_usd={infoCoin?.price_usd}
					price_btc={infoCoin?.price_btc}
					market_cap_usd={infoCoin?.market_cap_usd}
					volume24={infoCoin?.volume24}
				/>
			</Modal>
		</>
	)
}
