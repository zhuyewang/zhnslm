$(function(){
	/*tab切换*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
	/*轮播图*/
var mySwiper = new Swiper('.swiper-container',{
	autoplay: 3000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	loop : true
})	
})


