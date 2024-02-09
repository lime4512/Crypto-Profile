import '../../style/walletCoin/walletCoin.scss'
import StoreCoin from '../../store/storeCoin'
import { observer } from 'mobx-react-lite'
import { Table } from 'antd'
import { HeaderButton } from '../header/HeaderButton'
import { DuplicateCoins } from '../../utils/DuplicateListCoin'

export const WalletCoin = observer(() => {
	const dataDuplicate = DuplicateCoins()

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
			<div className='walletCoin-block'>
				<div className='btn-clear'>
					{StoreCoin.amountCoins.length == 0 || (
						<HeaderButton onClick={headerClear}>Clear</HeaderButton>
					)}
				</div>

				<Table
					dataSource={dataDuplicate}
					columns={columns}
					pagination={false}
					scroll={{ y: 248 }}
				/>
			</div>
		</section>
	)
})
