<template>
    <div class="elp-app-main-wrap">
        <div class="elp-advance-title">基础表格</div>
        <div class="elp-search-wrap">
            <div>
                <span>地址：</span>
                <el-input placeholder="请输入" v-model="input10" clearable></el-input>
            </div>
            <div>
                <span>用户：</span>
                <el-select v-model="value8" filterable placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <div>
                <el-button type="primary">搜索</el-button>
                <el-button>重置</el-button>
            </div>
        </div>
        <div class="elp-button-item">
            <div>
                <el-button @click="resetDateFilter" plain>清除日期过滤器</el-button>
                <el-button @click="clearFilter" plain>清除所有过滤器</el-button>
            </div>
            <div style="margin-right: 20px; display: flex;">
                <!-- <div style="display: flex; align-items: center; margin-right: 20px;">
                    <span></span>
                    <el-switch v-model="value3" active-text="公司" inactive-text="家"></el-switch>
                </div>-->
                <el-button icon="el-icon-plus" plain>新建数据</el-button>
            </div>
        </div>
        <el-table ref="filterTable" :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                sortable
                column-key="date"
                :filters="tableFilter"
                :filter-method="filterHandler"
            ></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
            >
                <template slot-scope="scope">
                    <el-tag
                        :type="scope.row.tag === '家' ? 'primary' : 'success'"
                        disable-transitions
                    >{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40"
            ></el-pagination>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-08",
                    name: "王小八",
                    address: "上海市普陀区金沙江路 1518 弄",
                    tag: "家"
                },
                {
                    date: "2016-05-07",
                    name: "王小七",
                    address: "上海市普陀区金沙江路 1517 弄",
                    tag: "公司"
                },
                {
                    date: "2016-05-09",
                    name: "王小九",
                    address: "上海市普陀区金沙江路 1519 弄",
                    tag: "家"
                },
                {
                    date: "2016-05-06",
                    name: "王小六",
                    address: "上海市普陀区金沙江路 1516 弄",
                    tag: "公司"
                },
                {
                    date: "2016-05-05",
                    name: "王小五",
                    address: "上海市普陀区金沙江路 1515 弄",
                    tag: "家"
                },
                {
                    date: "2016-05-03",
                    name: "王小三",
                    address: "上海市普陀区金沙江路 1513 弄",
                    tag: "公司"
                },
                {
                    date: "2016-05-04",
                    name: "王小四",
                    address: "上海市普陀区金沙江路 1514 弄",
                    tag: "家"
                },
                {
                    date: "2016-05-01",
                    name: "王小一",
                    address: "上海市普陀区金沙江路 1511 弄",
                    tag: "公司"
                },
                {
                    date: "2016-05-02",
                    name: "王小二",
                    address: "上海市普陀区金沙江路 1512 弄",
                    tag: "家"
                },
                {
                    date: "2016-05-10",
                    name: "王小十",
                    address: "上海市普陀区金沙江路 1510 弄",
                    tag: "公司"
                }
            ],
            currentPage: 1,
            options: [],
            tableFilter: [],
            value8: "",
            input10: "",
            value3: true
        };
    },
    mounted() {
        this.options = this.tableData.map((value, index, array) => {
            return {
                value: array[index].date,
                label: array[index].name
            };
        });
        this.tableFilter = this.tableData.map((value, index, array) => {
            return {
                value: array[index].name,
                text: array[index].date
            };
        });
    },
    methods: {
        resetDateFilter() {
            this.$refs.filterTable.clearFilter("date");
        },
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
        /*eslint no-unused-vars: [1, { "args": "none" }]*/
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
.elp-search-wrap {
    padding: 0 0px 20px 0px;
    border-bottom: 1px #eee solid;
    display: flex;
    justify-content: space-between;
    div {
        width: 100%;
        align-items: center;
        display: flex;
        margin-right: 20px;
        span {
            font-size: 14px;
            display: inline-block;
            width: 66px;
            color: #555;
        }
    }
    > div:nth-child(3) {
        display: flex;
        // justify-content: center;
    }
}
.elp-button-item {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}
.pagination {
    margin-top: 10px;
    float: right;
}
@media only screen and (max-width: 724px) {
    .elp-search-wrap {
        display: block;
        > div {
            margin-top: 14px;
            > div{
                margin-right: 0;
            }
        }
    }
}
@media only screen and (max-width: 587px) {
    .elp-button-item {
        display: block;
        .el-button{
            margin-bottom: 10px;
        }
        .el-button+.el-button {
            margin-left: 0px;
        }
    }
}
</style>
<style lang="scss">
.elp-search-wrap {
    .el-select .el-input {
        width: 100%;
    }
    .el-input__inner {
        height: 34px;
    }
}
@media only screen and (max-width: 720px) {
    .el-pagination button,
    .el-pagination span:not([class*="suffix"]) {
        display: none;
    }
    .el-pagination {
        .el-pagination__total {
            display: none;
        }
        .el-pagination__sizes {
            display: none;
        }
        .el-pagination__jump {
            display: none;
        }
    }
}
</style>
