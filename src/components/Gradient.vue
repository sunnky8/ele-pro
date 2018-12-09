<template>
    <span>{{convert(numValue)}}</span>
</template>

<script>
import convert from "../utils/util.js";
export default {
	name: "Gradient",
	props: {
		value: Number
	},
	data() {
		return {
			numValue: this.value - 100
		};
	},
	mounted() {
		var interval = setInterval(() => {
			if (this.numValue >= this.value) {
				this.numValue = this.value;
				clearInterval(interval);
				return;
			}
			this.numValue = this.numValue + Math.floor(Math.random() * 10 + 1);
		}, 50);
	},
	methods: {
		convert: convert
	}
};
</script>

<style lang="scss" scoped>
</style>
