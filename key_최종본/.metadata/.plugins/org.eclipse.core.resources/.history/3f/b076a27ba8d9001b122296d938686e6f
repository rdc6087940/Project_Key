$(function(){
	
	$('#bodies').hide();
	$('#bodies').show(500);
	
	var img1= $('#ove1');
	var img2= $('#ove2');
	var img3= $('#ove3');
	
	img1.css("cursor","pointer").click(function(){
		var newForm = $('<form></form>'); //set attribute (form) 
		newForm.attr("name","newForm");
		newForm.attr("method","post"); 
		newForm.attr("action","detail.jsp"); 
		newForm.attr("target","_blank"); 
		// create element & set attribute (input) 
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[하와이 아직도 못 가봄?, 하와이 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'1600000' })); // append form (to body) 
		newForm.appendTo('body'); // submit form

		newForm.submit();
	});
	
	img1.hide();
	img1.show(1500);
	img2.hide();
	img2.show(2000);
	img3.hide();
	img3.show(2500);
	img1.next().next().hide();
	img1.hover(function(){
		img1.next().next().show(500);
	},function(){
		
	})
	
	img2.css("cursor","pointer").click(function(){
		var newForm = $('<form></form>'); //set attribute (form) 
		newForm.attr("name","newForm");
		newForm.attr("method","post"); 
		newForm.attr("action","detail.jsp"); 
		newForm.attr("target","_blank"); 
		// create element & set attribute (input) 
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[이만한 혜자가 없다, 유럽 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'1200000' })); // append form (to body) 
		newForm.appendTo('body'); // submit form

		newForm.submit();
	});
	img2.next().next().hide();
	img2.hover(function(){
		img2.next().next().show(500);
	},function(){
		
	})
	
	img3.css("cursor","pointer").click(function(){
		var newForm = $('<form></form>'); //set attribute (form) 
		newForm.attr("name","newForm");
		newForm.attr("method","post"); 
		newForm.attr("action","detail.jsp"); 
		newForm.attr("target","_blank"); 
		// create element & set attribute (input) 
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[죽기 전에 꼭.. 크루즈 여행 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'4000000' })); // append form (to body) 
		newForm.appendTo('body'); // submit form

		newForm.submit();
	});
	img3.next().next().hide();
	img3.hover(function(){
		img3.next().next().show(500);
	},function(){
		
	})
	
});