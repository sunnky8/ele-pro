<template>
    <div class="app-wrapper">
        <side-bar
            :isCollapse="isCollapse"
            @handleClick="handleClick"
            v-bind:class="{'elp-hide-menu': isHide, 'elp-small-sidebar': isCollapse, 'sidebar-container': true}"
        />
        <div
            v-bind:class="{'elp-full-main': isHide, 'elp-small-main': isCollapse, 'main-container': true}"
        >
            <nav-bar @menuChange="MenuChangeMethod" :isHide="isHide" />
            <app-main/>
        </div>
    </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from "./components";
import "./styles/index.scss";
export default {
    name: "layout",
    components: {
        NavBar,
        SideBar,
        AppMain
    },
    data() {
        return {
            isHide: window.innerWidth > 600 ? false : true,
            isCollapse: window.innerWidth > 992 ? false : true,
            myWidth: window.innerWidth
        };
    },
    methods: {
        MenuChangeMethod() {
            if (this.myWidth > 992) {
                this.isCollapse = !this.isCollapse;
            }
            if (600 < this.myWidth && this.myWidth <= 992) {
                this.isCollapse = !this.isCollapse;
            }
            if (this.myWidth <= 600) {
                this.isCollapse = true;
                this.isHide = !this.isHide;
            }
        },
        handleClick() {
            if (this.myWidth <= 600) {
                this.isHide = true;
            }
        }
    },
    mounted() {
        window.onresize = () => {
            this.myWidth = window.innerWidth;
            if (this.myWidth > 992) {
                this.isHide = false;
                this.isCollapse = false;
            }
            if (600 < this.myWidth && this.myWidth <= 992) {
                this.isCollapse = true;
                this.isHide = false;
            }
            if (this.myWidth <= 600) {
                this.isCollapse = true;
                this.isHide = true;
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
}
.main-container {
    min-height: 100vh;
    transition: margin-left 0.28s;
    margin-left: 256px;
    background-color: #f0f2f5;
}
.elp-hide-menu {
    display: none;
}
.elp-small-main {
    margin-left: 80px;
}
.elp-small-sidebar {
    width: 80px !important;
    .el-submenu .el-menu-item {
        min-width: 80px !important;
    }
}
.elp-full-main {
    margin-left: 0;
}
</style>
