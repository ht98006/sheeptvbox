var rule={
            title: '7喜影院',
            host: 'https://www.7xi.tv/',
            url:'/vodshow/fyclass--hits------fypage---.html',
	        //https://chinaqtv.co/vodsearch/.html?wd=4
            searchUrl: '/vodsearch.html?wd=**&submit=',	  
	        class_name:'電影&電視劇&綜藝&動漫',//電視劇綜藝動漫
	        class_url:'1&2&3&4',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	        headers:{'User-Agent':'MOBILE_UA'},
	        //class_parse: '.header;a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,  
	        推荐: '.hl-list-wrap&&ul&&li;a&&title;a&&data-original;.hl-pic-text&&span&&Text;.hl-item-title&&a&&href',
	        一级: '.hl-list-wrap&&ul&&li;a&&title;a&&data-original;.hl-pic-text&&span&&Text;.hl-item-title&&a&&href',
	        二级: {
                "title": ".title&&Text",
				"desc": ".hl-full-box&&li:eq(2)&&Text;.hl-full-box&&li:eq(3)&&Text;.hl-full-box&&li:eq(4)&&Text",
				"img": ".hl-item-thumb&&data-original",//圖
				"content": ".blurb&&Text",//簡介.
				"tabs": ".hl-tabs&&a",//解析源
                "lists": ".hl-tabs-box:eq(#id) li"
            },
	      搜索:'.hl-item-pic;a&&title;a&&data-original;.remarks&&Text;a&&href',
 }
