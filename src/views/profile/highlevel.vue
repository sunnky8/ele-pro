<template>
    <div>
        <elp-card title="流程进度">
            <div class="elp-card-body">
                <el-steps :active="active" finish-status="success">
                    <el-step title="创建项目">
                        <div slot="description" :class="['text-secondary', 'step-description']">
                            <div>曲丽丽
                                <ant-icon type="dingding-o" :style="{marginLeft: '8px'}"/>
                            </div>
                            <div>2016-12-12 12:32</div>
                        </div>
                    </el-step>
                    <el-step title="部门初审">
                        <div slot="description" :class="['text-secondary', 'step-description']">
                            <div>周毛毛
                                <ant-icon
                                    type="dingding-o"
                                    :style="{color: '#00A0E9', marginLeft: '8px'}"
                                />
                            </div>
                            <div>
                                <a href>催一下</a>
                            </div>
                        </div>
                    </el-step>
                    <el-step title="财务复核" description="吴晓晓"></el-step>
                    <el-step title="完成" description="杜悦悦"></el-step>
                </el-steps>
            </div>
        </elp-card>
        <elp-card title="用户信息">
            <div class="elp-desc-list">
                <div class="elp-desc-list-row">
                    <div class="row-item">
                        <h6>用户姓名：</h6>
                        <span>曲筱筱</span>
                    </div>
                    <div class="row-item">
                        <h6>会员卡号：</h6>
                        <span>3435436457657657</span>
                    </div>
                    <div class="row-item">
                        <h6>身份证号：</h6>
                        <span>4123244324235453</span>
                    </div>
                </div>
                <div class="elp-desc-list-row">
                    <div class="row-item">
                        <h6>联系方式：</h6>
                        <span>17682934345</span>
                    </div>
                    <div class="row-item">
                        <h6>联系地址：</h6>
                        <span>浙江省杭州市西湖区黄姑山路工专路交叉路口</span>
                    </div>
                    <div class="row-item"></div>
                </div>
            </div>
            <div class="elp-desc-list">
                <div class="elp-desc-list-head">用户信息</div>
                <div class="elp-desc-list-row">
                    <div class="row-item">
                        <h6>用户姓名：</h6>
                        <span>12934345345</span>
                    </div>
                    <div class="row-item">
                        <h6>联系电话：</h6>
                        <span>1224343535</span>
                    </div>
                    <div class="row-item">
                        <h6>常用快递：</h6>
                        <span>百世快递</span>
                    </div>
                </div>
                <div class="elp-desc-list-row">
                    <div class="row-item">
                        <h6>取货地址：</h6>
                        <span>上海市闵行区七宝宝龙城</span>
                    </div>
                    <div class="row-item">
                        <h6>备注：</h6>
                        <span>无</span>
                    </div>
                    <div class="row-item"></div>
                </div>
            </div>
            <div class="elp-mutil-level">
                <div class="elp-mutil-level-head">多层级信息组</div>
                <div class="elp-mutil-level-body">
                    <div class="elp-desc-list">
                        <div class="elp-desc-list-head">组名称</div>
                        <div class="elp-desc-list-row">
                            <div class="row-item">
                                <h6>负责人：</h6>
                                <span>林晓东</span>
                            </div>
                            <div class="row-item">
                                <h6>角色码：</h6>
                                <span>3435436457657657</span>
                            </div>
                            <div class="row-item">
                                <h6>所属部门：</h6>
                                <span>XX公司 - YY部</span>
                            </div>
                        </div>
                        <div class="elp-desc-list-row">
                            <div class="row-item">
                                <h6>过期时间：</h6>
                                <span>2018-10-01</span>
                            </div>
                            <div class="row-item">
                                <h6>描述：</h6>
                                <span>这是一段很长的描述</span>
                            </div>
                            <div class="row-item"></div>
                        </div>
                        <div class="elp-desc-list-line"></div>
                    </div>
                    <div class="elp-desc-list">
                        <div class="elp-desc-list-head">组名称</div>
                        <div class="elp-desc-list-row">
                            <div class="row-item" style="flex-grow: 1">
                                <h6>学名：</h6>
                                <span>Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</span>
                            </div>
                        </div>
                        <div class="elp-desc-list-line"></div>
                    </div>
                    <div class="elp-desc-list">
                        <div class="elp-desc-list-head">组名称</div>
                        <div class="elp-desc-list-row">
                            <div class="row-item">
                                <h6>负责人：</h6>
                                <span>付晓晓</span>
                            </div>
                            <div class="row-item">
                                <h6>角色码：</h6>
                                <span>1234235</span>
                            </div>
                            <div class="row-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </elp-card>
        <elp-card title="操作日志">
            <div class="elp-table">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="province" label="省份"></el-table-column>
                    <el-table-column prop="city" label="城市"></el-table-column>
                    <el-table-column prop="zip" label="邮政编码"></el-table-column>
                    <el-table-column prop="address" label="地址" width="250"></el-table-column>
                </el-table>
            </div>
        </elp-card>
    </div>
</template>
<script>
import ElpCard from "../../components/ElpCard.vue";
import AntIcon from "../../components/AntIcon.vue";
export default {
    data() {
        return {
            active: 1,
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                }
            ]
        };
    },
    components: {
        ElpCard,
        AntIcon
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.elp-card-body {
    padding: 20px 100px;
    color: #666;
    a {
        color: #00a0e9;
    }
}
.elp-desc-list {
    padding: 10px 10px;
    color: #666;
    font-size: 14px;
    span {
        color: #777;
    }
    .elp-desc-list-head {
        color: #000;
        font-size: 15px;
        line-height: 60px;
    }
    .elp-desc-list-row {
        line-height: 30px;
        display: flex;
        h6 {
            font-size: 14px;
            margin: 0;
        }
        .row-item {
            display: flex;
            width: 100%;
        }
    }
}
@media only screen and (max-width: 780px){
    .elp-card-body {
        padding: 20px 8px;
        color: #666;
    }
    .elp-desc-list .elp-desc-list-row{
        display: block;
    }
}
.elp-mutil-level {
    margin: 20px;
    border: 1px #eee solid;
    .elp-mutil-level-head {
        padding: 4px 30px;
        background: #f9f9f9;
        line-height: 50px;
    }
    .elp-mutil-level-body {
        padding: 0 20px;
    }
    .elp-desc-list-line {
        border-bottom: 1px #eee solid;
    }
}
.elp-table{
    padding: 10px 30px;

}
</style>
<style lang="scss">
.el-step__head.is-success {
    color: #00a0e9;
    border-color: #00a0e9;
}
.el-step__title.is-success {
    color: #333;
}
.el-step__description.is-success {
    color: #333;
}
.elp-table{
    .el-table th {
        background: #f9f9f9;
    }
}
</style>
