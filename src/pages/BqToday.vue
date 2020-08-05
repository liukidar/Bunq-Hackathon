<template>
	<div class="pg-today">
		<div>
			<div v-for="(el, index) in todayTransactions" :key="index" class="cmp-card">
				<div class="cmp-quote" :style="{'background-color': account(el.account).color}"></div>
				<div class="cmp-body">
					<div class="cmp-balance">&euro;{{el.balance.replace('-', '')}}</div>
					<div class="cmp-title">{{el.id}}</div>
					<div class="cmp-time">{{el.time}}</div>
				</div>
			</div>
			<br>
			<br>
		</div>
	</div>	
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
	props: ['active'],
	watch: {
		active: function() {
			if (this.active) this.setTitle({title: 'Today, Nov 23', color: '#FF5C3D'})
		}
	},
	methods: {
		...mapActions('status', ['setTitle'])
	},
	computed: {
		...mapGetters('status', ['todayTransactions', 'account'])
	}
}
</script>

<style scoped>

.pg-today {
	overflow: hidden;
}

.pg-today > div {
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100%;
	padding-right: 17px;
	margin-right: -17px;
	text-align: left;
}

.cmp-card {
	width: 308px;
	height: 117px;
	margin: 4px 2px 8px 2px;
	display: flex;
	background: rgba(255, 255, 255, 0.145);
	border-radius: 12px;
}

.cmp-quote {
	margin-left: 7px;
	margin-right: 12px;
	margin-top: 11px;
	border-radius: 3px;
	width: 6px;
	height: 94px;
	background: #FFFFFF;
}

.cmp-balance {
	font-size: 32px;
	line-height: 37px;
	letter-spacing: 1.63913e-08px;
	color: #FFFFFF;
	margin-top: 9px;
}

.cmp-title, .cmp-time {
	font-size: 26px;
	line-height: 31px;
	color: #ABB4BF;
	letter-spacing: 0.4px;
}

</style>