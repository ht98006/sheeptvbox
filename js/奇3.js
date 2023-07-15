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
            推荐: '.myui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
	    	一级: '.myui-vodlist__box;a&&title;a&&data-original;.pic-text text-right;a&&href',
			二级: {
                "title": ".myui-content__detail&&h1",//分類/年份...
		"img": ".myui-content__thumb&&a&&img&&data-original",//圖
		 "content": ".hidden-xs&&Text",//簡介
                "tabs": ".nav-tabs&&li&&a",//解析源
                "lists": ".myui-content__list:eq(#id) li"
            },

 }
