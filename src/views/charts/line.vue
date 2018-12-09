<template>
  <div class="chart-box">
    <v-chart :force-fit="true" padding='auto' :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="month*temperature" color="city" />
      <v-point position="month*temperature" color="city" :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require("@antv/data-set");

const sourceData = [
	{ month: "Jan", 上海店: 9.0, 北京店: 6.9, 广州店: 4.0, 深圳店: 2.9 },
	{ month: "Feb", 上海店: 9.9, 北京店: 8.2, 广州店: 5.0, 深圳店: 6.9 },
	{ month: "Mar", 上海店: 12.5, 北京店: 8.7, 广州店: 2.0, 深圳店: 3.9 },
	{ month: "Apr", 上海店: 14.5, 北京店: 9.5, 广州店: 8.0, 深圳店: 7.9 },
	{ month: "May", 上海店: 18.4, 北京店: 11.9, 广州店: 10.0, 深圳店: 5.9 },
	{ month: "Jun", 上海店: 21.5, 北京店: 15.2, 广州店: 14.0, 深圳店: 10.9 },
	{ month: "Jul", 上海店: 25.2, 北京店: 17.0, 广州店: 11.0, 深圳店: 5.9 },
	{ month: "Aug", 上海店: 26.5, 北京店: 16.6, 广州店: 14.0, 深圳店: 7.9 },
	{ month: "Sep", 上海店: 23.3, 北京店: 14.2, 广州店: 15.0, 深圳店: 9.9 },
	{ month: "Oct", 上海店: 18.3, 北京店: 10.3, 广州店: 8.0, 深圳店: 4.9 },
	{ month: "Nov", 上海店: 13.9, 北京店: 6.6, 广州店: 6.0, 深圳店: 6.9 },
	{ month: "Dec", 上海店: 9.6, 北京店: 4.8, 广州店: 4.0, 深圳店: 2.9 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
	type: "fold",
	fields: ["上海店", "北京店", "广州店", "深圳店"],
	key: "city",
	value: "temperature"
});
const data = dv.rows;

const scale = [
	{
		dataKey: "month",
		min: 0,
		max: 1
	}
];

export default {
	data() {
		return {
			data,
			scale,
			height: 400,
			style: { stroke: "#fff", lineWidth: 1 }
		};
	}
};
</script>
