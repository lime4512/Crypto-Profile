import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
class StoreCoin {
	coins = []
	constructor() {
		makeAutoObservable(this)
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
