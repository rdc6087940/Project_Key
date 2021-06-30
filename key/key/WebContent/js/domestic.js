/*$.ajax({
			url:"/key/detail.jsp",
			type:'post',
			data : {"place":"sockcho"},

			success:function(data){
	            alert("속초!");
	        },
	        error:function(jqXHR, textStatus, errorThrown){
	            alert("에러 발생~~ \n" + textStatus + " : " + errorThrown);
	        }*/


$(function(){

	$('#bodies').hide();
	$('#bodies').show(500);
	
	var img1= $('#dom1');
	var img2= $('#dom2');
	var img3= $('#dom3');


	img1.css("cursor","pointer").click(function(){	
		var newForm = $('<form></form>'); //set attribute (form) 
		newForm.attr("name","newForm");
		newForm.attr("method","post"); 
		newForm.attr("action","detail.jsp"); 
		newForm.attr("target","_blank"); 
		// create element & set attribute (input) 
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[황금빛 속초 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'150000' })); // append form (to body) 
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
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[한국의 작은 몰디브, 제주도 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'400000' })); // append form (to body) 
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
		newForm.append($('<input/>', {type: 'hidden', name: 'place', value:'[그대의 눈동자 속에 건배, 여수 패키지]' }));
		newForm.append($('<input/>', {type: 'hidden', name: 'price', value:'300000' })); // append form (to body) 
		newForm.appendTo('body'); // submit form

		newForm.submit();
	});
	img3.next().next().hide();
	img3.hover(function(){
		img3.next().next().show(500);
	},function(){

	})

});