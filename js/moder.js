$(document).ready(function(){
	$(".btn-slide").toggle(function(){
		$(this).parent().parent().find(".panel").animate({"width": "+=120px"}, "slow");
		$(this).toggleClass("active"); return false;
	},function(){
		$(this).parent().parent().find(".panel").animate({"width": "-=120px"}, "slow");
		$(this).toggleClass("active"); return false;
	});	 
});