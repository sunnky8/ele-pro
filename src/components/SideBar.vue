<template>
    <scroll-bar>
        <div class="logo">
            <img
                src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png"
                width="40"
            >
            <span v-bind:class="{'hide-site-name': isCollapse, 'site-name': true}">ADMIN LITE</span>
        </div>
        <el-menu
            mode="vertical"
            :show-timeout="200"
            class="el-menu-vertical-demo"
            background-color="#00142a"
            text-color="hsla(0, 0%, 100%, .65)"
            active-text-color="#409EFF"
            :collapse="isCollapse"
        >
            <template v-for="item in asideMenuConfig">
                <router-link v-if="!item.children" :to="item.path" :key="item.name">
                    <el-menu-item :index="item.path">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span v-if="item.name" slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>

                <el-submenu v-else :index="item.name || item.path" :key="item.name">
                    <template slot="title">
                        <i v-if="item && item.icon" :class="item.icon"></i>
                        <span v-if="item && item.name" slot="title">{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <router-link
                            v-if="!child.hidden"
                            :to="item.path + child.path"
                            :key="child.name"
                        >
                            <el-menu-item :index="item.path + child.path" @click="handleClick">
                                <span v-if="child && child.name" slot="title">{{child.name}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </scroll-bar>
</template>

<script>
import ScrollBar from "./ScrollBar";
import { asideMenuConfig } from "../__menuConfig__.js";

export default {
    components: { ScrollBar },
    name: "SideBar",
    props: {
        isCollapse: Boolean
    },
    data() {
        return {
            asideMenuConfig
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick() {
            this.$emit('handleClick')
        }
    }
};
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    background: #002140;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
}
.site-name {
    margin-left: 10px;
}
.hide-site-name{
    display: none;
}
.sidebar-container {
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    transition: width 0.28s;
    width: 256px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    a {
        display: inline-block;
        width: 100%;
    }
    .el-menu {
        padding-top: 16px;
        width: 100% !important;
        border: none;
    }
    .el-submenu .el-menu-item {
        min-width: 256px !important;
        padding-left: 48px !important;
        background-color: #000c17 !important;
        &:hover {
            color: #fff !important;
        }
    }
    .el-menu-item,
    .el-submenu .el-menu-item {
        &.is-active {
            background-color: #188fff !important;
            color: #fff !important;
        }
    }
    .el-submenu__title i {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.65);
    }
}
</style>

