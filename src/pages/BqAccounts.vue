<template>
	<div class="pg-accounts">
		<div>
			<div v-for="(el, k, index) in accounts" :key="k" class="cmp-account-card waves-effect waves-light" :class="{ selected: selected == index }" @click="selected =  selected == index ? null : index"
				:style="{ 'background-color': el.color, 'height': selected == index ? (100 + transactions(k).length * 34) + 'px' : '100px'  }">
				<div class="cmp-body">
					<img class="cmp-icon" :src="el.icon">
					<div>
						<div class="cmp-title">{{k}}</div>
						<div class="cmp-euro light-text"><span style="padding-right: 8px;">&euro;</span>{{el.balance.split('.')[0]}}</div>
						<div class="cmp-cents light-text">.{{el.balance.split('.')[1]}}</div>
					</div>
				</div>
				<div class="cmp-detail light-text">
					<div v-for="(tr, itr) in transactions(k)" :key="itr">
						<span class="cmp-subtitle">{{tr.id}}</span><span class="cmp-balance">{{tr.balance}}&euro;</span>
					</div>
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
			if (this.active) this.setTitle({title: 'Accounts', color: '#53D6F9'})
		}
	},
	data: function() {
		return {
			selected: null
		}
	},
	methods: {
		...mapActions('status', ['setTitle'])
	},
	computed: {
		...mapGetters('status', ['accounts', 'transactions'])
	}
}
</script>

<style scoped>

.pg-accounts {
	overflow: hidden;
}

.pg-accounts > div {
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100%;
	padding-right: 17px;
	margin-right: -17px;
	text-align: left;
}

.cmp-icon {
	display: block;
	margin: 26px 19px;
	width: 48px;
	height: 48px; 
}

.cmp-body {
	display: flex;
}

.cmp-account-card {
	width: 308px;
	margin: 4px 2px 8px 2px;
	border-radius: 12px;
	transition: .5s height;
	overflow: hidden;
}

.cmp-title {
	margin-top: 18px;
	font-weight: 500;
	font-size: 26px;
	line-height: 31px;
	letter-spacing: 0.4px;
}
.cmp-euro {
	color: #FFF;
	font-weight: 300;
	font-size: 26px;
	line-height: 31px;
	display: inline-block;
	letter-spacing: 0.4px;
}
.cmp-cents {
	color: #FFF;
	display: inline-block;
	font-weight: 300;
	font-size: 16px;
	line-height: 19px;
	position: relative;
	bottom: 7px;
	left: 3px;
	letter-spacing: 0.4px;
}

.cmp-detail {
	padding: 0px 19px 8px 19px;
}
.cmp-detail > div {
	padding: 4px 0;
}
.cmp-subtitle {
	letter-spacing: 0.4px;
	font-size: 18px;
	line-height: 21px;
	font-weight: normal;
}

.cmp-balance {
	float: right;
}

</style>