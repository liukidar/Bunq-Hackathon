<template>
	<div class="cmp-dot-h-slider panel">
		<div class="cmp-overlay panel"></div>
		<div class="cmp-body" :style="{ transform: 'translateX(' + offsetX + ')', width }">
			<slot :active="active"></slot>
		</div>
		<div class="cmp-dots">
			<div v-for="index in len" :key="index" class="cmp-dot" :class="{ active: active == index - 1 }"></div>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			active: 0,
			len: 4
		}
	},
	computed: {
		offsetX() {
			return this.active * -312 + 'px'
		},
		width() {
			return this.len * 312 + 'px'
		}
	},
	mounted() {
		let mc = new Hammer(this.$el)
		mc.on('swipeleft', () => {
			if (this.active < this.len - 1) {
				this.active++
			}
		})
		mc.on('swiperight', () => {
			if (this.active > 0) {
				this.active--
			}
		})
	}
}
</script>

<style scoped>

.cmp-dot-h-slider {
	overflow: hidden;
	position: relative;
}

.cmp-body {
	transition: .75s transform;
}

.cmp-body > * {
	display: block;
	float: left;
	position: relative;
}

.cmp-overlay {
	position: absolute;
	bottom: -2px;
	left: 0;
	pointer-events: none;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0,0,0,0.8) 100%);
	z-index: 1;
  transform: translate3d(0px, 0px, 1px);
}

.cmp-dots {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	margin-bottom: 15px;
	margin-top: 15px;
	z-index: 2;
  transform: translate3d(0px, 0px, 2px);
}

.cmp-dot {
	display: inline-block;
	width: 8px;
	height: 8px;
	background: rgba(255, 255, 255, 0.3);
	margin-left: 18.57px;
	border-radius: 100%;
	transition: .5s background-color;
}
.cmp-dot:first-child {
	margin-left: 0px;
}
.cmp-dot.active {
	background: #FFF;
}

</style>