$(function(){

	function active(){
		var navbtn=$('.navbtn')
		var yincang=$('.yincang')

		yincang.css("display","none")
		yincang.eq(0).css("display","block")

		navbtn.click(function(){
			var _this=$(this).index()
			yincang.css("display","none")
			yincang.eq(_this).slideToggle("slow");
		})

	}

	active()



})