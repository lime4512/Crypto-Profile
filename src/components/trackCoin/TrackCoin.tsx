import { observer } from 'mobx-react-lite'
import StoreCoin from '../../store/storeCoin.ts'
import '../../style/trackCoin/trackCoin.scss'
import { useEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { ModalCoin } from './ModalCoin.tsx'
import { SelectorTrack } from './SelectorTrack.tsx'

export const TrackCoin = observer(() => {
	const { coins, getCoins } = StoreCoin
	const [modal, setModal] = useState(false)
	const [infoCoin, setInfoCoin] = useState()

	useEffect(() => {
		getCoins()
	}, [getCoins])

	const handelSetModal = () => {
		setModal(false)
	}
	const handleChange = (i: string) => {
		setInfoCoin(coins.find((c: { id: string }) => c.id === i))
		setModal(true)
	}
	return (
		<section className='trackCoin'>
			<Select
				value='open'
				style={{ width: 140 }}
				onChange={handleChange}
				options={coins.map(
					(i: { symbol: string; id: string; name: string }) => ({
						label: i.name,
						value: i.id,
						icon: i.symbol,
					})
				)}
				optionRender={option => (
					<Space>
						<div className='space-content'>
							<img
								src={
									'Crypto-Profile/imgCoin/' +
									option.data.icon.toLowerCase() +
									'.png'
								}
								alt=''
								style={{ width: 20 }}
							/>
							{option.data.label}
						</div>
					</Space>
				)}
			/>

			<div className='modal'>
				<ModalCoin
					modal={modal}
					setModal={handelSetModal}
					infoCoin={infoCoin}
				/>
			</div>

			<SelectorTrack />
		</section>
	)
})
