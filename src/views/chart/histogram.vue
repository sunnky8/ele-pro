<template>
    <div>
        <elp-card title="基础柱状图">
            <basic-histogram-chart></basic-histogram-chart>
        </elp-card>
        <elp-card title="瀑布图">
            <falls-chart></falls-chart>
        </elp-card>
    </div>
</template>
<script>
import ElpCard from "../../components/ElpCard.vue";
import BasicHistogramChart from "../charts/basicHistogram.vue";
import FallsChart from "../charts/falls.vue";
export default {
	components: {
		ElpCard,
        BasicHistogramChart,
        FallsChart
	},
	data() {
		return {};
	}
};
</script>
