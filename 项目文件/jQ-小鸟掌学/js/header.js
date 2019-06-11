$(function(){
	$(".nav_wrap>li>a").click(function(){
		$(".nav_wrap>li>a").removeClass("round_dot");
		$(this).addClass("round_dot");
	})
	
	$(".nav_wrap>li").hover(function(){
		$(this).find(".nav_none").stop().slideDown(150)
	},function(){
		$(this).find(".nav_none").stop().slideUp(150)
	})
	
	
	$(".liyan").click(function(){
		window.open( "article.html?news=companyIdea")
	})
	$(".wenhua").click(function(){
		window.open( "article.html?news=companyCulture")
	})
	$(".fenwei").click(function(){
		window.open( "article.html?news=companyEnvironment")
	})
	
	$(".rcly").click(function(){
		window.open( "article.html?news=talents")
	})
	$(".tdjs").click(function(){
		window.open( "article.html?news=team")
	})
	$(".zpxx").click(function(){
		window.open( "article.html?news=joinUs")
	})
	
	$(".lxwm").click(function(){
		window.open( "article.html?news=telUs")
	})
})
