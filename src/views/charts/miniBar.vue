<template>
    <div>
        <v-chart
            :forceFit="true"
            padding="auto"
            :height="data.height"
            :width="data.width"
            :data="data.data"
            :scale="data.scale"
        >
            <v-tooltip/>
            <v-legend/>
            <v-bar position="year*sales" color="#975FE4"/>
        </v-chart>
    </div>
</template>

<script>
export default {
	data() {
		return {
			data: {
				total: 115802,
				day: 1818,
				data: [
					{ year: "1951 年", sales: 138 },
					{ year: "1952 年", sales: 52 },
					{ year: "1956 年", sales: 61 },
					{ year: "1957 年", sales: 85 },
					{ year: "1958 年", sales: 48 },
					{ year: "1959 年", sales: 38 },
					{ year: "1960 年", sales: 68 },
					{ year: "1962 年", sales: 28 },
					{ year: "1964 年", sales: 98 },
					{ year: "1966 年", sales: 52 },
					{ year: "1968 年", sales: 70 },
					{ year: "1970 年", sales: 90 },
					{ year: "1972 年", sales: 66 },
					{ year: "1974 年", sales: 22 },
					{ year: "1976 年", sales: 81 },
					{ year: "1978 年", sales: 135 }
				],
				height: 60,
				width: 460
			}
		};
	}
};
</script>
