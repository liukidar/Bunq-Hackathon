<template>
	<div class="cmp-navbar">
		<div class="cmp-title" :style="{ color: titleColor }">{{title}}</div>
		<div class="cmp-time">{{time}}</div>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
	data: function() {
		return {
			time: '00:00',
			updateTime: null
		}
	},
	computed: {
		...mapGetters('status', ['title', 'titleColor'])
	},
	mounted() {
		let d = new Date()
		this.time = d.getHours() + ':' + (d.getMinutes() + '').padStart(2, '0')
		this.updateTime = setInterval(() => {
			let d = new Date()
			this.time = d.getHours() + ':' + (d.getMinutes() + '').padStart(2, '0')
		}, 1000)
	},
	destroyed() {
		clearInterval(this.updateTime)
	}
}
</script>

<style scoped>

.cmp-navbar {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	text-align: left;
}

.cmp-title {
	height: 31px;
	padding: 6px 7px;
	font-size: 26px;
	line-height: 31px;
}
.cmp-time {
	position: absolute;
	top: -1px;
	right: 6px;
	font-size: 32px;
	line-height: 38px;
	color: #ADB3BF;
}

</style>