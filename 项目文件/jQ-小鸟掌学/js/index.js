$(function(){
	$("#header").load("header.html")
	$("#footer").load("footer.html")
	$("#guding").load("右固定.html")
})
/*  轮播  */
$(function(){
	var brz = true;
	var num = 0;
	$(".middle>span").click(function(){
		var inde = $(this).index();
		num = inde;
		$(".middle>span").removeClass("middle_show")
		$(this).addClass("middle_show")
		$(".banner_one").css({
			"display":"none"
		})
		$(".banner_one").eq(inde).css({
			"display":"block"
		})
	})
	$(".bchange>span:first").click(function(){
		if(brz){
			brz = false;
			num--;
			if(num < 0){
				num = 2
			}
			$(".middle>span").removeClass("middle_show")
			$(".middle>span").eq(num).addClass("middle_show")
			$(".banner_one").css({
				"display":"none"
			})
			$(".banner_one").eq(num).fadeIn(80)
			setTimeout(function(){
				brz = true;
			},600)
		}
	})
	$(".bchange>span:last").click(function(){
		if(brz){
			brz = false;
			num++;
			if(num >2){
				num = 0
			}
			$(".middle>span").removeClass("middle_show")
			$(".middle>span").eq(num).addClass("middle_show")
			$(".banner_one").css({
				"display":"none"
			})
			$(".banner_one").eq(num).fadeIn(80)
			setTimeout(function(){
				brz = true;
			},600)
		}
	})
})

//<!--主要产品-->
$(function(){
	var jl = 0;
	var lx = 0;
	$(".now_linebtn_one").click(function(){
		var inde = $(this).index();
		lx = inde;
		/*  清除样式  */
		$(".now_linebtn_one").find("span").css({
			'display':'block'
		})
		$(".now_linebtn_one").find("i").css({
			'display':'none'
		})
		$(".content_one").css({
			'display':'none'
		})
		
		//  animated bounceInLeft
		//  animated bounceInRight
		
		if(jl<inde){
			$(".content_one").eq(lx).find(".left_content").css({
				'left':400
			}).animate({
				"left":0
			},700)
			
			$(".content_one").eq(lx).find(".right_content").css({
				'left':907
			}).animate({
				"left":407
			},700)
		}
		if(jl>inde){
			$(".content_one").eq(lx).find(".left_content").css({
				'left':-400
			}).animate({
				"left":0
			},700)
			
			$(".content_one").eq(lx).find(".right_content").css({
				'left':-100
			}).animate({
				"left":407
			},700)
		}
		/*  改变 */
		$(".content_one").eq(lx).css({
				'display':'block'
			})
		$(this).find("span").css({
			'display':'none'
		})
		$(this).find("i").css({
			'display':'block'
		})
		jl = inde;
	})
	var pdz = true;
	$(".change_line>.prev").click(function(){
		if(pdz){
			pdz = false;
			lx--;
			if(lx<0){
				lx = 5;
			}
			$(".now_linebtn_one").find("span").css({
				'display':'block'
			})
			$(".now_linebtn_one").find("i").css({
				'display':'none'
			})
			$(".content_one").css({
				'display':'none'
			})
			
			////
			$(".content_one").eq(lx).find(".left_content").css({
				'left':-400
			}).animate({
				"left":0
			},700)
			
			$(".content_one").eq(lx).find(".right_content").css({
				'left':-100
			}).animate({
				"left":407
			},700)
			/*  改变 */
			$(".content_one").eq(lx).css({
					'display':'block'
				})
			$(".now_linebtn_one").eq(lx).find("span").css({
				'display':'none'
			})
			$(".now_linebtn_one").eq(lx).find("i").css({
				'display':'block'
			})
			jl = lx;
			setTimeout(function(){
				pdz = true;
			},900)
		}
	})
	
	$(".change_line>.next").click(function(){
		if(pdz){
			pdz = false;
			lx++;
			if(lx > 5){
				lx = 0;
			}
			/*  清除样式  */
			$(".now_linebtn_one").find("span").css({
				'display':'block'
			})
			$(".now_linebtn_one").find("i").css({
				'display':'none'
			})
			$(".content_one").css({
				'display':'none'
			})
			
			/////
			$(".content_one").eq(lx).find(".left_content").css({
					'left':400
				}).animate({
					"left":0
				},700)
				
				$(".content_one").eq(lx).find(".right_content").css({
					'left':907
				}).animate({
					"left":407
				},700)
			/*  改变 */
			$(".content_one").eq(lx).css({
					'display':'block'
				})
			$(".now_linebtn_one").eq(lx).find("span").css({
				'display':'none'
			})
			$(".now_linebtn_one").eq(lx).find("i").css({
				'display':'block'
			})
			jl = lx;
			setTimeout(function(){
				pdz = true;
			},900)
		}
	})
})


