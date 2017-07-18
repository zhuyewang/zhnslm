/*手机端拖拽效果*/				
/*封装拖拽函数*/
function phoneDrag(dom) {
	var oW, oH; //定义垂直距离和水平距离
	// 绑定touchstart事件
	dom.addEventListener("touchstart", function(e) {		//开始触摸屏幕事件
		var touches = e.touches[0];
		oW = touches.clientX - dom.offsetLeft;
		oH = touches.clientY - dom.offsetTop;
		//阻止页面的滑动默认事件
		document.addEventListener("touchmove", defaultEvent, false);
	}, false)

	dom.addEventListener("touchmove", function(e) {			//在手机屏幕上滑动
		var touches = e.touches[0];
		var oLeft = touches.clientX - oW; //水平距离
		var oTop = touches.clientY - oH; //垂直距离
		if(oLeft < 0) { //限制从平模左边和右边拖出屏幕
			oLeft = 0;
		} else if(oLeft > document.documentElement.clientWidth - dom.offsetWidth) {
			oLeft = (document.documentElement.clientWidth - dom.offsetWidth);
		}
		if(oTop < 0) {			//禁止拖出最上方屏幕
			oTop = 0;
		}
		dom.style.left = oLeft + "px";		//元素距离左侧的距离
		dom.style.top = oTop + "px";		//元素距离顶部的距离
	}, false);
	dom.addEventListener("touchend", function() {			//离开触摸屏
		document.removeEventListener("touchmove", defaultEvent, false);
	}, false);

	function defaultEvent(e) {
		e.preventDefault();
	}
}
