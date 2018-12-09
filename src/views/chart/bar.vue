<template>
    <div>
        <elp-card title="基础条形图">
            <basic-bar></basic-bar>
        </elp-card>
        <elp-card title="堆叠条形图">
            <stack-bar-chart></stack-bar-chart>
        </elp-card>
    </div>
</template>
<script>
import ElpCard from "../../components/ElpCard.vue";
import StackBarChart from "../charts/stackBar.vue";
import BasicBar from "../charts/basicBar.vue";
export default {
	components: {
		ElpCard,
        StackBarChart,
        BasicBar
	},
	data() {
		return {};
	}
};
</script>
