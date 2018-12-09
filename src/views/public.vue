<template>
    <div>
        <!-- <div class="elp-app-main-header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>表单</el-breadcrumb-item>
                <el-breadcrumb-item>分步表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	name: "public"
};
</script>
