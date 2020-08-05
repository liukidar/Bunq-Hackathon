<template>
	<div class="cmp-client-scroll"></div>
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
		...mapActions('status', ['setStatus'])
	},
	mounted() {
		this.$el.on('scroll', () => {
			this.setStatus({
				id: this.name,
				scroll: this.$el.scrollTop
			})
		})
	}
}
</script>

<style scoped>

</style>