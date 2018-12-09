const data = [
	{ name: "Internet Explorer", value: 26 },
	{ name: "Chrome", value: 40 },
	{ name: "Firefox", value: 30 },
	{ name: "Safari", value: 24 },
	{ name: "Opera", value: 15 },
	{ name: "Undetectable", value: 8 }
];

const imageMap = {
	"Internet Explorer":
		"https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png",
	Chrome:
		"https://gw.alipayobjects.com/zos/rmsportal/dWJWRLWfpOEbwCyxmZwu.png",
	Firefox:
		"https://gw.alipayobjects.com/zos/rmsportal/ZEPeDluKmAoTioCABBTc.png",
	Safari:
		"https://gw.alipayobjects.com/zos/rmsportal/eZYhlLzqWLAYwOHQAXmc.png",
	Opera:
		"https://gw.alipayobjects.com/zos/rmsportal/vXiGOWCGZNKuVVpVYQAw.png",
	Undetectable:
		"https://gw.alipayobjects.com/zos/rmsportal/NjApYXminrnhBgOXyuaK.png"
};

const scale = [
	{
		dataKey: "value",
		nice: false,
		max: 60,
		min: 0
	}
];

const seriesOpts = {
	gemo: "point",
	position: "name*value",
	size: "value",
	color: "name",
	shape: [
		"name",
		function(name) {
			return ["image", imageMap[name]];
		}
	],
	label: [
		"value",
		{
			offset: -20,
			textStyle: {
				fontSize: 16
			}
		}
	]
};

export default {
	data,
	scale,
	height: 400,
	seriesOpts
};
