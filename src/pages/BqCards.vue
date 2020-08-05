<template>
	<div class="pg-cards">
		<div>
			<bq-card v-for="(el, k) in cards" :key="k" :data="el"></bq-card>
			<br>
			<br>
		</div>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import BqCard from './BqCard'

export default {
	props: ['active'],
	watch: {
		active: function() {
			if (this.active) this.setTitle({title: 'Cards', color: '#53D6F9'})
		}
	},
	computed: {
		...mapGetters('status', ['cards'])
	},
	methods: {
		...mapActions('status', ['setTitle'])
	},
	components: {
		BqCard
	}
}
</script>

<style scoped>

.pg-cards {
	overflow: hidden;
}

.pg-cards > div {
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100%;
	padding-right: 17px;
	margin-right: -17px;
	text-align: left;
}

</style>