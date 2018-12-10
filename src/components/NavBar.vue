<template>
    <el-menu class="navbar" mode="horizontal">
        <div v-bind:class="{'hide-logo': !isHide, 'logo': true}">
            <img
                src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png"
                width="40"
            >
        </div>
        <div class="elp-menu-icon" @click="handleMenuChange">
            <ant-icon type="menu-unfold"></ant-icon>
        </div>
        <div class="user-profile-container" trigger="click">
            <div class="user-profile-content">
                <div class="menu-icons">
                    <span class="menu-icon">
                        <i class="el-icon-search icon"></i>
                    </span>
                    <span class="menu-icon">
                        <i class="el-icon-message icon"></i>
                    </span>
                    <span class="menu-icon">
                        <el-badge is-dot class="item">
                            <i class="el-icon-bell icon"></i>
                        </el-badge>
                    </span>
                </div>
                <el-dropdown>
                    <div class="user-profile-body">
                        <img
                            class="user-avatar"
                            src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png"
                        >
                        <span class="user-name">管理员</span>
                    </div>
                    <el-dropdown-menu class="user-dropdown" slot="dropdown">
                        <router-link to="/">
                            <el-dropdown-item>我的主页</el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>个人设置</el-dropdown-item>
                        </router-link>
                        <el-dropdown-item>
                            <span @click="logout" style="display:block;">退出</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </el-menu>
</template>

<script>
import AntIcon from "./AntIcon.vue";
export default {
    name: "NavBar",
    props: {
        isHide: Boolean
    },
    components: {
        AntIcon
    },
    methods: {
        logout() {
            console.log("Logout");
        },
        handleMenuChange() {
            this.$emit('menuChange');
        }
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    height: 64px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .logo{
        height: 64px;
        width: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }
    .hide-logo{
        display: none;
    }
    .elp-menu-icon {
        height: 64px;
        width: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        font-size: 22px;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
    .user-profile-container {
        position: absolute;
        right: 20px;
        cursor: pointer;
        .user-profile-content {
            display: flex;
            padding: 20px 0;
        }
        .menu-icons {
            display: flex;
            align-items: center;
            .menu-icon {
                padding: 0 12px;
                .icon {
                    display: inline-block;
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
        .user-profile-body {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-right: 14px;
        }
        .user-avatar {
            width: 24px;
            height: 24px;
            margin: 0 8px 0 12px;
            border-radius: 4px;
        }
        .user-name {
            color: rgba(0, 0, 0, 0.65);
        }
        .user-department {
            font-size: 12px;
            color: rgba(102, 102, 102, 0.65);
        }
        .el-icon-caret-bottom {
            position: absolute;
            right: 0;
            top: 13px;
            font-size: 12px;
        }
    }
}
</style>
