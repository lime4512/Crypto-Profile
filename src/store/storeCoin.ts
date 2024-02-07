import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'

type TypeCoin = {
	name: string | undefined
	price_usd: string | undefined
	symbol: string | undefined
	volume24: number | undefined
	percent_change_1h: string | undefined
	percent_change_7d: string | undefined
	percent_change_24h: string | undefined
}

type TypeAmount = {
	key: string | undefined
	name: string | undefined
	amount: number | undefined
	priceInp: number | undefined
}
class StoreCoin {
	coins = []

	coinsList: TypeCoin[] = []

	amountCoins: TypeAmount[] = []

	constructor() {
		this.amountCoins = JSON.parse(localStorage.getItem('myData')!) || []
		makeAutoObservable(this)
	}

	addAmountCoins(item: {
		key: string | undefined
		name: string | undefined
		amount: number | undefined
		priceInp: number | undefined
	}) {
		this.amountCoins.push(item)
		localStorage.setItem('myData', JSON.stringify(this.amountCoins))
	}

	addCoin(item: {
		name: string | undefined
		price_usd: string | undefined
		symbol: string | undefined
		volume24: number | undefined
		percent_change_1h: string | undefined
		percent_change_7d: string | undefined
		percent_change_24h: string | undefined
	}) {
		this.coinsList.push(item)
	}

	removeCoin(item: {
		name: string | undefined
		price_usd: string | undefined
		symbol: string | undefined
		volume24: number | undefined
		percent_change_1h: string | undefined
		percent_change_7d: string | undefined
		percent_change_24h: string | undefined
	}) {
		const index = this.coinsList.indexOf(item)
		if (index !== -1) {
			this.coinsList.splice(index, 1)
		}
	}

	getCoins = async () => {
		axios
			.get(
				'https://api.coinlore.net/api/ticker/?id=90,80,518,2710,48543,58,33285,46971,257,44883,2,2713,45219,2751,54683,45088'
			)
			.then(res => {
				runInAction(() => {
					this.coins = res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export default new StoreCoin()
