<template>
    <div>
        <div class="elp-app-main-header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>表单</el-breadcrumb-item>
                <el-breadcrumb-item>分步表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="elp-app-main-wrap">
            <div class="placeholder"></div>
            <el-steps :active="active" align-center finish-status="success">
                <el-step title="步骤1" description="填写出行信息"></el-step>
                <el-step title="步骤2" description="确认出行信息"></el-step>
                <el-step title="步骤3" description="生成订单并出票"></el-step>
            </el-steps>
            <div class="elp-step-content">
                <div class="elp-step-first" v-bind:style="{'display': firstDisplay}">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="出发城市">
                        <el-input v-model="form.depCity"></el-input>
                    </el-form-item>
                    <el-form-item label="到达城市">
                        <el-input v-model="form.arrCity"></el-input>
                    </el-form-item>
                    <el-form-item label="接机地点">
                        <el-select v-model="form.pickupLocation" placeholder="请选择接机地点">
                            <el-option label="T1航站楼" value="shanghai"></el-option>
                            <el-option label="T2航站楼" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出发时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align: center">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                type="fixed-time"
                                placeholder="选择时间"
                                v-model="form.time"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="是否携带">
                        <el-checkbox-group v-model="form.carry">
                            <el-checkbox label="child">携带儿童</el-checkbox>
                            <el-checkbox label="baby">携带婴儿</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="舱位">
                        <el-radio-group v-model="form.cabin">
                            <el-radio label="first">头等舱</el-radio>
                            <el-radio label="economy">经济舱</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                </div>
                <div class="elp-step-second" v-bind:style="{'display': secondDisplay}">
                    <div>出发城市： <span>{{form.depCity}}</span></div>
                    <div>到达城市： <span>{{form.arrCity}}</span></div>
                    <div>接机地点： <span>{{form.pickupLocation}}</span></div>
                    <div>出发时间： <span>{{form.date}} {{formatToTime(form.time)}}</span></div>
                    <div>是否携带： <span>携带儿童</span></div>
                    <div>舱位情况： <span>经济舱</span></div>
                </div>
                <div class="elp-step-third" v-bind:style="{'display': thirdDisplay}">
                    <div class="elp-step-success-icon">
                        <i class="el-icon-circle-check"></i>
                    </div>
                    <div class="elp-step-success-info">
                        你的机票预定成功，出票信息请留意短信通知!
                    </div>
                    <div class="elp-step-success-card">
                        <div>出发城市： <span>{{form.depCity}}</span></div>
                        <div>到达城市： <span>{{form.arrCity}}</span></div>
                        <div>乘客姓名： <span>{{form.name}}</span></div>
                    </div>
                </div>
            </div>
            <div class="elp-button">
                <el-button style="margin-top: 12px;" @click="next">{{btnText}}</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			active: 1,
			form: {
				name: "曲丽丽",
				depCity: "上海",
				arrCity: "三亚",
				pickupLocation: "上海市 闵行区 宝龙艾美酒店",
				date: "2019-10-01",
				time: new Date(2019, 10, 1, 12, 40, 0),
				carry: ["child"],
				cabin: "economy"
			},
			btnText: "下一步",
			firstDisplay: "block",
			secondDisplay: "none",
			thirdDisplay: "none"
		};
	},

	methods: {
		next() {
			this.active++;
			if (this.active == 2) {
				this.firstDisplay = "none";
				this.secondDisplay = "block";
			}
			if (this.active == 3) {
				this.secondDisplay = "none";
				this.thirdDisplay = "block";
				this.btnText = "重新订购";
			}
			console.log("this.active", this.active);
			if (this.active > 3) {
				this.firstDisplay = "block";
				this.thirdDisplay = "none";
				this.active = 1;
				this.btnText = "下一步";
			}
		},

		formatToTime(datatime) {
			Date.prototype.Format = function(fmt) {
				//author: meizz
				var o = {
					"M+": this.getMonth() + 1, //月份
					"d+": this.getDate(), //日
					"h+": this.getHours(), //小时
					"m+": this.getMinutes(), //分
					"s+": this.getSeconds(), //秒
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度
					S: this.getMilliseconds() //毫秒
				};
				if (/(y+)/.test(fmt))
					fmt = fmt.replace(
						RegExp.$1,
						(this.getFullYear() + "").substr(4 - RegExp.$1.length)
					);
				for (var k in o)
					if (new RegExp("(" + k + ")").test(fmt))
						fmt = fmt.replace(
							RegExp.$1,
							RegExp.$1.length == 1
								? o[k]
								: ("00" + o[k]).substr(("" + o[k]).length)
						);
				return fmt;
			};
			return datatime.Format("h:m:s");
		}
	}
};
</script>
<style lang="scss" scoped>
.elp-step-content {
	display: flex;
	justify-content: center;
	padding: 40px;
	min-height: 380px;
	.elp-step-first {
	}
	.elp-step-second {
		display: none;
		div {
			line-height: 50px;
			span {
				color: #666;
				font-size: 14px;
			}
		}
	}
	.elp-step-third {
		.elp-step-success-icon {
			text-align: center;
			font-size: 60px;
			color: #49bc19;
		}
		.elp-step-success-info {
			line-height: 70px;
		}
		.elp-step-success-card {
			background: #f9f9f9;
			padding: 20px 80px;
			line-height: 50px;
			span {
				color: #666;
			}
		}
	}
}
.elp-button {
	display: flex;
	justify-content: center;
}
.placeholder {
	height: 40px;
}
</style>
