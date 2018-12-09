<template>
    <div>
        <div class="elp-header-wrap">
            <div class="elp-header-img">
                <span>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png">
                </span>
                <span>
                    <div>早安，Serati Ma，祝你开心每一天</div>
                    <div>交互专家 | 某某公司-某某平台部－某某技术部－UED</div>
                </span>
            </div>
            <div class="elp-header-extra">
                <div>
                    <div>项目数</div>
                    <div>50</div>
                </div>
                <div>
                    <div>排名</div>
                    <div>4/28</div>
                </div>
                <div>
                    <div>访问量</div>
                    <div>2350</div>
                </div>
            </div>
        </div>
        <div class="elp-card-grid">
            <div class="elp-card-grid-head">进行中的项目</div>
            <div class="elp-card-grid-body">
                <div v-for="item in tableData5" :key="item" class="elp-card-grid-item-wrap">
                    <div class="elp-card-grid-item">
                        <div>
                            <img :src="item.img">
                            <span>{{item.project}}</span>
                        </div>
                        <div>那是一种内在的东西，他们到达不了，也无法触及的</div>
                        <div>
                            <span>科学搬砖组</span>
                            <span>19小时前</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="elp-card-grid-body">
                <div v-for="item in tableData5" :key="item" class="elp-card-grid-item-wrap">
                    <div class="elp-card-grid-item">
                        <div>
                            <img :src="item.img">
                            <span>{{item.project}}</span>
                        </div>
                        <div>那是一种内在的东西，他们到达不了，也无法触及的</div>
                        <div>
                            <span>科学搬砖组</span>
                            <span>19小时前</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elp-list-and-card">
            <div class="elp-list-wrap">
                <elp-card title="动态">
                    <div class="elp-list-item" v-for="item in tableData6" :key="item">
                        <div class="elp-list-item-avatar">
                            <img width="40" height="40" :src="item.img">
                        </div>
                        <div class="elp-list-item-content">
                            <div class="elp-list-item-content-title">
                                <span>{{item.name}}</span> 在
                                <span>{{item.project}}</span> 完成
                                <span>{{item.address}}</span>
                            </div>
                            <div class="elp-list-item-content-date">{{item.date}}</div>
                        </div>
                    </div>
                </elp-card>
            </div>
            <div class="elp-work-group">
                <elp-card title="团队指数">
                    <radar-chart></radar-chart>
                </elp-card>
                <elp-card title="团队分组">
                    <div class="elp-work-group-wrap">
                        <div class="elp-work-group-item" v-for="item in tableData5" :key="item">
                            <img width="30" height="30" :src="item.img">
                            <span>{{item.project}}</span>
                        </div>
                    </div>
                </elp-card>
            </div>
        </div>
    </div>
</template>
<script>
import ElpCard from "../../components/ElpCard.vue";
import RadarChart from "../charts/radar.vue";
export default {
    components: {
        ElpCard,
        RadarChart
    },
    data() {
        return {
            tableData5: [
                {
                    name: "王小二",
                    desc: "支付宝P10网络安全组组长",
                    address: "支付宝5.8升级发布",
                    tag: 70,
                    project: "ALipay",
                    date: "2018-10-01",
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                },
                {
                    name: "李富贵",
                    desc: "Angluar中国区副总裁",
                    address: "Angluar6.0更新",
                    tag: 78,
                    project: "Angular",
                    date: "2018-10-02",
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
                },
                {
                    name: "苏丽丽",
                    desc: "Antd杭州西湖区总站长",
                    address: "Antd组件升级",
                    tag: 63,
                    project: "Ant-design",
                    date: "2018-10-03",
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
                },
                {
                    name: "江小北",
                    desc: "Bootstrap上海闵行区组长",
                    address: "Bootstrap ts优化",
                    tag: 86,
                    project: "Bootstrap",
                    date: "2018-10-04",
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
                }
            ],
            tableData6: []
        };
    },
    mounted() {
        let tableData = Object.assign([], this.tableData5);
        console.log("tableData", tableData)
        tableData.push({
            name: "王小二",
            desc: "支付宝P10网络安全组组长",
            address: "支付宝5.8升级发布",
            tag: 70,
            project: "ALipay",
            date: "2018-10-01",
            img:
                "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
        });
        tableData.push({
            name: "李富贵",
            desc: "Angluar中国区副总裁",
            address: "Angluar6.0更新",
            tag: 78,
            project: "Angular",
            date: "2018-10-02",
            img:
                "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
        });
        console.log("tableData", tableData)
        this.tableData6 = tableData;
    }
};
</script>

