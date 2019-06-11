$(function() {
	var running = false;
	var num = 0;
	var dian = 0;
	var yanshi = false;
	
	//  hash跳转
	$(".cartoon").css({"display":"block"})
	console.log(parseInt(window.location.hash.substr(1)))
	num1 = parseInt(window.location.hash.substr(1))
	if(num1 == 1||num1==2||num1==3|num1==4){
		num = num1;
		dian = num - 1;
		$(".cartoon").css({"display":"none"})
		var yd = -num * $(".lunbotu_ul>li").first().height() + "px";
		$(".lunbotu_ul").animate({
			"top": yd
		}, 550)
		if(num == 1){
			$(".yigedian").removeClass("yigedian addanimation")
		}else{
			$(".yigedian").removeClass("yigedian")
		}
		$(".czLi").eq(dian).children("a").addClass("yigedian")
		setTimeout(function(){
			yanshi = true;
		}, 1000)
		window.location.hash = "";
	}
	
	
	
	$(".cartoon").dblclick(function() {
		$(this).slideUp(600)
		setTimeout(function() {
			yanshi = true;
		}, 1000)
	})
	setTimeout(function() {
		$(".cartoon").slideUp(600)
		setTimeout(function() {
			yanshi = true;
		}, 1000)
	}, 9000)


	// 全屏轮播
	

	function up() {
		if (!running) {
			running = true;
			setTimeout(function() {
				running = false;
			}, 1000)
			if (num > 0) {
				num--;
			}
			dian = num - 1;
			var yd = -num * $(".lunbotu_ul>li").first().height() + "px";
			$(".lunbotu_ul").animate({
				"top": yd
			}, 550)
			if (dian < 0) {
				dian = 0;
			}
			$(".yigedian").removeClass("yigedian")
			$(".czLi").eq(dian).children("a").addClass("yigedian")
		}
	}

	function down() {
		if (!running) {
			running = true;
			setTimeout(function() {
				running = false;
			}, 1000)
			if (num < 4) {
				num++;
			}
			dian = num - 1;
			var yd = -num * $(".lunbotu_ul>li").first().height() + "px";
			$(".lunbotu_ul").animate({
				"top": yd
			}, 550)
			$(".yigedian").removeClass("yigedian")
			$(".czLi").eq(dian).children("a").addClass("yigedian")
		}
	}

	function jr(obj, ev, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(ev, fn);
		} else {
			obj.attachEvent("on" + ev, fn);
		}
	}
	jr(window, "mousewheel", fn);
	jr(window, "DOMMouseScroll", fn);

	function fn(ev) {
		var oEvent = ev || event;
		if (yanshi) {
			if (oEvent.wheelDelta) {
				if (oEvent.wheelDelta > 0) {
					up();
				} else {
					down();
				}
			} else if (oEvent.detail) {
				if (oEvent.detail > 0) {
					down();
				} else {
					up();
				}
			}
		}
	}
	//点击导航栏轮播
	$(".czLi").click(function() {
		num = $(this).index() + 1
		console.log(num)
		var yd = -num * $(".lunbotu_ul>li").first().height() + "px";
		$(".lunbotu_ul").animate({
			"top": yd
		}, 550)
	})
	$(".donext").click(function(){
		yanshi = false;
		num = 1;
		dian = num - 1;
		var yd = -num * $(".lunbotu_ul>li").first().height() + "px";
		$(".lunbotu_ul").animate({
			"top": yd
		}, 550)
		if (dian < 0) {
			dian = 0;
		}
		$(".yigedian").removeClass("yigedian")
		$(".czLi").eq(dian).children("a").addClass("yigedian")
		setTimeout(function(){
			yanshi = true;
		}, 1000)
	})
	//   控制头部白色小点
	var pdz = false;
	$(".pdyx").mouseenter(function() {
		if ($(this).hasClass("yigedian")) {
			pdz = true;
		} else {
			$(this).addClass("yigedian addanimation")
			pdz = false;
		}
	})
	$(".pdyx").mouseleave(function() {
		if (!pdz) {
			$(this).removeClass("yigedian")
			$(".pdyx").removeClass("addanimation")
		}
	})
	$(".pdyx").click(function() {
		pdz = true;
		$(".pdyx").removeClass("addanimation")
		$(".yigedian").removeClass("yigedian")
		$(this).addClass("yigedian")
		$(this).siblings("a").addClass("yigedian")
	})
	

})



$(function() {
	$(".welcome_content").delay(3000).animate({
		"top": "5%",
	}, 600)
	setTimeout(function() {
		$(".num2").css({
			"display": "block"
		})
	}, 3000)
	setTimeout(function() {
		$(".num3").css({
			"display": "block"
		})
	}, 3500)
	setTimeout(function() {
		$(".num4").css({
			"display": "block"
		})
	}, 4000)
	setTimeout(function() {
		$(".num5").css({
			"display": "block"
		})
	}, 4500)
	setTimeout(function() {
		$(".num6").css({
			"display": "block"
		})
	}, 5000)
})

/*  gaishu   */
$(function(){
	$(".gaishu1").css({
		"width":$(window).width(),
		"height":$(window).height()
	})
	window.onresize = function(){
		$(".gaishu1").css({
			"width":$(window).width(),
			"height":$(window).height()
		})
	}
	var bianliang = 0;
	var ysz = true;
	$(".gaishuL").click(function(){
		if(ysz){
			ysz = false;
			bianliang--;
			if(bianliang<=0){
				bianliang = 0;
				$(this).css({"opacity":0.3})
			}else{
				$(".gaishuX").css({
					"opacity":0.3
				}).delay(600).animate({"opacity":1},0)
			}
			var yd = -bianliang * $(".gaishu1").width() + "px";
			$(".gaishu").animate({
				"left": yd
			}, 550)
			setTimeout(function(){
				ysz = true;
			},1000)
		}
	})
	$(".gaishuR").click(function(){
		if(ysz){
			ysz = false;
			bianliang++;
			if(bianliang>=2){
				bianliang = 2;
				$(this).css({"opacity":0.3})
			}else{
				$(".gaishuX").css({
					"opacity":0.3
				}).delay(600).animate({"opacity":1},0)
			}
			var yd = -bianliang * $(".gaishu1").width() + "px";
			$(".gaishu").animate({
				"left": yd
			}, 550)
			setTimeout(function(){
				ysz = true;
			},1000)
		}
	})
})

/*  呼吸灯  */
$(function(){
	setInterval(function(){
		$(".huxi").fadeTo(1500,1).fadeTo(600,0)
	},2700)
})

/*  小鸟掌云    */
$(function(){
	var bianhua = true;
	$(".btn_box_left").click(function(){
		if(bianhua){
			bianhua = false;
			$(".yun_ul").animate({
				"left": 0
			}, 550)
			$(".btn_box_right").children("span").animate({
				"left": -78
			}, 375)
			$(this).children("span").animate({
				"left": 0
			}, 375)
			setTimeout(function(){
				bianhua = true;
			},800)
		}
	})
	$(".btn_box_right").click(function(){
		if(bianhua){
			bianhua = false;
			$(".yun_ul").animate({
				"left": -910
			}, 550)
			$(".btn_box_left").children("span").animate({
				"left": 78
			}, 375)
			$(this).children("span").animate({
				"left": 0
			}, 375)
			setTimeout(function(){
				bianhua = true;
			},800)
		}
	})
})
