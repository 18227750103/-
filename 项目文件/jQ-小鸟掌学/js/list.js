$(function(){
	$(".head").load("header.html")
	$(".foot").load("footer.html")
	$("#guding").load("右固定.html")
})

/*$(function(){
	var lists = 0;
	function jiazai(){
		$(lists).each(function(){
			$(`
				<li>
					<div class="img_wrap">
						<img src="${this.coverImg}"/>
					</div>
					<div class="content_text">
						<div class="title_small">${this.title}</div>
						<div class="date">${this.creatAt}</div>
						<p>${this.describe}</p>
					</div>
					<img src="images/list_img_over_xiaojiantou.png"/>
				</li>	
			`).appendTo(".list_content");
		})
	}
	var bianliang = 0;
	if(bianliang == 0){
		lists = listData.listData00.data.list;
		jiazai();
	}
	$(".list_more").click(function(){
		bianliang++;
		console.log(bianliang)
		if(bianliang == 1){
			lists = listData.listData01.data.list;
		}
		if(bianliang == 2){
			lists = listData.listData02.data.list;
			$(".mygd>img").eq(0).css({
				'display':'none'
			})
			$(".mygd>img").eq(1).css({
				'display':'block',
				"marginBottom":200
			})
			$(".list_more").css({
				'display':'none'
			})
		}
		jiazai();
	})
})*/
$(function(){
	var global = global || {}
	global.loadStart = 0; //控制加载次数
	
	loadArticletList();
	
	function loadArticletList(){
		
		// 第一次加载清空DOM结构里的内容
		if(global.loadStart == 0){
			$("#articleList").html("")
		}
		
		var result = listData["listData0"+global.loadStart]
		var list = result.data.list
		
		//异常处理判断    判断是不是有无数据
		if(!list || !list.length){
			$("#articleList").html("没有数据")
		}else{
			for(var i = 0;i<list.length;i++){
				var itemHtml = $("#itemHtml").html();
				itemHtml = itemHtml.replace("articleId",list[i].sysId);
				itemHtml = itemHtml.replace("images/list_img01.jpg",list[i].coverImg);
				itemHtml = itemHtml.replace("$articleTitle$",list[i].title);
				itemHtml = itemHtml.replace("$updateTime$",list[i].creatAt);
				itemHtml = itemHtml.replace("$describe$",list[i].describe);
				
				$("#articleList").append(itemHtml);
			}
		}
		global.loadStart++;
		global.loadCount = Math.ceil(result.data.count/result.data.pageSize);  // 3
		if(global.loadStart>=global.loadCount){
			$(".mygd>img").eq(0).css({
				'display':'none'
			})
			$(".mygd>img").eq(1).css({
				'display':'block',
				"marginBottom":200
			})
			$(".list_more").css({
				'display':'none'
			})
		}
	}
	
	$(".list_more").click(function(){
		loadArticletList();
	})
	
	$("#articleList").delegate(".content-one","click",function(){
		window.open( "article.html?news=xiaoniaoNews"+$(this).attr("articleId") )
	})
	
})
