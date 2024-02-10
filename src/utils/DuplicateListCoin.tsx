import { useMemo } from 'react'
import StoreCoin from '../store/storeCoin'

interface Coin {
	key?: number
	name?: string
	price?: number
	amount?: number
}

export const DuplicateCoins = (): Coin[] => {
	const { amountCoins } = StoreCoin

	const dataCoins: { name?: string; price?: number; amount?: number }[] =
		amountCoins.map(item => ({
			name: item.name,
			price: item.priceInp,
			amount: item.amount,
		}))

	const resultTotal = useMemo(() => {
		const tempResult: Coin[] = []

		for (let i = 0; i < dataCoins.length; i++) {
			let found = false
			for (let j = 0; j < tempResult.length; j++) {
				if (dataCoins[i].name === tempResult[j].name) {
					tempResult[j].price =
						(tempResult[j].price || 0) + (dataCoins[i].price || 0)
					tempResult[j].amount =
						(tempResult[j].amount || 0) + (dataCoins[i].amount || 0)
					found = true
					break
				}
			}
			if (!found) {
				tempResult.push({
					key: Math.random(),
					name: dataCoins[i].name || '',
					price: dataCoins[i].price || 0,
					amount: dataCoins[i].amount || 0,
				})
			}
		}
		return tempResult
	}, [dataCoins])
	return resultTotal
}
