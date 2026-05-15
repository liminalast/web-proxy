const config = {
	//网页元数据
	metaData: {
		title: 'liminal的个人主页🎉',
		description: '欢迎来到liminal的世界！',
		keywords: 'liminal,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm liminal", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.jpg"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
    skills: ['快乐', '摸鱼', '治愈力', '随性', '共情', '懒散', '温柔', '好奇心', '文艺', '猫缘', '自由'],
    skillPoints: [99, 95, 88, 92, 85, 90, 88, 80, 82, 97, 94],
},

	//社交按钮
	socialPlatformIcons: [
    	{ icon: "mdi-github", link: "https://github.com/liminalast" },
    	{ icon: "mdi-qqchat", link: "javascript:void(0)", qq: "1158429178" },
    	{ icon: "mdi-wechat", link: "javascript:void(0)", wechat: "z1158429178" },
],

	//打字机
	typeWriterStrings: [
    "我只想轻松快乐的活着。",
    "人间值得，但不必太用力。",
    "慢慢来，比较快。",
    "愿你所求皆如愿，所行皆坦途。"
],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
    server: 'tencent',  
    type: 'playlist',
    id: '3137258680'    
},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.jpg" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.jpg" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.jpg" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.jpg" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.jpg" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.jpg" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.jpg" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "1",
				"preview": "/img/wallpaper/dynamic/1/动态-全景镜头 - pre.webm",
				"url": "/img/wallpaper/dynamic/1/动态-全景镜头.webm"
			},
			{
				"title": "2",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/22 - pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/22.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
projectcards: [
    { go: "🚀 前往", img: "/img/1.jpg", title: "GitHub", subtitle: "代码托管平台", text: "全球最大的开源社区，存放你的每一行代码。", url: "https://github.com", show: false },
    { go: "🎨 前往", img: "/img/2.jpg", title: "Figma", subtitle: "在线设计工具", text: "简洁强大的 UI 设计工具，协作设计从未如此简单。", url: "https://figma.com", show: false },
    { go: "📚 前往", img: "/img/3.jpg", title: "MDN", subtitle: "前端开发文档", text: "Mozilla 出品的权威 Web 技术文档，开发者必备。", url: "https://developer.mozilla.org", show: false },
    { go: "🎵 前往", img: "/img/4.jpg", title: "QQ音乐", subtitle: "听我想听的歌", text: "随时随地，想听就听。", url: "https://y.qq.com", show: false },
    { go: "🌸 前往", img: "/img/5.jpg", title: "Pixiv", subtitle: "插画创作社区", text: "来自世界各地画师的精彩作品，总有一幅击中你。", url: "https://pixiv.net", show: false },
    { go: "🍿 前往", img: "/img/6.jpg", title: "哔哩哔哩", subtitle: "干杯～", text: "弹幕视频网站，总有你感兴趣的内容。", url: "https://bilibili.com", show: false },
    { go: "🗺️ 前往", img: "/img/7.jpg", title: "Notion", subtitle: "笔记与效率工具", text: "把你的想法、计划、笔记都整理在一起。", url: "https://notion.so", show: false },
    { go: "✨ 前往", img: "/img/8.jpg", title: "Claude", subtitle: "AI 助手", text: "有什么不懂的，来问我吧。", url: "https://claude.ai", show: false },
],

	statement: ["Copyright © 2025 liminal"],
}

export default config