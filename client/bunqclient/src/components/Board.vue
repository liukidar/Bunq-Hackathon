<template>
	<div class="cmp-client-board">
		<bq-button></bq-button>
	</div>
</template>

<script>

import BqButton from './BqButton'

export default {
	data: function() {
		return {	}
	},
	mounted() {
		/* let mc = new Hammer(this.$el)
		mc.on('pan', (e) => {
			this.buffer.push({
				x: e.center.x,
				y: e.center.y,
				deltaX: e.deltaX,
				deltaY: e.deltaY,
				direction: e.direction
			})
		}) */
	},
	components: {
		BqButton
	}
}
</script>

<style scoped>

.cmp-client-board {
	width: 100vw;
	height: 100vh;
	background: red;
}

</style>