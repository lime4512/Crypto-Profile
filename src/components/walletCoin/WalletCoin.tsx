import '../../style/walletCoin/walletCoin.scss'
import StoreCoin from '../../store/storeCoin'
import { observer } from 'mobx-react-lite'
import { Table } from 'antd'

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
	return (
		<section className='walletCoin'>
			<Table dataSource={dataCoins} columns={columns} pagination={false} />
		</section>
	)
})
