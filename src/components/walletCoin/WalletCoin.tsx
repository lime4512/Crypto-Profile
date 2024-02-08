import '../../style/walletCoin/walletCoin.scss'
import StoreCoin from '../../store/storeCoin'
import { observer } from 'mobx-react-lite'
import { Table } from 'antd'
import { HeaderButton } from '../header/HeaderButton'
export const WalletCoin = observer(() => {
	const dataCoins = StoreCoin.amountCoins.map(item => ({
		key: item.key,
		name: item.name,
		price: item.priceInp,
		amount: item.amount,
	}))

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			key: 'amount',
		},
	]

	const headerClear = () => {
		StoreCoin.delAmountCoins
	}
	return (
		<section className='walletCoin'>
			<div className='btn-clear'>
				{StoreCoin.amountCoins.length == 0 || (
					<HeaderButton onClick={headerClear}>Clear</HeaderButton>
				)}
			</div>

			<Table
				dataSource={dataCoins}
				columns={columns}
				pagination={false}
				scroll={{ y: 240 }}
			/>
		</section>
	)
})
