var rule={
            title: '慢大浪',
            host: 'https://www.mdlys.vip',
	        ///vodshow/1-----------/       /vodshow/fyclass--hits------fypage---.html
            url:'/index.php/vod/type/id/fyclass.html',
	        //https://chinaqtv.co/vodsearch/.html?wd=4
            searchUrl: '/index.php/vod/search.html?wd=**',	 
	        //class_parse: '.ft4&&ul&&li;a&&Text;a&&href;.*/(.*?)/',
	        //:gt(2):lt(4)
	        class_name:'電影&電視劇&綜藝&動漫&紀錄片',//電視劇綜藝動漫
	        class_url:'2&1&3&4&5',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	        headers:{'User-Agent':'MOBILE_UA'},
            //play_parse:true,
            lazy: '',
            limit: 6,  
	        推荐: '*',
	        一级: '.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href',
	        double: true, // 推荐内容是否双层定位
	        二级: {
                "title": "h3&&Text",//分類/年份...
			    "desc": ".slide-info:eq(1)&&Text;.slide-info:eq(2)&&Text;.slide-info:eq(3)&&Text",
				"img": ".detail-pic&&img&&data-src",//圖
                "content": ".cor3&&Text",//簡介
                "tabs": ".anthology-tab&&a",//解析源
                "lists": ".anthology-list-play:eq(#id) li"//:eq(#id) li
            },
	      搜索:'.public-list-exp;img&&alt;img&&data-src;.ft2&&Text;a&&href',
 }
