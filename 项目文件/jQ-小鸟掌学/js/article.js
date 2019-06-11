$(function(){
	$(".head").load("header.html")
	$(".foot").load("footer.html")
	$("#guding").load("右固定.html")
})
$(function(){
	var news = GetQueryString("news");
	var datas = articleData[news].data
	$(".title_list").html(datas.title + "<span class = 'pen'>" + "</span>");
	$(".div_Img>img").attr("src",datas.coverImg);
	
	function GetQueryString(name) {
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null){
	     	return  r[2];
	     }else{
	     	return null;
	     }
	}
})
