<template>
    <div class="chart-box">
        <v-chart :forceFit="true" padding="auto" :height="height" :data="data" :scale="scale">
            <v-tooltip/>
            <v-axis/>
            <v-bar position="year*sales"/>
        </v-chart>
    </div>
</template>

<script>
const data = [
    { year: "1月", sales: 38 },
    { year: "2月", sales: 52 },
    { year: "3月", sales: 61 },
    { year: "4月", sales: 95 },
    { year: "5月", sales: 48 },
    { year: "6月", sales: 68 },
    { year: "7月", sales: 48 },
    { year: "8月", sales: 91 },
    { year: "9月", sales: 58 },
    { year: "10月", sales: 69 },
    { year: "11月", sales: 40 },
    { year: "12月", sales: 81 }
];

const scale = [
    {
        dataKey: "sales",
        tickInterval: 20
    }
];

export default {
    data() {
        return {
            data,
            scale,
            height: 300
        };
    }
};
</script>
