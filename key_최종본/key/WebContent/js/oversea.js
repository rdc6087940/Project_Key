function getToday(){
	var date = new Date();
	return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

$(function(){
	
	$('#bodies').hide();
	$('#bodies').show(500);
	
	var img1= $('#ove1');
	var img2= $('#ove2');
	var img3= $('#ove3');
	
	var favors1 = $('#favors1');
	var favors2 = $('#favors2');
	var favors3 = $('#favors3');
	
	var today = getToday();
	var ttmp=0;
	
	$('#homes').css("cursor","pointer").click(function(){
		 var confirmflag = confirm("찜 목록을 비우시겠습니까?");

        if(confirmflag){
     	 sessionStorage.clear();
        }else{

        }
	})
	
	if(sessionStorage.getItem("packnum")==null){
		sessionStorage.setItem("packnum",1);
	}
	if(sessionStorage.getItem("favor_one")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favor_one")+'</td><td>[황금빛 속초 패키지]</td><td>150,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	if(sessionStorage.getItem("favor_two")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favor_two")+'</td><td>[제주도 패키지]</td><td>400,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	if(sessionStorage.getItem("favor_three")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favor_three")+'</td><td>[여수 패키지]</td><td>300,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	if(sessionStorage.getItem("favors_one")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favors_one")+'</td><td>[하와이 특급 패키지]</td><td>1,600,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	if(sessionStorage.getItem("favors_two")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favors_two")+'</td><td>[유럽 여행 패키지]</td><td>1,200,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	if(sessionStorage.getItem("favors_three")!=null){
		var tmp ='<tr><td>'+sessionStorage.getItem("favors_three")+'</td><td>[크루즈 패키지]</td><td>4,000,000원</td><td>'+today+'</td><td> - </td></tr>'
		$('#tb').append(tmp);
	}
	
	favors1.css("cursor","pointer").click(function(){
		if(sessionStorage.getItem("favors_one")!=null){
			alert('이미 담아져있는 상품입니다!')
		}
		else{
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10);
			sessionStorage.setItem("favors_one",ttmp);
			var tmp ='<tr><td>'+sessionStorage.getItem("favors_one")+'</td><td>[하와이 특급 패키지]</td><td>1,600,000원</td><td>'+today+'</td><td> - </td></tr>'
				$('#tb').append(tmp).hide().show(1000);;
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10)+1;
			sessionStorage.setItem("packnum",ttmp);
		}
})

favors2.css("cursor","pointer").click(function(){
		if(sessionStorage.getItem("favors_two")!=null){
			alert('이미 담아져있는 상품입니다!')
		}
		else{
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10);
			sessionStorage.setItem("favors_two",ttmp);
			var tmp ='<tr><td>'+sessionStorage.getItem("favors_two")+'</td><td>[유럽 여행 패키지]</td><td>1,200,000원</td><td>'+today+'</td><td> - </td></tr>'
				$('#tb').append(tmp).hide().show(1000);;
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10)+1;
			sessionStorage.setItem("packnum",ttmp);
		}
})

favors3.css("cursor","pointer").click(function(){
		if(sessionStorage.getItem("favors_three")!=null){
			alert('이미 담아져있는 상품입니다!')
		}
		else{
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10);
			sessionStorage.setItem("favors_three",ttmp);
			var tmp ='<tr><td>'+sessionStorage.getItem("favors_three")+'</td><td>[크루즈 패키지]</td><td>4,000,000원</td><td>'+today+'</td><td> - </td></tr>'
				$('#tb').append(tmp).hide().show(1000);;
			ttmp = parseInt(sessionStorage.getItem("packnum"), 10)+1;
			sessionStorage.setItem("packnum",ttmp);
		}
})
	
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