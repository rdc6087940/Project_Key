$(function(){
	$('#bodies').hide();
	$('#bodies').show(500);
	
	let buy=$('#home');
	
	buy.click(function(){
		location.href = 'index.html';
	})
	
	var time=5;
	setInterval(function(){

			var time_text = '(' + time +'초 후 메인화면으로 돌아갑니다 .)';
			$("#count").text(time_text);
			time--;
			
			if(time<0){
				location.href = 'index.html';
			}

		},1000);

});