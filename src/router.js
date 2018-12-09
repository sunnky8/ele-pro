import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Public from "./views/public.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
            path: "/",
            redirect: '/dashboard/workplace',
			name: "home",
			component: Home
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: Public,
			children: [
				{
					path: "analysis",
					name: "analysis",
					component: () => import("./views/dashboard/analysis.vue")
				},
				{
					path: "monitor",
					name: "monitor",
					component: () => import("./views/dashboard/monitor.vue")
				},
				{
					path: "workplace",
					name: "workplace",
					component: () => import("./views/dashboard/workplace.vue")
				}
			]
		},
		{
			path: "/table",
			name: "table",
			component: Public,
			children: [
				{
					path: "basic",
					name: "basic",
					component: () => import("./views/table/basic.vue")
				},
				{
					path: "advanced",
					name: "advanced",
					component: () => import("./views/table/advanced.vue")
				}
			]
		},
		{
			path: "/form",
			name: "form",
			component: Public,
			children: [
				{
					path: "typical",
					name: "typical",
					component: () => import("./views/form/typical.vue")
				},
				{
					path: "step",
					name: "step",
					component: () => import("./views/form/step.vue")
				}
			]
		},
		{
			path: "/chart",
			name: "chart",
			component: Public,
			children: [
				{
					path: "line",
					name: "line",
					component: () => import("./views/chart/line.vue")
				},
				{
					path: "histogram",
					name: "histogram",
					component: () => import("./views/chart/histogram.vue")
				},
				{
					path: "bar",
					name: "bar",
					component: () => import("./views/chart/bar.vue")
				}
			]
        },
        {
			path: "/profile",
			name: "profile",
			component: Public,
			children: [
				{
					path: "base",
					name: "base",
					component: () => import("./views/profile/base.vue")
				},
				{
					path: "highlevel",
					name: "highlevel",
					component: () => import("./views/profile/highlevel.vue")
				}
			]
        },
        {
			path: "/result",
			name: "result",
			component: Public,
			children: [
				{
					path: "success",
					name: "success",
					component: () => import("./views/result/success.vue")
				},
				{
					path: "fail",
					name: "fail",
					component: () => import("./views/result/fail.vue")
				}
			]
		}
	]
});
