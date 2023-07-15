var rule={
            title: '愛看影視',
            host: 'https://ikan6.vip',         //這個就是我們要抓得網址
            url:'/vodshow/fyclass.html',                 //根據下面內容無法翻頁所以fyclass，fyclass是分类标签 fypage是页数
	        hostJS:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"ul&&li&&a&&href");print(src);HOST=src.replace("/index.php","")',//网页域名根动态抓取js代码。通过HOST=赋值
            searchUrl: '/vodsearch/-------------/?wd=**',	  
	        class_name:'動漫&電影&國產劇&美劇&日本劇&港台劇',
            class_url:'4-----------&1-----------&2-----------&16-----------&15-----------&14-----------',
	        //https://www.ygpvp.com/vodsearch/-------------.html?wd=023
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选, 0不啟用
	        //class_parse: '.foot-table-box&&ul&&li;p&&Text;a&&href;.*/(.*?).html',
  	        headers:{//网站的请求头,完整支持所有的,常带ua和cookies
					'User-Agent':'MOBILE_UA',
					"Cookie": "searchneed=ok"
				},
			timeout:5000,//网站的全局请求超时,默认是3000毫秒
            play_parse: false,
            lazy: '',
            limit: 6,  
	          // 可操作变量有 rule_fetch_params,rule,以及基础的网页访问request,post等操作
            //预处理:'rule_fetch_params.headers.Cookie = "xxxx";',
	        推荐: '.public-list-exp;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
	        //double:true,//是否双层列表定位,默认false
	        //double: true, // 推荐内容是否双层定位
	        一級: '.public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;&&a&&href',
	        二级: {
                "title": "h3&&Text",
				//"desc": ".slide-info",
				"img": ".detail-pic&&data-original",//圖
				"content": ".check&&Text",//簡介
                "tabs": ".anthology-tab&&a",
                //"lists": ".anthology-list-box&&ul:eq(#id) li"
				"lists": ".anthology-list-play:eq(#id) li"
            },
	       搜索:'.flex-auto;.thumb-txt&&Text;*;*;.thumb-menu&&a&&href',
 }
