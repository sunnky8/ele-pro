<template>
    <div class="elp-app-main-wrap">
        <div class="elp-app-main-content">
            <div class="elp-icon-wrap">
                <i class="el-icon-circle-close el-icon-fail"></i>
            </div>
            <h2>提交失败</h2>
            <p>请核对并修改以下信息后，再重新提交。</p>
            <div class="elp-back-card">
                <div class="elp-back-card-row"><h4>你提交的内容有如下错误：</h4></div>
                <div class="elp-back-card-row">
                    <p><i class="el-icon-circle-close el-icon-error"></i> 您的账户已被冻结</p>
                    <a>立即解冻 ></a>
                </div>
                <div class="elp-back-card-row">
                    <p><i class="el-icon-circle-close el-icon-error"></i> 您的账户还不具备申请资格</p>
                    <a>立即升级 ></a>
                </div>
            </div>
            <div class="elp-btn-wrap">
                <el-button type="primary">返回修改</el-button>
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
    .el-icon-fail {
        font-size: 80px;
        color: #f31d28;
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
        .el-icon-error{
            color: #f31d28;
        }
        p{
            text-align: left;
        }
        .elp-back-card-row{
            padding-left: 100px;
            display: flex;
            justify-content: flex-start;
            p{
                width: auto;
            }
            a{
                margin-left: 10px;
                font-size: 14px;
                line-height: 49px;
                color: #00a0e9;
            }
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
