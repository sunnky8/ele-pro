<template>
    <div class="elp-app-main-wrap">
        <div class="elp-app-main-content">
            <div class="elp-icon-wrap">
                <i class="el-icon-circle-check"></i>
            </div>
            <h2>提交成功</h2>
            <p>提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。</p>
            <div class="elp-back-card">
                <div class="elp-back-card-row"><h4>项目名称</h4></div>
                <div class="elp-back-card-row">
                    <p>项目 ID：23421</p>
                    <p>负责人：曲丽丽</p>
                </div>
                <div class="elp-back-card-row">
                    <p>生效时间：2016-12-12 ~ 2017-12-12</p><p></p>
                </div>
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
            </div>
            <div class="elp-btn-wrap">
                <el-button type="primary">返回列表</el-button>
                <el-button>查看项目</el-button>
                <el-button>打 印</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.elp-app-main-content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-icon-circle-check {
        font-size: 80px;
        color: #49bc19;
    }
    p {
        color: #666;
        font-size: 14px;
        width: 80%;
        text-align: center;
    }
    .elp-back-card{
        background: #f9f9f9;
        width: 80%;
        p{
            text-align: left;
        }
        .elp-back-card-row{
            padding-left: 100px;
            display: flex;
        }
        .elp-card-body {
            padding: 20px 100px;
            color: #666;
            a {
                color: #00a0e9;
            }
        }
    }
    .elp-btn-wrap{
        margin-top: 40px;
    }
}
@media only screen and (max-width: 960px){
    .elp-app-main-content {
        padding: 40px 0;
        p{
            width: 90%;
        }
        .elp-back-card{
            width: 90%;
            .elp-back-card-row{
                padding-left: 10px;
            }
            .elp-card-body {
                padding: 20px 10px;
            }
        }
    }
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
</style>
