<template>
    <div>
        <elp-card title="基础折线图">
            <line-chart></line-chart>
        </elp-card>
        <elp-card title="阶梯折线图">
            <ladder-chart></ladder-chart>
        </elp-card>
    </div>
</template>
<script>
import ElpCard from "../../components/ElpCard.vue";
import LineChart from "../charts/line.vue";
import LadderChart from "../charts/ladder.vue";
export default {
	components: {
		ElpCard,
        LineChart,
        LadderChart
	},
	data() {
		return {};
	}
};
</script>
