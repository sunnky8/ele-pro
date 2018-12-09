<template>
    <div>
        <div>
            <div class="elp-app-main-header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>表单</el-breadcrumb-item>
                    <el-breadcrumb-item>典型表单</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="elp-app-main-wrap">
            <div class="elp-app-main-content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="上海" value="shanghai"></el-option>
                            <el-option label="北京" value="beijing"></el-option>
                            <el-option label="广州" value="guangzhou"></el-option>
                            <el-option label="深圳" value="shenzhen"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                type="fixed-time"
                                placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <!-- <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item> -->
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动主题">
                        <el-checkbox-group v-model="form.topic" size="medium">
                            <el-checkbox-button label="教育" name="type"></el-checkbox-button>
                            <el-checkbox-button label="培训" name="type"></el-checkbox-button>
                            <el-checkbox-button label="广告" name="type"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特邀嘉宾">
                        <el-radio-group v-model="form.people" size="medium">
                            <el-radio border label="范冰冰"></el-radio>
                            <el-radio border label="李连杰"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.form"></el-input>
                    </el-form-item>
                    <el-form-item label="活动说明">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                topic: [],
                people: "",
                resource: "",
                form: "",
                desc: ""
            }
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        }
    }
};
</script>
<style lang="scss" scoped>
.elp-app-main-content {
    padding-top: 40px;
    display: flex;
    justify-content: center;
}
</style>
<style lang="scss">
.el-checkbox{
    margin-right: 30px;
}
.el-checkbox+.el-checkbox {
    margin-left: 0px;
}
.el-radio{
    margin-right: 30px;
}
.el-radio+.el-radio {
    margin-left: 0;
}
.el-radio.is-bordered+.el-radio.is-bordered {
    margin-left: 0;
}
</style>

