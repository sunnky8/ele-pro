<template>
    <div class="elp-card-wrap">
        <div class="elp-card-head">
            <div class="elp-card-head-name">{{title}}</div>
        </div>
        <div class="elp-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
	name: "ElpCard",
	props: {
		title: String,
	},
	data() {
		return {
			widthData: "100%"
		};
	}
};
</script>

<style lang="scss" scoped>
.elp-card-wrap{
	background-color: #fff;
	margin-bottom: 10px;
	.elp-card-head {
		border-bottom: 1px #eee solid;
		.elp-card-head-name {
			padding: 12px 0px 12px 22px;
		}
	}
	.elp-card-body {
		padding: 12px;
	}
}
</style>
