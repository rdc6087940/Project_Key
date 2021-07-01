$(function(){

	$('#bodies').hide();
	$('#bodies').show(500);

	let btn = $('#notweek');
	let btn2 = $('#week');
	let ctn = 0;

	let btn3 = $('#hotel');
	let btn4 = $('#hhotel');
	let ctn2 = 0;

	$('#homes').css("cursor","pointer").click(function(){
		 var confirmflag = confirm("찜 목록을 비우시겠습니까?");

        if(confirmflag){
     	 sessionStorage.clear();
        }else{

        }
	})
	
	btn.click(function(){
		$(this).css('background-color','#8A6D3B');
		if(ctn==2){
			btn2.css('background-color','');
		}
		ctn=1;
	});
	btn2.click(function(){
		$(this).css('background-color','#8A6D3B');
		if(ctn==1){
			btn.css('background-color','');
		}
		ctn=2;
	});


	btn3.click(function(){
		$(this).css('background-color','#8A6D3B');
		if(ctn2==2){
			btn4.css('background-color','');
		}
		ctn2=1;
	});
	btn4.click(function(){
		$(this).css('background-color','#8A6D3B');
		if(ctn2==1){
			btn3.css('background-color','');
		}
		ctn2=2;
	});



	var prices = parseInt($("#prices").text(), 10);
//	편이슬 씨 구현 부 - detail 페이지 계산 및 동적할당----------------------------------------------------------------
	// 버튼 클릭시 금액 누적 합	
	// 각 버튼의 값을 변수로 지정
	var notweek = 0;
	var week = 40000;
	var hotel = 0;
	var hhotel = 120000;


	// A. 평일 버튼을 클릭시 ===============================================================================
	// class가 result인 div에, 변수로 저장한 평일값(notweek) 값을 출력
	$('#notweek').click(function(){
		$('.result').text('기본가격 '+prices+'원 ' + ' + 평일가격 ' + notweek+'원 ' + ' = ' + (prices+notweek)+'원');

		// A-1. 호텔 버튼 클릭시
		// class가 result2인 div에, 변수로 저장한 평일값 + 호텔값을 출력
		$('#hotel').click(function(){
			$('.result2').text('기본가격'+prices+'원 '+ ' + 평일가격 '+notweek+'원 ' + ' + ' + '호텔가격 ' + hotel+'원 ' + ' = ' + (prices+notweek+hotel)+'원');

			// ★ 평일 - 호텔 클릭 후 주말 버튼으로 바꿀때
			$('#week').click(function(){
				$('.result2').text('기본가격'+prices+'원 '+ ' + 주말가격 '+week+'원 ' + ' + ' + '호텔가격 ' + hotel+'원 ' + ' = ' + (prices+week+hotel)+'원');

				// ★ id가 #inputGroupSelect01 select를 클릭
				$('#inputGroupSelect01').click(function(){
					// select 요소의 value(인원수) 값을 변수 count에 저장
					let count = $('#inputGroupSelect01 option:selected').val();
					// 주말+호텔 * count값을 변수 result에 저장
					let result = (week+hotel+prices) * count;
					$('input[name=totalbox]').attr('value',result+'원');
				})
			})

			// A-1-1. id가 #inputGroupSelect01 select를 클릭시
			$('#inputGroupSelect01').click(function(){
				// select 요소의 value(인원수) 값을 변수 count에 저장
				let count = $('#inputGroupSelect01 option:selected').val();
				// 평일+호텔 * count값을 변수 result에 저장
				let result = (prices+notweek+hotel) * count;
				// name이 totalbox인 input에
				// value 속성에 result 값을 추가
				$('input[name=totalbox]').attr('value',result+'원');
			})		
		})

		// A-2. 고급호텔 클릭시
		// class가 result2인 div에, 변수로 저장한 평일값 + 고급호텔값을 출력
		$('#hhotel').click(function(){
			$('.result2').text('기본가격 '+prices+'원 '+ '+ 평일가격 '+notweek+'원 ' + ' + ' + '고급호텔가격 ' + hhotel+'원 ' + ' = ' + (prices+notweek+hhotel)+'원');

			// ★ 평일 - 고급호텔 클릭 후 주말 버튼으로 바꿀때
			$('#week').click(function(){
				$('.result2').text('기본가격'+prices+'원 '+ ' + 주말가격 '+week+'원 ' + ' + ' + '호텔가격 ' + hhotel+'원 ' + ' = ' + (prices+week+hhotel)+'원');

				// ★ id가 #inputGroupSelect01 select를 클릭
				$('#inputGroupSelect01').click(function(){
					// select 요소의 value(인원수) 값을 변수 count에 저장
					let count = $('#inputGroupSelect01 option:selected').val();
					// 주말 + 고급호텔 * count값을 변수 result에 저장
					let result = (week+hhotel+prices) * count;
					$('input[name=totalbox]').attr('value',result+'원');
				})
			})

			// A-2-1. id가 #inputGroupSelect01 select를 클릭
			$('#inputGroupSelect01').click(function(){
				// select 요소의 value(인원수) 값을 변수 count에 저장
				let count = $('#inputGroupSelect01 option:selected').val();
				// 평일+고급호텔 * count값을 변수 result에 저장
				let result = (prices+notweek+hhotel) * count;
				$('input[name=totalbox]').attr('value',result+'원');
			})
		})		
	});

	// B. 주말 버튼을 클릭시 ===============================================================================
	// class가 result인 div에, 변수로 저장한 주말값(week) 값을 출력
	$('#week').click(function(){
		$('.result').text('기본가격 '+prices+'원 '+'+'+' 주말가격 ' + week+'원  = '+(prices+week)+'원');

		// B-1. 호텔 클릭시
		// class가 result2인 div에, 변수로 저장한 주말값 + 호텔값을 출력
		$('#hotel').click(function(){
			$('.result2').text('기본가격 '+prices+'원 '+'주말가격 '+week+'원 ' + ' + ' + '호텔가격 ' + hotel+'원 ' + ' = ' + (week+hotel+prices)+'원');

			// ★ 주말 - 호텔 클릭 후 평일 버튼으로 바꿀때
			$('#notweek').click(function(){
				$('.result2').text('기본가격'+prices+'원 '+ ' + 주말가격 '+notweek+'원 ' + ' + ' + '호텔가격 ' + hotel+'원 ' + ' = ' + (prices+notweek+hotel)+'원');

				// ★ id가 #inputGroupSelect01 select를 클릭
				$('#inputGroupSelect01').click(function(){
					// select 요소의 value(인원수) 값을 변수 count에 저장
					let count = $('#inputGroupSelect01 option:selected').val();
					// 평일+호텔 * count값을 변수 result에 저장
					let result = (notweek+hotel+prices) * count;
					$('input[name=totalbox]').attr('value',result+'원');
				})
			})

			// B-1-1. id가 #inputGroupSelect01 select를 클릭
			$('#inputGroupSelect01').click(function(){
				// select 요소의 value(인원수) 값을 변수 count에 저장
				let count = $('#inputGroupSelect01 option:selected').val();
				// 주말+호텔 * count값을 변수 result에 저장
				let result = (week+hotel+prices) * count;
				$('input[name=totalbox]').attr('value',result+'원');
			})
		})

		// B-2. 고급호텔 클릭시
		// class가 result2인 div에, 변수로 저장한 주말값 + 고급호텔값을 출력
		$('#hhotel').click(function(){
			$('.result2').text('기본가격 '+prices+'원 '+'주말가격 '+week+'원 ' + ' + ' + '고급호텔 ' + hhotel+'원 ' + ' = ' + (week+hhotel+prices)+'원');

			// ★ 주말 - 고급호텔 클릭 후 평일 버튼으로 바꿀때
			$('#notweek').click(function(){
				$('.result2').text('기본가격'+prices+'원 '+ ' + 주말가격 '+notweek+'원 ' + ' + ' + '호텔가격 ' + hhotel+'원 ' + ' = ' + (prices+notweek+hhotel)+'원');

				// ★ id가 #inputGroupSelect01 select를 클릭
				$('#inputGroupSelect01').click(function(){
					// select 요소의 value(인원수) 값을 변수 count에 저장
					let count = $('#inputGroupSelect01 option:selected').val();
					// 평일+고급호텔 * count값을 변수 result에 저장
					let result = (notweek+hhotel+prices) * count;
					$('input[name=totalbox]').attr('value',result+'원');
				})
			})

			// B-2-1. id가 #inputGroupSelect01 select를 클릭
			$('#inputGroupSelect01').click(function(){
				// select 요소의 value(인원수) 값을 변수 count에 저장
				let count = $('#inputGroupSelect01 option:selected').val();
				// 주말+고급호텔 * count값을 변수 result에 저장
				let result = (week+hhotel+prices) * count;
				$('input[name=totalbox]').attr('value',result+'원');
			})			
		})
		
		
	});
//	편이슬 씨 구현부 end ---------------------------------------------------------------------------------



	let buy=$('#buy');

	buy.click(function(){
		var ctn3 = $('#inputGroupSelect01 option:selected').val();

		if(ctn==0)
		{
			alert('희망 여행 날짜를 입력해주세요.');
		}
		else if(ctn2==0){
			alert('희망 숙박 시설을 입력해주세요.');
		}
		else if(ctn3==0){
			alert('인원 수를 입력해주세요.');
		}
		else if($('#agree').is(":checked")==false){
			alert('약관에 동의해주세요.');
		}
		else{
			
			sessionStorage.clear();
			location.href = 'end.html';
		}


	})
});