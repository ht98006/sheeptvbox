var rule={
            title: '星影',
            host: 'https://www.xy1080.net',
	        ///vodshow/1-----------/       /vodshow/fyclass--hits------fypage---.html
            url:'/vodshow/fyclass/',
	        //https://chinaqtv.co/vodsearch/.html?wd=4
            searchUrl: '/vodsearch/-------------/?wd=**',	 
	        class_parse:'.head-nav li:lt(3);a&&Text;a&&href;.*/(.*?).html',
	        //:gt(2):lt(4)
	        class_name:'',//電視劇綜藝動漫
	        class_url:'',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	         headers:{'User-Agent':'MOBILE_UA'},  
            //play_parse:false,
             lazy: '',
            limit: 6,  
	        推荐: '*',
	        double: true, // 推荐内容是否双层定位
	        //.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href
	        //一级: '.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href',
	        一级: '.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href',
	        二级: {
                "title": "h3&&Text",//分類/年份...
				"desc": ".slide-info:eq(1)&&Text;.slide-info:eq(2)&&Text;.slide-info:eq(3)&&Text",
				"img": ".detail-pic&&img&&data-src",//圖
                "content": ".cor3&&Text",//簡介
                "tabs": ".anthology-tab&&a",//解析源
                "lists": ".anthology-list-play:eq(#id) li"
            },
	      搜索:'.public-list-exp;img&&alt;img&&data-src;.ft2&&Text;a&&href',
	    
 }
