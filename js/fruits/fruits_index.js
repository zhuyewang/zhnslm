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
