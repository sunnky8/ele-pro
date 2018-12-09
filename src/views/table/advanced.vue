<template>
    <div class="elp-app-main-wrap">
        <div class="elp-advance-wrap">
            <div class="elp-advance-title">高级列表</div>
            <div style="margin-bottom: 15px;">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="商户地址" value="1"></el-option>
                        <el-option label="商品名称" value="2"></el-option>
                        <el-option label="商品ID" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        <el-table
            :data="tableData5"
            :show-header="false"
            style="width: 100%"
            v-loading="loading"
            element-loading-text="Loading"
        >
            <el-table-column label="商品 ID" prop="id" width="250">
                <template slot-scope="scope">
                    <div style="display: flex; flex: 1 1">
                        <div>
                            <div style="width: 48px; height:48px;">
                                <img width="48" height="48" v-bind:src="scope.row.img">
                            </div>
                        </div>
                        <div class="elp-advance-table-row">
                            <!-- <div class="elp-advance-table-row-2"> -->
                                <div>{{ scope.row.shopId }}</div>
                            <!-- </div> -->
                            <!-- <div class="elp-advance-table-row-1"> -->
                                <div>{{ scope.row.desc }}</div>
                            <!-- </div> -->
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.category }}</p>
                        <p>住址: {{ scope.row.shop }}</p>
                        <div slot="reference" class="name-wrapper">
                            {{ scope.row.name }}
                            <!-- <el-tag size="medium">{{ scope.row.name }}</el-tag> -->
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="地址" prop="address">
                <template slot-scope="scope">
                    <div class="elp-advance-table-row-2">{{scope.row.address}}</div>
                </template>
            </el-table-column>
            <el-table-column label="描述" prop="desc">
                <template slot-scope="props">
                    <el-progress :percentage="props.row.tag"></el-progress>
                </template>
            </el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="所属店铺">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="商品 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                            <span>{{ props.row.shopId }}</span>
                        </el-form-item>
                        <el-form-item label="商品分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
        </el-table>
        <div class="load-more">
            <el-button @click="handleLoadMore" plain>加载更多</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input5: "",
            select: "",
            tableData5: [
                {
                    id: "12987122",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 70,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                },
                {
                    id: "12987123",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 78,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
                },
                {
                    id: "12987125",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 63,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
                },
                {
                    id: "12987126",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 86,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
                },
                {
                    id: "12987122",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 91,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                },
                {
                    id: "12987123",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 76,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
                },
                {
                    id: "12987125",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 66,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
                },
                {
                    id: "12987126",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 79,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
                },
                {
                    id: "12987122",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 85,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                },
                {
                    id: "12987123",
                    name: "好滋好味鸡蛋仔",
                    category: "江浙小吃、小吃零食",
                    desc: "荷兰优质淡奶，奶香浓而不腻",
                    address: "上海市普陀区真北路",
                    shop: "王小虎夫妻店",
                    shopId: "10333",
                    tag: 90,
                    img:
                        "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
                }
            ],
            loading: false
        };
    },
    methods: {
        handleLoadMore() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.tableData5 = this.tableData5.concat(
                    this.tableData5.slice(0, 4)
                );
            }, 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
.elp-advance-title {
    font-size: 15px;
    color: #333;
    height: 60px;
    line-height: 60px;
}
.elp-advance-table-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.elp-advance-table-row .elp-advance-table-row-1,
.elp-advance-table-row-2 {
    margin-left: 10px;
}
.load-more {
    margin: 20px;
    text-align: center;
}
img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.demo-table-expand {
    font-size: 0;
    label {
        width: 90px;
        color: #99a9bf;
    }
    .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
}
.name-wrapper {
    text-align: center;
}
// @media only screen and (max-width: 1100px) {
//     .elp-advance-table-row .elp-advance-table-row-1 {
//         display: none;
//     }
// }
// @media only screen and (max-width: 814px) {
//     .elp-advance-table-row-2 {
//         display: none;
//     }
// }
</style>
<style lang="scss">
.el-table .cell {
    padding-left: 0px;
}
.el-tag--medium {
    height: 40px;
    line-height: 40px;
}
.elp-advance-wrap .el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
</style>
