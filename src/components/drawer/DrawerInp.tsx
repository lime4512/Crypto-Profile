import { FunctionComponent, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { notification } from 'antd'
import { HeaderButton } from '../header/HeaderButton'
import '../../style/drawer/drawerInp.scss'
import StoreCoin from '../../store/storeCoin'
import { observer } from 'mobx-react-lite'
interface Props {
	price: string
	symbol: string
	name: string
	onClose: () => void
}

export const DrawerInp: FunctionComponent<Props> = observer(
	({ price, symbol, name, onClose }) => {
		const [amount, setAmount] = useState<number>()
		const [priceInp, setPriceInp] = useState<number>()

		const handelAmount = (event: ChangeEvent<HTMLInputElement>) => {
			setAmount(Number(event.target.value))
		}

		useEffect(() => {
			const sunValue = Number((Number(amount) * Number(price)).toFixed(2))
			setPriceInp(sunValue)
		}, [amount, price])

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault()
			const amountObj = {
				key: Math.random.toString(),
				name: name,
				amount: amount,
				priceInp: priceInp,
			}
			StoreCoin.addAmountCoins(amountObj)
			onClose()
			openNotificationWithIcon()
		}

		const [api, contextHolder] = notification.useNotification()

		const openNotificationWithIcon = () => {
			api['success']({
				message: 'Currency in wallet',
			})
		}
		return (
			<>
				{contextHolder}
				<form className='form-amount' onSubmit={handleSubmit}>
					<div className='form-amount-content mb'>
						<label className='form-label'>Amount:</label>
						<input
							type='number'
							placeholder='Write amount'
							value={amount || ''}
							onChange={handelAmount}
							className='form-inp'
						/>
					</div>
					<div className='form-amount-content'>
						<label className='form-label'>Price usd:</label>
						<input
							placeholder='Price'
							type='number'
							value={priceInp || ''}
							readOnly
							className='form-inp'
						/>
					</div>
					<span className='form-inp-clue'>
						1-{symbol}: {price}$
					</span>
					<HeaderButton>Add Coins</HeaderButton>
				</form>
			</>
		)
	}
)
