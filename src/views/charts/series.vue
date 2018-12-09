<template>
    <div class="chart-box">
        <v-chart
            :force-fit="true"
            padding='auto'
            :height="seriesData.height"
            :data="seriesData.data"
            :scale="seriesData.scale"
        >
            <v-tooltip/>
            <v-axis data-key="value" :show="false"/>
            <v-series
                :gemo="seriesData.seriesOpts.gemo"
                :position="seriesData.seriesOpts.position"
                :size="seriesData.seriesOpts.size"
                :color="seriesData.seriesOpts.color"
                :shape="seriesData.seriesOpts.shape"
                :label="seriesData.seriesOpts.label"
            />
        </v-chart>
    </div>
</template>
    
<script>
import seriesData from "../../data/_series.js";
export default {
	name: "analysis",
	components: {},
	data() {
		this.chartSettings = {
			metrics: ["访问用户", "下单用户"],
			dimension: ["日期"]
		};
		return {
			seriesData
		};
	}
};
</script>
