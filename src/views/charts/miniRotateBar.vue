<template>
    <div>
        <v-chart
            :forceFit="true"
            padding="auto"
            :height="height"
            :data="data"
        >
            <v-coord type="rect" direction="LB"/>
            <v-tooltip/>
            <v-axis data-key="item" :label="label"/>
            <v-axis data-key="count" :show="false" :label="label"/>
            <v-bar position="item*count" />
        </v-chart>
    </div>
</template>

<script>
const DataSet = require("@antv/data-set");

const sourceData = [
	{ item: "pv", count: 131744 },
	{ item: "uv", count: 104970 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
	type: "sort",
	callback(a, b) {
		return a.count - b.countt > 0;
	}
});
const data = dv.rows;

const label = { offset: 12 };

export default {
	data() {
		return {
			data,
			height: 80,
			label: label
		};
	}
};
</script>
