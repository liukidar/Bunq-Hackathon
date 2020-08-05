
export const module = {
	namespaced: true,
	state: {
		buffer: [],
		observer: {}
	},
	getters: {},
	mutations: {
		sendMsg(_state, _data) {
			_state.buffer.push(_data)
		},
		setStatus(_state, _data) {
			_state.observer[_data.id] = _data
		},
		clearBuffer(_state) {
			_state.buffer = []
		},
		clearStatus(_state, _id) {
			_state.observer[_id] = null
		}
	},
	actions: {
		sendMsg(_ctx, _data) {
			_ctx.commit('sendMsg', _data)
		},
		setStatus(_ctx, _data) {
			_ctx.commit('setStatus', _data)
		},
		push(_ctx) {
			_ctx.rootState.api.request('POST', 'client-input', { 'msg': _ctx.state.buffer, 'status': _ctx.state.observer }).then(() => {
				_ctx.commit('clearBuffer')
			})
		},
		clearStatus(_ctx, _id) {
			_ctx.commit('clearStatus', _id)
		}
	}
}
