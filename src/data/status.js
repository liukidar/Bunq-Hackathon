
export const module = {
	namespaced: true,
	state: {
		title: 'Home',
		titleColor: '#53D6F9',
		mainIBAN: 'NL69 BUNQ 2290 6088 15',
		balance: '956.92',
		accounts: {
			'Home': {
				balance: '217.12',
				icon: 'icon-home.png',
				color: '#FD1C4D'
			},
			'Groceries': {
				balance: '415.19',
				icon: 'icon-shop.png',
				color: '#06B0FF'
			},
			'Holiday': {
				balance: '27.45',
				icon: 'icon-home.png',
				color: '#00F47D'
			}
		},
		transactions: {
			'Home': [
				{
					id: 'Ikea',
					balance: '-12.32',
					date: '2019/11/23',
					account: 'Home',
					time: '5:45 PM'
				},
				{
					id: 'Belsimpel',
					balance: '-2.80',
					date: '2019/11/23',
					account: 'Home',
					time: '12:45 AM'
				}
			],
			'Groceries': [
				{
					id: 'Drugstore',
					balance: '-17.20',
					date: '2019/11/23',
					account: 'Groceries',
					time: '11:45 AM'
				},
				{
					id: 'Starbucks',
					balance: '-4.40',
					date: '2019/11/23',
					account: 'Groceries',
					time: '9:45 AM'
				},
				{
					id: 'Starbucks',
					balance: '-9.00',
					date: '2019/11/22',
					account: 'Groceries',
					time: '9:45 PM'
				},
				{
					id: 'Starbucks',
					balance: '-4.40',
					date: '2019/11/22',
					account: 'Groceries',
					time: '17:45 PM'
				}
			]
		},
		cards: {
			0: {
				user: 'Luca',
				code: '1998',
				active: true,
			},
			1: {
				user: 'Antonio',
				code: '9657',
				active: false,
			},
			2: {
				user: 'Teddy',
				code: '1562',
				active: true
			}
		}
	},
	getters: {
		title(_state) {
			return _state.title
		},
		titleColor(_state) {
			return _state.titleColor
		},
		mainIBAN(_state) {
			return _state.mainIBAN
		},
		balanceEuro(_state) {
			return _state.balance.split('.')[0]
		},
		balanceCents(_state) {
			return _state.balance.split('.')[1]
		},
		accounts(_state) {
			return _state.accounts
		},
		account(_state) {
			return (_id) => _state.accounts[_id]
		},
		transactions(_state) {
			return (_id) => _state.transactions[_id] ? _state.transactions[_id] : []
		},
		todayTransactions(_state) {
			let r = []
			for (let account in _state.transactions) {
				r.push(...(_state.transactions[account].filter((e) => e.date == '2019/11/23')))
			}

			return r
		},
		cards(_state) {
			return _state.cards
		}
	},
	mutations: {
		setTitle(_state, _title) {
			_state.title = _title
		},
		setTitleColor(_state, _titleColor) {
			_state.titleColor = _titleColor
		}
	},
	actions: {
		setTitle(_ctx, _data) {
			_ctx.commit('setTitle', _data.title)
			_ctx.commit('setTitleColor', _data.color)
		}
		/*
		function_name(_ctx) {
			// method, url, data
			_ctx.rootState.api.request('POST', 'client-input', { 'msg': _ctx.state.buffer, 'status': _ctx.state.observer }).then((r) => {
				_ctx.commit('mutation_name', r)
			})
		}
		*/
	}
}
