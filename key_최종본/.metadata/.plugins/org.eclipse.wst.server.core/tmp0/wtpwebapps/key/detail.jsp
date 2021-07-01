
<%@ page contentType="text/html; charset=UTF-8" language="java"%>

<% request.setCharacterEncoding("utf-8");

%>


<!doctype html>
<html lang="ko">

<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
	integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">

<link rel="stylesheet" href="css/detail.css">
<title>키오스크 프로젝트</title>

<script src='./lib/jquery-3.1.1.min.js' type="text/javascript"></script>
<script src="./js/detail.js"></script>
</head>



<body>
<div id="bodies">
<% String place = request.getParameter("place"); %>
<% 
	int price = Integer.parseInt(request.getParameter("price"));
%>


	<!-- nav--------------------------------------------------------------------- -->
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark ml-auto">
			<a id="homes" class="navbar-brand text-warning text-center" href="index.html">KOSMO
				여행사 [패키지 구매]</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>


		</nav>
	</div>
	<!-- nav end--------------------------------------------------------------------- -->

	<!--header --------------------------------------------------------------------- -->
	<header class="bg-dark py-1">
		<div class="container px-1">
			<div class="row gx-3 justify-content-center">
				<div class="col-lg-6">
					<div class="text-center my-2">
						<h1
							class="display-5 fw-bolder text-white mb-2 cafe-text text-warning">KOSMO
							여행</h1>
						<h1 class="display-5 fw-bolder text-white mb-2 cafe-text">패키지
							구매</h1>
						<p class="lead text-white-50 mb-4">Kosmo 여행사는 완전무결한 패키지를 제공합니다</p>
						<div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!--header end --------------------------------------------------------------------- -->
	<!--main       --------------------------------------------------------------------- -->

	<main role="main" class="container">
	<div class="jumbotron" style="background-color: grey">
		<h1 class="mb-3 text-warning">
			<span class="cafe-text">KOSMO 여행</span>
		</h1>
		<p class="lead cafe-text text-white"><%=place %></p>
		

		<label class="text-warning">- 희망 여행날짜</label>
		<div class="form-group" style="display: flex; align-items: center;">
			<input id="notweek" type="button" value="평일"
				class="btn btn-outline-warning mt-2 mr-4 form-control "> 
				<input
				id="week" type="button" value="주말"
				class="btn btn-outline-warning mt-2 mr-2 ml-4 form-control ">
		</div>
		
		<!-- ★결과값 출력을 위해 div 추가 -->
		<div class="result text-white"></div>
		
		<br>
		<hr>
		<label class="text-warning">- 희망 숙박시설</label>
		<div class="form-group" style="display: flex; align-items: center;">
			<input id="hotel" type="button" value="호텔"
				class="btn btn-outline-warning mt-2 mr-4 form-control "> <input
				id="hhotel" type="button" value="고급 호텔"
				class="btn btn-outline-warning mt-2 mr-2 ml-4 form-control ">
				<!-- ★id명 변경 호텔 > hotel / 고급호텔 > hhotel -->
		</div>
		
		<!-- ★결과값 출력을 위해 div 추가 -->
		<div class="result2 text-white"></div>
		<br>
		<hr>
		
		<pre class="text-warning"> 현재 코로나로 인한 5인 이상 집합 금지 명령에
 따라 최대 4인까지 예약 가능합니다.</pre>
		<div class="input-group mb-3">

			<div class="input-group-prepend">

				<label class="input-group-text " for="inputGroupSelect01">인원</label>
			</div>
			<select class="custom-select" id="inputGroupSelect01">
				<option value="0">인원수</option>
				<option value="1">1명</option>
				<option value="2">2명</option>
				<option value="3">3명</option>
				<option value="4">4명</option>
			</select>
		</div>



		<div class="row align-items-center remember">
			<input id="agree" type="checkbox" class="ml-4 "><span class="text-warning">약관에 동의합니다.</span>
		</div>

		<br>
		<hr>
		
		<div class="form-group" style="display: flex; align-items: center;">
			<label class="mr-4 text-warning"> 총 결제 금액</label>
			<input name="totalbox" type="text" class="w-50" value="" readonly>
			<!-- ★input에 name, value 추가 -->
			
		</div>
		<div class="form-group" style="display: flex; align-items: center;">

			<input id="buy" type="submit" value="결제"
				class="btn btn-outline-warning mt-4 mr-1 form-control">
		</div>



	</div>
	

	</main>
	<!--main end --------------------------------------------------------------------- -->
<p class="text-white" id="prices"><%=price%></p>
	<!--외부 스크립트 --------------------------------------------------------------------- -->
	<script src="https://code.jquery.com/jquery-3.4.1.js"
		integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
		integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
		integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
		crossorigin="anonymous"></script>


</div>
</body>

</html>