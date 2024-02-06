import { FunctionComponent, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { notification } from 'antd'
import { HeaderButton } from '../header/HeaderButton'
interface Props {
	price: string
	symbol: string
	name: string
	onClose: () => void
}

export const DrawerInp: FunctionComponent<Props> = ({
	price,
	symbol,
	name,
	onClose,
}) => {
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
		console.log(amount, priceInp, name)
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
				<label>Amount:</label>
				<input
					type='number'
					placeholder='Write amount'
					value={amount || ''}
					onChange={handelAmount}
					className='form-inp'
				/>
				<label>Price usd:</label>
				<input
					type='number'
					value={priceInp || ''}
					readOnly
					className='form-inp'
				/>
				<span>
					1-{symbol}: {price}$
				</span>

				<HeaderButton>Add Coins</HeaderButton>
			</form>
		</>
	)
}
