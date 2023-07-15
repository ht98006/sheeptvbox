//感謝由道長影片讓我增加許多js相關知識，也很感謝tlooo大佬解決我的dr_py更新問題，以及一開始xugege大老讓我更想學習

var rule={
            title: '櫻花動漫',
            host: 'http://www.dm99.me',
            url:'/list/fyclass_fypage.html',
            searchUrl: '/search.asp?page=fypage&searchword**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	    headers:{'User-Agent':'MOBILE_UA'},
	    class_parse: '.nav-list&&li;a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.myui-vodlist__box&&a.lazyload;a&&title;a&&data-original;.text-right&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
	    一级: '.myui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
	    二级: {
                "title": ".myui-content__detail&&h1",//分類/年份...
			    "desc": ".myui-content__detail&&p.data:eq(1)&&Text;.myui-content__detail&&p.data:eq(2)&&Text;.myui-content__detail&&p.data:eq(3)&&Text",
				"img": ".myui-content__thumb&&a&&img&&data-original",//圖
                "content": ".sketch&&Text",//簡介
                "tabs": ".nav-tabs&&li&&a",//解析源
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索:'.thumb;a&&title;a&&data-original;.pic-text&&Text;a&&href',

 }