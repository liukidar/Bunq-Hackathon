<template>
	<button class="cmp-client-button btn waves-effect waves-light">
		{{name}}
	</button>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	props: {
		name: {
			default: 'btn'
		}
	},
	methods: {
		...mapActions('status', ['sendMsg'])
	},
	mounted() {
		let mc = new Hammer(this.$el)
		mc.on('tap', () => {
			this.sendMsg({
				action: 'click',
				target: this.name
			})
		})
	}
}
</script>

<style scoped>

</style>