//  业务范围
$(function(){
	$(".centerimg").hover(function(){
		$(this).addClass("animated tada")
	},function(){
		$(this).removeClass("animated tada")
	})
	$(".shousuo_icon").hover(function(){
		$(this).addClass("animated tada")
	},function(){
		$(this).removeClass("animated tada")
	})
	var pD = null;
	var yanshi = true;
	$(".centerimg").click(function(){
		if(yanshi){
			yanshi = false;
			if($(this).parent().next(".yewucontent_ditail").is(':hidden')){
				$(".shousuo_icon").removeClass("zhankai")
				$(".yewucontent_ditail").slideUp()
				$(this).parent().next(".yewucontent_ditail").delay(300).slideToggle();
				$(this).siblings(".shousuo_icon").toggleClass("zhankai")
			}else{
				$(".shousuo_icon").removeClass("zhankai")
				$(".yewucontent_ditail").slideUp()
			}
			setTimeout(function(){
				yanshi = true;
			},600)
		}
	})
	$(".shousuo_icon").click(function(){
		if(yanshi){
			yanshi = false;
			if($(this).parent().next(".yewucontent_ditail").is(':hidden')){
				$(".shousuo_icon").removeClass("zhankai")
				$(".yewucontent_ditail").slideUp()
				$(this).toggleClass("zhankai")
				$(this).parent().next(".yewucontent_ditail").delay(300).slideToggle();
			}else{
				$(".shousuo_icon").removeClass("zhankai")
				$(".yewucontent_ditail").slideUp()
			}
			setTimeout(function(){
				yanshi = true;
			},600)
		}
	})
})

/*  团队介绍  */
$(function(){
	var teammove = 0;
	function yundong(){
		teammove++;
		$(".teammove_wrap_ul").animate({"left":200},600,function(){
			$(".teammove_wrap_ul").animate({"left":-1130},600,function(){
				$(".teammove_wrap_ul li").first().appendTo(".teammove_wrap_ul")
				$(".teammove_wrap_ul").css({
					'left':0
				})
			})
		})
		if(teammove>2){
			teammove = 0;
		}
		$(".middleTD>span").removeClass("middle_showTD");
		$(".middleTD>span").eq(teammove).addClass("middle_showTD");
	}
	var timer = setInterval(yundong,5000)
	$(".teammove_wrap_ul").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(yundong,5000)
	})
	$(".bchangeTD").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(yundong,5000)
	})
	
	
	/*   左右控制   */
	var buerzhi = false;
	$(".nextTD").click(function(){
		if(!buerzhi){
			buerzhi = true;
			setTimeout(function(){
				buerzhi = false;
			},2000)
			yundong();
		}
	})
	
	$(".prevTD").click(function(){
		if(!buerzhi){
			buerzhi = true;
			setTimeout(function(){
				buerzhi = false;
			},2000)
			teammove--;
			if(teammove<0){
				teammove = 2;
			}
			$(".middleTD>span").removeClass("middle_showTD");
			$(".middleTD>span").eq(teammove).addClass("middle_showTD");
			$(".teammove_wrap_ul li").last().prependTo(".teammove_wrap_ul")
			$(".teammove_wrap_ul").css({
				'left':-1130
			})
			$(".teammove_wrap_ul").animate({"left":400},600,function(){
				$(".teammove_wrap_ul").animate({"left":0},600,function(){
				})
			})
		}
	})
})
