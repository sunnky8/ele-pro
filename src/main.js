import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import VCharts from "v-charts";
import "element-ui/lib/theme-chalk/index.css";
import Viser from "viser-vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(Viser);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
