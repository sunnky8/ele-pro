<template>
    <div>
        <div class="chart-row">
            <div class="el-card-item">
                <div class="el-card-wrap">
                    <elp-card title="访问量">
                        <div class="chart-wrap">
                            <div class="num">
                                <div>
                                    <gradient :value="totalSales"></gradient>
                                </div>
                                <div>
                                    <span>日访问量：</span>
                                    <gradient :value="orderData.day"></gradient>
                                </div>
                            </div>
                            <div class="chart chart-bar">
                                <mini-rotate-bar-chart></mini-rotate-bar-chart>
                            </div>
                        </div>
                    </elp-card>
                </div>
                <div class="el-card-wrap">
                    <elp-card title="下单量">
                        <div class="chart-wrap">
                            <div class="num">
                                <div>
                                    <gradient :value="orderData.total"></gradient>
                                </div>
                                <div>
                                    <span>日下单量：</span>
                                    <gradient :value="orderData.day"></gradient>
                                </div>
                            </div>
                            <div class="chart chart-bar">
                                <mini-bar-chart></mini-bar-chart>
                            </div>
                        </div>
                    </elp-card>
                </div>
            </div>
            <div class="el-card-item">
                <div class="el-card-wrap">
                    <elp-card title="销售额">
                        <div class="chart-wrap">
                            <div class="num">
                                <div>
                                    <gradient :value="visitsData.total"></gradient>
                                </div>
                                <div>
                                    <span>日销售额：</span>
                                    <gradient :value="visitsData.day"></gradient>
                                </div>
                            </div>
                            <div class="chart chart-area">
                                <mini-area-chart></mini-area-chart>
                            </div>
                        </div>
                    </elp-card>
                </div>
                <div class="el-card-wrap">
                    <elp-card title="广告引流">
                        <div class="chart-wrap">
                            <div class="num">
                                <div>
                                    <gradient :value="orderData.total"></gradient>
                                </div>
                                <div>
                                    <span>转化率：</span>
                                    <span>86%</span>
                                </div>
                            </div>

                            <div class="progress">
                                <el-progress
                                    :text-inside="true"
                                    type="line"
                                    color="#13baba"
                                    :stroke-width="18"
                                    :percentage="86"
                                ></el-progress>
                            </div>
                        </div>
                    </elp-card>
                </div>
            </div>
        </div>
        <div class="elp-chart-wrap">
            <div class="elp-chart-basic-bar">
                <elp-card title="月销售额">
                    <basic-histogram-chart></basic-histogram-chart>
                </elp-card>
            </div>
            <div class="elp-chart-pie">
                <elp-card title="分类商品销售 TOP 5">
                    <pie-chart></pie-chart>
                </elp-card>
            </div>
        </div>
        <elp-card title="门店经营状况">
            <line-chart></line-chart>
        </elp-card>
    </div>
</template>

<script>
import ElpCard from "../../components/ElpCard.vue";
import Gradient from "../../components/Gradient.vue";
import LineChart from "../charts/line.vue";
import PieChart from "../charts/pie.vue";
import basicHistogramChart from "../charts/basicHistogram.vue";
import MiniBarChart from "../charts/miniBar.vue";
import MiniAreaChart from "../charts/miniArea.vue";
import MiniRotateBarChart from "../charts/miniRotateBar.vue";
export default {
    name: "analysis",
    components: {
        ElpCard,
        Gradient,
        LineChart,
        MiniRotateBarChart,
        MiniBarChart,
        basicHistogramChart,
        MiniAreaChart,
        PieChart
    },
    data() {
        return {
            totalSales: 392324,
            orderData: {
                total: 115802,
                day: 1818
            },
            visitsData: {
                total: 235881,
                day: 2825
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.chart-box {
    margin: 0px 22px;
}
.chart-row {
    display: flex;
    justify-content: space-between;
    .el-card-item {
        width: 50%;
        display: flex;
    }
    .el-card-wrap {
        width: 50%;
    }
}
.placeholder {
    height: 10px;
}
.chart-wrap {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .num {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .num > div:first-child {
        font-size: 28px;
    }
    .chart {
        position: relative;
    }
    .progress {
        position: relative;
        height: 63px;
        top: 36px;
    }
    .summary {
        position: relative;
        padding-left: 10px;
        padding-bottom: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 54px;
        .summary-item {
            padding: 0 40px 0 0;
            display: flex;
            justify-content: space-between;
        }
        .summary-up {
            color: #49bc19;
        }
        .summary-down {
            color: #ee3559;
        }
        span {
            display: inline-block;
        }
    }
}
.elp-chart-wrap{
    display: flex;
    .elp-chart-basic-bar{
        width: 65%;
    }
    .elp-chart-pie{
        width: 35%
    }
}
@media only screen and (max-width: 1400px) {
    .chart-row {
        display: block;
        .el-card-item {
            width: 100%;
            display: flex;
        }
    }
    .elp-chart-wrap{
        display: flex;
        .elp-chart-basic-bar{
            width: 50%;
        }
        .elp-chart-pie{
            width: 50%
        }
    }
}
@media only screen and (max-width: 832px) {
    .chart-row {
        display: block;
        .el-card-item {
            width: 100%;
            display: block;
        }
        .el-card-wrap {
            width: 100%;
        }
    }
    .elp-chart-wrap{
        display: block;
        .elp-chart-basic-bar{
            width: 100%;
        }
        .elp-chart-pie{
            width: 100%
        }
    }
}
</style>
<style lang="scss">
.el-progress-bar__outer {
    border-radius: 0;
}
.el-progress-bar__inner {
    border-radius: 0;
}
.elp-card-wrap {
    margin-right: 10px;
}
</style>
