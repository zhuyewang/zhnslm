$(function(){
	$("#pullDown").click(function(){
		console.log($(".moreClassification")[0].style.height);
		if ($(".moreClassification")[0].style.height == '0rem') {
			$("#pullDown").css("transform","rotate(180deg)");
			$(".moreClassification").animate({
				height:"11rem"
			});
		}else {
			$("#pullDown").css("transform","rotate(360deg)");
			$(".moreClassification").animate({
				height:"0rem"
			});
		}
		
	})
})
