var rule={
            title: 'Dramaq線上看',
            host: 'https://dramaq.in',
            url:'/fyclass/',
	        //https://chinaqtv.co/vodsearch/.html?wd=4
            searchUrl: '/search?q=**',	  
	        class_name:'台劇&陸劇&韓劇&日劇&泰劇',
	        class_url:'tw&cn&kr&jp&th',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	        headers:{'User-Agent':'MOBILE_UA'},
	        //class_parse: '.header;a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,  
	        推荐: 'body&&.card;.title&&Text;img&&src;span&&Text;a&&href',
	        一级: '.card;.title&&Text;img&&src;span&&Text;a&&href',
	        二级: {
                "title": ".title&&Text",
				"desc": ".intro&&Text",
				"img": "img&&src",//圖
				"content": ".pinfo&&Text",//簡介.
				"tabs": ".eps;a&&Text",//解析源
                "lists": ".eps:eq(#id) li"
            },
	      搜索:'.list;a&&Text;*;*;a&&href',
 }
