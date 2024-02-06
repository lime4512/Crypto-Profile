import { Drawer } from 'antd'
import { FunctionComponent } from 'react'
import '../../style/drawer/drawer.scss'
import { Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import StoreCoin from '../../store/storeCoin.ts'
import { DrawerForm } from './DrawerForm.tsx'
import { HeaderButton } from '../header/HeaderButton.tsx'
interface Props {
	onClose: () => void
	open: boolean
}

export const DrawerWindow: FunctionComponent<Props> = observer(
	({ onClose, open }) => {
		const { coins, getCoins } = StoreCoin

		useEffect(() => {
			getCoins()
		}, [getCoins])

		const [infoCoin, setInfoCoin] = useState()
		const handleChange = (i: string) => {
			setInfoCoin(coins.find((c: { id: string }) => c.id === i))
		}

		const HandelDelCoin = () => {
			setInfoCoin(undefined)
		}
		return (
			<Drawer
				title='Add coin'
				onClose={onClose}
				open={open}
				size='large'
				extra={
					<Space>
						<HeaderButton onClick={HandelDelCoin}>Cancel</HeaderButton>
					</Space>
				}
			>
				<div className='drawer-content'>
					{infoCoin == undefined ? (
						<Select
							value='open'
							style={{ width: '100%' }}
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
												'/imgCoin/' + option.data.icon.toLowerCase() + '.png'
											}
											alt=''
											style={{ width: 20 }}
										/>
										{option.data.label}
									</div>
								</Space>
							)}
						/>
					) : (
						<DrawerForm dataCoin={infoCoin} onClose={onClose} />
					)}
				</div>
			</Drawer>
		)
	}
)