<style lang="scss" scoped>
.elp-header-wrap {
    background: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .elp-header-img {
        display: flex;
        img {
            height: 74px;
            width: 74px;
            border-radius: 50%;
        }
        > :nth-child(2) {
            margin-left: 20px;
            :first-child {
                line-height: 38px;
                font-size: 18px;
            }
            :last-child {
                line-height: 40px;
                font-size: 14px;
                color: #666;
            }
        }
    }
    .elp-header-extra {
        display: flex;
        flex-direction: row;
        > div {
            border-right: 1px #eee solid;
            :first-child {
                color: #666;
            }
            div {
                text-align: center;
                padding: 8px 14px;
            }
        }
        :last-child {
            border-right: none;
        }
    }
}

.elp-card-grid {
    margin-top: 20px;
    background: #fff;
    padding: 20px 20px;
    .elp-card-grid-head {
        line-height: 50px;
        border-bottom: 1px #eee solid;
    }
    .elp-card-grid-body {
        color: #999;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 0;
        .elp-card-grid-item-wrap {
            width: 25%;
            .elp-card-grid-item {
                border-bottom: 1px #eee solid;
                padding: 20px;
                > div:first-child {
                    display: flex;
                    align-items: center;
                    color: #333;
                    width: 100%;
                    img {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }
                    span {
                        display: inline-block;
                        margin-left: 10px;
                        line-height: 24px;
                    }
                    margin-bottom: 20px;
                }
                > div:nth-child(2) {
                    font-size: 14px;
                }
                > div:last-child {
                    font-size: 12px;
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        .elp-card-grid-item-wrap:nth-child(n) {
            .elp-card-grid-item {
                border-left: 1px #eee solid;
            }
        }
        .elp-card-grid-item-wrap:nth-child(4) {
            .elp-card-grid-item {
                border-right: 1px #eee solid;
            }
        }
    }
}
.elp-list-and-card {
    display: flex;
    margin-top: 10px;
    .elp-list-wrap {
        width: 100%;
        .elp-list-item {
            display: flex;
            border-bottom: 1px #eee solid;
            padding: 14px;
            color: #666;
            .elp-list-item-avatar {
                width: 40px;
                height: 40px;
                img {
                    border-radius: 50%;
                }
            }
            .elp-list-item-content {
                padding-left: 20px;
                line-height: 26px;
                .elp-list-item-content-title {
                    span:nth-child(2) {
                        color: #3892f7;
                    }
                    span:nth-child(3) {
                        color: #3892f7;
                    }
                }
                .elp-list-item-content-date {
                    color: #999;
                }
            }
        }
    }
    .elp-work-group {
        margin-left: 10px;
        width: 40%;
        .elp-work-group-wrap {
            display: flex;
            flex-wrap: wrap;
            color: #666;
            span {
                margin-left: 10px;
            }
            .elp-work-group-item {
                display: flex;
                align-items: center;
                padding: 10px 0;
                width: 50%;
                img {
                    margin-left: 20px;
                    border-radius: 50%;
                }
            }
        }
    }
}
@media only screen and (max-width: 1350px) {
    .elp-card-grid .elp-card-grid-body .elp-card-grid-item-wrap {
        width: 50%;
        &:nth-child(2) {
            .elp-card-grid-item {
                border-right: 1px #eee solid;
            }
        }
    }
}
@media only screen and (max-width: 1100px) {
    .elp-list-and-card {
        display: block;
        .elp-work-group {
            margin-left: 0;
            width: 100%;
        }
    }
}
@media only screen and (max-width: 950px) {
    .elp-header-wrap {
        display: block;
        .elp-header-extra {
            margin-top: 20px;
        }
    }
}
@media only screen and (max-width: 800px) {
    .elp-header-wrap {
        .elp-header-img {
            display: block;
        }
        .elp-header-extra {
            margin-top: 0;
        }
    }
    .elp-card-grid .elp-card-grid-body .elp-card-grid-item-wrap {
        width: 100%;
        &:nth-child(n) {
            .elp-card-grid-item {
                border-right: 1px #eee solid;
            }
        }
    }
}
@media only screen and (max-width: 600px) {
    .elp-card-grid {
        .elp-card-grid-body {
            display: block;
        }
    }
}
</style>
