<template>
	<div class="pg-home">
		<img class="cmp-logo" src="../assets/bunq.png" alt="bunq logo">
		<div class="cmp-body">
			<div>
				<div class="cmp-subtitle light-text">Balance</div>
				<div class="cmp-euro">&euro;{{balanceEuro}}</div>
				<div class="cmp-cents">.{{balanceCents}}</div>
			</div>
			<div>
				<div class="cmp-subtitle light-text">Main IBAN</div>
				<div @click="qrCode = true" class="cmp-iban light-text">{{mainIBAN}}</div>
			</div>
		</div>
		<transition name="qr-code">
			<div id="qrcode" v-show="qrCode" @click="qrCode = false" class="cmp-qrcode"></div>
		</transition>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
	props: ['active'],
	watch: {
		active: function() {
			if (this.active) this.setTitle({title: 'Home', color: '#53D6F9'})
		}
	},
	data: function() {
		return {
			qrCode: false,
			notification: false
		}
	},
	computed: {
		...mapGetters('status', ['mainIBAN', 'balanceEuro', 'balanceCents'])
	},
	methods: {
		...mapActions('status', ['setTitle'])
	},
	mounted() {
		new QRCode(document.getElementById("qrcode"), {
			text: "https://bunq.me/marco",
			width: 276,
			height: 276,
		});
	}
}
</script>

<style scoped>

.cmp-logo {
	display: inline-block;
	width: 263px;
	margin: 0 24px 0px 24px;
}

.cmp-body {
	padding: 0px 35px;
	text-align: left;
}

.cmp-subtitle{
	font-size: 14px;
	line-height: 33px;
	letter-spacing: 0.4px;
	color: #AEB4BF;
	text-transform: uppercase;
	margin-bottom: -6px;
}
.cmp-euro {
	color: #FFF;
	display: inline-block;
	font-size: 36px;
	line-height: 39px;
	letter-spacing: -0.1px;
	margin-bottom: 8px;
}
.cmp-cents {
	color: #FFF;
	display: inline-block;
	font-size: 24px;
	position: relative;
	bottom: 7px;
	left: 3px;
	letter-spacing: -0.1px;
}
.cmp-iban {
	font-size: 19px;
	line-height: 39px;
	letter-spacing: -0.1px;
	color: #FFFFFF;
	margin-top: -8px;
}

.cmp-qrcode {
	width: 312px;
	height: 312px;
	background: #FFF;
	border-radius: 16px;
	position: fixed;
	top: 42px;
	left: 0;
	padding: 18px;
	box-sizing: border-box;
}

.qr-code-enter-active, .qr-code-leave-active {
  transition: transform .5s, opacity .5s;
}
.qr-code-enter, .qr-code-leave-to {
  transform: translate(0, 136px) scale(0);
	opacity: 0;
}

</style>