window.onload = function(){
	$("#more").click(function(){
		console.log($("#moreList")[0].style.display)
		if ($("#moreList")[0].style.display == "none") {
			$("#moreList")[0].style.display = "block";
			$(".blockTriangles")[0].style.display = "block";
		} else{
			$("#moreList")[0].style.display = "none";
			$(".blockTriangles")[0].style.display = "none";
		}
	});
	var l = 0;
	var r = 0;
	var i = 0;
	var touch;
	var content = document.getElementById("content");
	//通过点击事件切换
	$("#first").click(function(){
		$(this).css("border-bottom","1px #8787f1 solid");
		$("#second").css("border-bottom","1px #eee solid");
		$("#third").css("border-bottom","1px #eee solid");
		$(".firstContent").css("display","block");
		$(".secondContent").css("display","none");
		$(".thirdContent").css("display","none");
		i = 0;
	});
	$("#second").click(function(){
		$(this).css("border-bottom","1px #8787f1 solid");
		$("#first").css("border-bottom","1px #eee solid");
		$("#third").css("border-bottom","1px #eee solid");
		$(".firstContent").css("display","none");
		$(".secondContent").css("display","block");
		$(".thirdContent").css("display","none");
		i = 1;
	});
	$("#third").click(function(){
		$(this).css("border-bottom","1px #8787f1 solid");
		$("#second").css("border-bottom","1px #eee solid");
		$("#first").css("border-bottom","1px #eee solid");
		$(".firstContent").css("display","none");
		$(".secondContent").css("display","none");
		$(".thirdContent").css("display","block");
		i = 2;
	});
	//通过滑动事件实现tab切换
	content.ontouchstart = function() {				//触摸滑动开始
		touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
		r = touch.screenX;
	}
	content.ontouchmove = function() {				//滑动过程中
		touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
	}
	content.ontouchend = function() {				//滑动结束手指离开触摸屏
		l = touch.screenX;
		console.log(l);
		if (r - l < -10) {		//向右滑动
			i -= 1;
			
			if (i <= 0) {
				i = 0;
			}
			//内容的切换
			$(this).find("div")[i].style.display = 'block';
			$(this).find("div")[i+1].style.display = 'none';
			//导航的切换
			$(".tabs").find("span")[i].style.borderBottom = '1px #8787f1 solid';
			$(".tabs").find("span")[i+1].style.borderBottom = '1px #eee solid';
			if (i == 0) {
				$(".tabs").find("span")[i+2].style.borderBottom = '1px #eee solid';
			}
		}
		if (r - l > 10) {		//向左滑动
			i += 1;
			if (i >= 2) {
				i = 2;
			}
			//内容的切换
			$(this).find("div")[i].style.display = 'block';
			$(this).find("div")[i-1].style.display = 'none';
			//导航的切换
			$(".tabs").find("span")[i].style.borderBottom = '1px #8787f1 solid';
			$(".tabs").find("span")[i-1].style.borderBottom = '1px #eee solid';
			if (i == 2) {
				$(".tabs").find("span")[i-2].style.borderBottom = '1px #eee solid';
			}
		}
	}
}
