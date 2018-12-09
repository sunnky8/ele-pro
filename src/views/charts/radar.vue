<template>
    <div>
        <v-chart :forceFit="true" padding='auto' height="302" :data="data" :scale="scale">
            <v-tooltip/>
            <v-axis
                :dataKey="axis1Opts.dataKey"
                :line="axis1Opts.line"
                :tickLine="axis1Opts.tickLine"
                :grid="axis1Opts.grid"
            />
            <v-axis
                :dataKey="axis2Opts.dataKey"
                :line="axis2Opts.line"
                :tickLine="axis2Opts.tickLine"
                :grid="axis2Opts.grid"
            />
            <v-legend data-key="user" marker="circle" :offset="30"/>
            <v-coord type="polar" radius="0.8"/>
            <v-line position="item*score" color="user" :size="2"/>
            <v-point position="item*score" color="user" :size="4" shape="circle"/>
        </v-chart>
    </div>
</template>

<script>
const DataSet = require("@antv/data-set");

const sourceData = [
    { item: "产品经理", 'antd': 70, 'angular': 30, 'bootstrap': 60, 'alipay': 63 },
    { item: "UI", 'antd': 60, 'angular': 70 , 'bootstrap': 30, 'alipay': 53 },
    { item: "后端", 'antd': 50, 'angular': 60, 'bootstrap': 40, 'alipay': 63  },
    { item: "前端", 'antd': 40, 'angular': 50 , 'bootstrap': 70, 'alipay': 53 },
    { item: "测试", 'antd': 60, 'angular': 70 , 'bootstrap': 50, 'alipay': 43 },
    { item: "架构师", 'antd': 70, 'angular': 50, 'bootstrap': 40, 'alipay': 53  },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
    type: "fold",
    fields: ["antd", "angular", "bootstrap", "alipay" ],
    key: "user",
    value: "score"
});
const data = dv.rows;

const scale = [
    {
        dataKey: "score",
        min: 0,
        max: 80
    }
];

const axis1Opts = {
    dataKey: "item",
    line: null,
    tickLine: null,
    grid: {
        lineStyle: {
            lineDash: null
        },
        hideFirstLine: false
    }
};
const axis2Opts = {
    dataKey: "score",
    line: null,
    tickLine: null,
    grid: {
        type: "polygon",
        lineStyle: {
            lineDash: null
        }
    }
};

export default {
    data() {
        return {
            data,
            scale,
            axis1Opts,
            axis2Opts,
            padding: [20, 20, 95, 20]
        };
    }
};
</script>
