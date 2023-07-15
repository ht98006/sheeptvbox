var rule={
            title: '櫻花動漫',
            host: 'http://www.dm99.me',
            url: '/list/fypage.html',
            searchUrl:'/search.asp?searchword=**',
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

 }