<template>
    <div class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	name: "AppMain"
};
</script>

<style lang="scss">
.app-main {
	padding: 10px;
	.elp-app-main-header {
		background: #fff;
		padding: 30px 40px;
		margin-bottom: 10px;
	}
	.elp-app-main-wrap {
		height: 100%;
		padding: 20px 30px;
		background-color: #fff;
    }
    // @media only screen and (max-width: 960px){
    //     .elp-app-main-wrap {
    //         padding: 20px 30px;
    //     }
    // }
}
.el-input__inner {
	height: 35px;
}
.el-input__suffix {
	height: 35px;
}
.el-select {
	width: 100%;
}
button {
	height: 35px;
	padding: 4px 20px !important;
	line-height: 0;
}
.el-table th {
	background: #f9f9f9;
}
.el-radio-group {
    line-height: inherit;
}
</style>
