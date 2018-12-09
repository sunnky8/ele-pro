<template>
    <v-chart
        :forceFit="true"
        padding="auto"
        :height="data.height"
        :width="data.width"
        :data="data.data"
        :scale="data.scale"
    >
        <v-tooltip/>
        <v-line position="year*value" :size="2"/>
        <v-area position="year*value"/>
    </v-chart>
</template>

<script>
export default {
	data() {
		return {
			data: {
				total: 235881,
				day: 2825,
				data: [
					{ year: "1991", value: 15468 },
					{ year: "1992", value: 16100 },
					{ year: "1993", value: 15900 },
					{ year: "1994", value: 17409 },
					{ year: "1995", value: 17000 },
					{ year: "1996", value: 31056 },
					{ year: "1997", value: 31982 },
					{ year: "1998", value: 32040 },
					{ year: "1999", value: 33233 },
					{ year: "2000", value: 31056 },
					{ year: "2001", value: 31982 },
					{ year: "2002", value: 32040 },
					{ year: "2003", value: 33233 },
					{ year: "2004", value: 31056 },
					{ year: "2005", value: 31982 },
					{ year: "2006", value: 32040 },
					{ year: "2007", value: 33233 }
				],
				scale: [
					{
						dataKey: "value",
						min: 10000
					},
					{
						dataKey: "year",
						min: 0,
						max: 1
					}
				],
				height: 60,
				width: 460
			}
		};
	}
};
</script>
