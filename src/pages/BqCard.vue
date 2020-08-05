<template>
	<div class="cmp-card waves-effect waves-light" @click="data.active = false">
		<div class="cmp-body" :class="{ frozen: !data.active }">
			<div class="cmp-name light-text">{{data.user}}</div>
			<div class="cmp-code"><b>&bull;&bull;&bull;&bull; {{data.code}}</b></div>
			<img class="cmp-img" src="../assets/maestro.png"/>
		</div>
		<div class="cmp-overlay waves-effect waves-light" @click.stop="data.active = true" :class="{ visible: !data.active }">
			<div>
				<img src="../assets/icon-snow.png" /><br>
				Tap to unfreeze
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['data'],
	data: function() {
		return {
			frozen: false
		}
	}
}
</script>

<style scoped>

.cmp-card {
	border-radius: 12px;
	background: radial-gradient(circle at bottom left, #252525 0%, rgba(80,80,80,1) 33%, rgba(77,77,77,1) 40%, rgb(55, 55, 55) 100%);
	width: 266px;
	height: 154px;
	margin: 4px 0 8px 23px;
	position: relative;
	text-align: left;
	padding: 30px 19px;
	font-size: 22px;
	line-height: 26px;
	letter-spacing: .4px;
	box-sizing: border-box;
	overflow: hidden;
}

.cmp-body {
	width: 100%;
	height: 100%;
	position: relative;
	transition: .25s;
}

.cmp-code {
	font-size: 20px;
}

.frozen {
	filter: blur(2.2px);
}

.cmp-img {
	position: absolute;
	display: block;
	width: 89px;
	height: 55px;
	bottom: -12px;
	right: 0;
}

.cmp-overlay {
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0, 0.6);
	text-align: center;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #FFF;
	display: flex;
	align-items: center;
  justify-content: center;
	opacity: 0;
	transition: .5s;
	pointer-events: none;
}

.cmp-overlay.visible {
	opacity: 1;
	pointer-events: all;
}

.cmp-overlay img {
	width: 39px;
	height: 39px;
}

</style>