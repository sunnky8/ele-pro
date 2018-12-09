<template>
    <div>
        <div class="elp-card-row">
            <elp-card title="实时交易情况">
                <div class="elp-card-img-wrap">
                    <div class="elp-card-img-label">
                        <span>
                            <div>今日交易总额</div>
                            <div>{{convert(totalSales)}}</div>
                        </span>
                        <span>
                            <div>销售目标完成率</div>
                            <div>80%</div>
                        </span>
                        <span>
                            <div>每小时交易额</div>
                            <div>{{convert(hourSales)}}</div>
                        </span>
                    </div>
                    <div class="elp-card-img">
                        <img width="100%" src="../../assets/world.png">
                    </div>
                </div>
            </elp-card>
            <div class="elp-progress">
                <div>统计率</div>
                <div class="elp-progress-item">
                    <div>
                        <span>交易额上升率</span>
                        <el-progress
                            :text-inside="true"
                            type="line"
                            color="#13baba"
                            :stroke-width="18"
                            :percentage="saleRate"
                        ></el-progress>
                    </div>
                    <div>
                        <span>用户增长率</span>
                        <el-progress
                            :text-inside="true"
                            type="line"
                            :stroke-width="18"
                            :percentage="userRate"
                        ></el-progress>
                    </div>
                    <div>
                        <span>季度任务完成量</span>
                        <el-progress
                            :text-inside="true"
                            type="line"
                            status="success"
                            :stroke-width="18"
                            :percentage="quarterRate"
                        ></el-progress>
                    </div>
                </div>
            </div>
        </div>
        <div class="elp-chart-wrap">
            <div class="elp-chart-item">
                <elp-card title="实时交易额">
                    <div class="elp-chart-label">
                        <div class="elp-label-text">
                            <span>每十分钟交易额:</span>
                            <span>{{convert(tenMinutesSales)}}</span>
                        </div>
                        <div class="elp-label-text">
                            <span>每秒钟交易额:</span>
                            <span>{{convert(timeSale)}}</span>
                        </div>
                        <div>
                            <v-chart
                                :force-fit="true"
                                :height="height"
                                :data="data"
                                :padding="36"
                                :scale="scale"
                            >
                                <v-axis data-key="year" :show="false"/>
                                <v-tooltip/>
                                <v-line position="year*value" :size="2"/>
                                <v-area position="year*value"/>
                            </v-chart>
                        </div>
                    </div>
                </elp-card>
            </div>
            <div class="elp-chart-item">
                <elp-card title="产品实时合格率">
                    <div class="elp-label-label">
                        <div>
                            <dash-chart></dash-chart>
                        </div>
                    </div>
                </elp-card>
            </div>
        </div>
    </div>
</template>
<script>
import convert from "../../utils/util.js";
import ElpCard from "../../components/ElpCard.vue";
import DashChart from "../charts/dash.vue";
import { setTimeout } from "timers";
const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 }
];

const scale = [
    {
        dataKey: "value",
        min: 1
    },
    {
        dataKey: "year",
        min: 0,
        max: 1
    }
];
export default {
    name: "monitor",
    components: {
        ElpCard,
        DashChart
    },
    data() {
        return {
            tenMinutesSales: 2345,
            totalSales: 2132414,
            hourSales: 12134,
            data,
            scale,
            height: 200,
            timeSale: 23,
            saleRate: 81,
            userRate: 73,
            quarterRate: 88,
            timer: null
        };
    },
    methods: {
        convert: convert,
        loopData() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.timeSale = Math.floor(Math.random() * 10 + 1);
                for (var k = 0; k < this.data.length; k++) {
                    this.data[k].value = Math.floor(Math.random() * 10 + 1);
                    // if (k < this.data.length - 1) {
                    // 	this.data[k].value = this.data[k + 1].value;
                    // } else {
                    // 	this.data[k].value = this.data[k].value + this.timeSale;
                    // }
                }
                this.tenMinutesSales = this.tenMinutesSales + this.timeSale;
                this.totalSales = this.totalSales + this.timeSale;
                this.hourSales = this.hourSales + this.timeSale;
                this.saleRate = 70 + Math.floor(Math.random() * 20);
                this.userRate = 70 + Math.floor(Math.random() * 20);
                this.loopData();
            }, 1000);
        }
    },
    mounted() {
        this.loopData();
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>
<style lang="scss" scoped>
.elp-card-row {
    display: flex;
    .elp-card-img-wrap {
        .elp-card-img-label {
            display: flex;
            justify-content: space-around;
            color: #666;
            div ~ div {
                font-size: 24px;
                color: #555;
            }
        }
        .elp-card-img{
            padding: 20px 80px;
        }   
    }
    .elp-progress {
        width: 30%;
        padding: 10px 30px;
        background: #fff;
        margin-bottom: 10px;
        margin-right: 10px;
        & > div:first-child {
            text-align: center;
            font-size: 20px;
        }
        color: #666;
        .elp-progress-item {
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            span {
                line-height: 50px;
            }
        }
        }
}
.elp-chart-wrap {
    display: flex;
    .elp-chart-item {
        width: 50%;
        .elp-chart-label {
            height: 303px;
            .elp-label-text {
                padding-left: 14px;
            }
            span {
                &:first-child {
                    display: inline-block;
                    width: 140px;
                }
                &:last-child {
                    font-size: 30px;
                }
            }
        }
    }
}
@media only screen and (max-width: 1200px) {
    .elp-card-row {
        display: block;
        .elp-progress {
            width: auto;
        }
    }
}
@media only screen and (max-width: 1100px) {
    .elp-card-row {
        .elp-card-img-wrap {
            .elp-card-img{
                padding: 10px;
            }
        }
    }
    .elp-chart-wrap {
        display: block;
        .elp-chart-item {
            width: 100%;
        }
    }
}
@media only screen and (max-width: 700px) {
    .elp-card-row {
        .elp-card-img-wrap {
            .elp-card-img-label {
                display: block;
            }
        }
    }
}
</style>
<style>
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
