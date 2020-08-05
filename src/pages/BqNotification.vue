<template>
	<div class="pg-notification">
		<div class="cmp-body">
			<b>{{title}}</b><br>
			<span class="light-text">{{text}}</span>
		</div>
		<div class="no-btn waves-effect waves-light" @click="$emit('no')">
			<img src="../assets/icon-no.png" alt="">
		</div>
		<div class="ok-btn waves-effect waves-light" @click="$emit('ok')">
			<img src="../assets/icon-ok.png" alt="">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			default: 'Payment Request'
		},
		text: {
			default: 'AMAZON NL is requesting you to approve a €6.49 direct debit payment.'
		}
	}
}
</script>

<style scoped>

.pg-notification {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0,0,0, 0.6);
  width: 312px;
	height: 390px;
	box-sizing: content-box;
	padding-top: 52px;
	padding-left: 16px;
}

.cmp-body {
	width: 308px;
	background: #252525;
	margin: 4px 2px 8px 2px;
	border-radius: 12px;
	padding: 15px;
	box-sizing: border-box;
	color: rgba(255, 255, 255, 0.8);
	text-align: left;
	font-size: 22px;
}

.cmp-body b {
	display: inline-block;
	color: #FFF;
	font-weight: 600;
	line-height: 32px;
	padding-bottom: 4px;
}

.ok-btn, .no-btn {
	margin-top: 32px;
	width: 110px;
	height: 110px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.ok-btn {
	background: #4FD76D;
	float: right;
}
.no-btn {
	background: #FF3831;
	float: left;
}

</style>