<template>
    <div class="elp-app-main-wrap">
        <div class="elp-desc-list">
            <div class="elp-desc-list-head">退款申请</div>
            <div class="elp-desc-list-row">
                <div class="row-item">
                    <h6>取货单号：</h6>
                    <span>1293434534</span>
                </div>
                <div class="row-item">
                    <h6>订单状态：</h6>
                    <span>已取货</span>
                </div>
                <div class="row-item">
                    <h6>销售单号：</h6>
                    <span>4324235453</span>
                </div>
            </div>
            <div class="elp-desc-list-row">
                <div class="row-item">
                    <h6>子订单号：</h6>
                    <span>76829343455</span>
                </div>
            </div>
        </div>
        <div class="elp-desc-list">
            <div class="elp-desc-list-head">用户信息</div>
            <div class="elp-desc-list-row">
                <div class="row-item">
                    <h6>用户姓名：</h6>
                    <span>江小北</span>
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
                    <h6>备注信息：</h6>
                    <span>无</span>
                </div>
                 <div class="row-item"></div>
            </div>
        </div>
        <div class="elp-desc-list">
            <div class="elp-desc-list-head">退货商品</div>
            <div class="elp-desc-list-table-row">
                <el-table :data="tableData6" show-summary style="width: 100%">
                    <el-table-column prop="id" label="ID" width="180"></el-table-column>
                    <el-table-column prop="name" label="商品"></el-table-column>
                    <el-table-column prop="amount1" sortable label="总价格"></el-table-column>
                    <el-table-column prop="amount2" sortable label="优惠额"></el-table-column>
                    <el-table-column prop="amount3" sortable label="数量"></el-table-column>
                </el-table>
            </div>
        </div>
        <div class="elp-desc-list">
            <div class="elp-desc-list-head">退货状态</div>
            <div class="elp-desc-list-table-row">
                <el-table :data="tableData6" style="width: 100%">
                    <el-table-column prop="date" label="时间" width="180"></el-table-column>
                    <el-table-column prop="id" label="单号"></el-table-column>
                    <el-table-column prop="amount1" sortable label="总价格"></el-table-column>
                    <el-table-column prop="status" sortable label="状态"></el-table-column>
                    <el-table-column prop="operator" sortable label="操作员"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData6: [
                {
                    id: "12987122",
                    name: "怡宝矿泉水 500ml",
                    amount1: "234",
                    amount2: "3.2",
                    date: "2018-10-01",
                    status: "成功",
                    operator: "王小二",
                    amount3: 10
                },
                {
                    id: "12987123",
                    name: "火腿肠 200g",
                    amount1: "165",
                    amount2: "4.43",
                    date: "2018-10-02",
                    status: "退款中",
                    operator: "王小二",
                    amount3: 12
                },
                {
                    id: "12987124",
                    name: "泡面桶装 250g",
                    amount1: "324",
                    amount2: "1.9",
                    date: "2018-10-03",
                    status: "成功",
                    operator: "王小二",
                    amount3: 9
                },
                {
                    id: "12987125",
                    name: "三得利奶茶",
                    amount1: "621",
                    amount2: "2.2",
                    date: "2018-10-04",
                    status: "成功",
                    operator: "王小二",
                    amount3: 17
                },
                {
                    id: "12987126",
                    name: "手工刀削面",
                    amount1: "539",
                    amount2: "4.1",
                    date: "2018-10-05",
                    status: "退款中",
                    operator: "王小二",
                    amount3: 15
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
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
@media only screen and (max-width: 650px){
    .elp-card-body {
        padding: 20px 8px;
        color: #666;
    }
    .elp-desc-list .elp-desc-list-row{
        display: block;
    }
}
</style>
<style lang="scss">
.el-table th {
    background: #f9f9f9;
}
</style>
