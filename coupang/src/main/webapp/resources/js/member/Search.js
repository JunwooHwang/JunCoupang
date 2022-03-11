/**
 * 
 */
//모든 공백 체크 정규식
var empJ = /\s/g;
//아이디 정규식
var idJ = /^[a-z0-9]{4,12}$/; 
// 이름 정규식
var nameJ = /^[가-힣]{2,6}$/;
// 이메일 검사 정규식
var mailJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;




// 아이디 확인
var idOk = false;
// 이름 확인
var nameOk = false;
// 이메일 확인
var emailOk = false;
// 인증번호 확인
var emailOkOk = false;
//이메일전송 인증번호 저장위한 코드
var code = ""; 

$(document).ready(function(){
	
	$('#Search div').click(function(){							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.
		var tab_id = $(this).attr('data-tab');
		

		$('#Search div').removeClass('current');			//선택 되있던 탭의 current css를 제거하고 
		$('.tab-content').removeClass('current');		
		

		$(this).addClass('current');								////선택된 탭에 current class를 삽입해줍니다.
		$("#" + tab_id).addClass('current');
		$("input[type='text']").val("");
		$("input[type='email']").val("");

	});
	

	// 아이디 찾기의 이름
	$("#idUserName").blur(function() {
		if (nameJ.test($("#idUserName").val())) {
			console.log($("#idUserName").val());
			console.log("nameTrue");
			nameOk = true;
		} else {
			nameOk = false;
			console.log("nameFalse");
		}
	});
	
	// 비밀번호 찾기의 이름
	$("#pwUserName").blur(function() {
		if (nameJ.test($("#pwUserName").val())) {
			console.log($("#pwUserName").val());
			console.log("nameTure");
			nameOk = true;
		} else {
			nameOk = false;
			console.log("nameFalse");
		}
	});
	
	// 비밀번호 찾기의 아이디
	$("#pwUserId").blur(function(){
		if(idJ.test($("#pwUserId").val())){
			console.log("idTrue");
			idOk = true;
		}else{
			console.log("idFalse");
			idOk = false;
		}
	});
	
	// 아이디 찾기의 이메일
	$("#idUserEmail").blur(function() {
		if (mailJ.test($("#idUserEmail").val())) {
			console.log($("#idUserEmail").val());
			console.log("emailTure");
			emailOk = true;
		} else {
			console.log("emailFalse");
			emailOk = false;
		}
	});
	
	// 비밀번호 찾기의 이메일
	$("#pwUserEmail").blur(function() {
		if (mailJ.test($("#pwUserEmail").val())) {
			console.log($("#pwUserEmail").val());
			console.log("emailTure");
			emailOk = true;
		} else {
			console.log("emailFalse");
			emailOk = false;
		}
	});
	
	
	// 아이디 찾기 버튼 클릭
	$(".idSearchBtn").on("click",function(e){
		if(!nameOk){
			$("#idUserName").focus();
			return false;
		}else if(!emailOk){
			$("#idUserEmail").focus();
			return false;
		}else if(!emailOkOk){
			$(".idEmailOK").focus();
			return false;
		}else{
			return true;
			
		};
		
	});
	
	// 비밀번호 찾기 버튼 클릭
	$(".pwSearchBtn").on("click",function(e){
		if(!nameOk){
			$("#pwUserName").focus();
			return false;
		}else if(!idOk){
			$("#pwUserId").focus();
			return false;
		}else if(!emailOk){
			$("#pwUserEmail").focus();
			return false;
		}else if(!emailOkOk){
			$(".pwEmailOK").focus();
			return false;
		}else{
			return true;
		
		};

	});
	
	/* 아이디찾기 인증번호 이메일 전송 */
	$(".idEmailBtn").click(function(){
		var email = $("#idUserEmail").val();        // 입력한 이메일
		var checkBox = $(".idEmailOK");        	 // 인증번호 입력란
		if(!emailOk){
			$("#idUserEmail").focus();
			$("#idEmailCheck").text("메일을 확인해주세요");
			$("#idEmailCheck").css("color", "red");
			return false;
		}else{
			$("#idEmailCheck").text("올바른 메일양식입니다.");
			$("#idEmailCheck").css("color", "green");
			$.ajax({
				
				type:"GET",
				url:"mailCheck?email=" + email,
				success:function(data){
					//console.log("data : " + data);
					checkBox.attr("disabled",false);
					code = data;
				}
			
			});
			
		}	
	});
	
	/* 비밀번호찾기 인증번호 이메일 전송 */
	$(".pwEmailBtn").click(function(){
		var email = $("#pwUserEmail").val();        // 입력한 이메일
		var checkBox = $(".pwEmailOK");        	 // 인증번호 입력란
		if(!emailOk){
			$("#pwUserEmail").focus();
			$("#pwEmailCheck").text("메일을 확인해주세요");
			$("#pwEmailCheck").css("color", "red");
			return false;
		}else{
			$("#pwEmailCheck").text("올바른 메일양식입니다.");
			$("#pwEmailCheck").css("color", "green");
			$.ajax({
				
				type:"GET",
				url:"mailCheck?email=" + email,
				success:function(data){
					//console.log("data : " + data);
					checkBox.attr("disabled",false);
					code = data;
				}
			
			});
			
		}	
	});
	
	
	
	
	/* 아이디 찾기 인증번호 비교 */
	$(".idEmailOK").blur(function(){
	    var inputCode = $(".idEmailOK").val();      // 입력코드    
	    var checkResult = $("#idEmailOkCheck");    // 비교 결과 
	    
	    if(inputCode == code){                            // 일치할 경우
	        checkResult.html("인증번호가 일치합니다.");
	        emailOkOk = true;
			$("#idEmailOkCheck").css("color", "green");      
	    } else {                                            // 일치하지 않을 경우
	        checkResult.html("인증번호를 다시 확인해주세요.");
	        $("#idEmailOkCheck").css("color", "red");
	        emailOkOk = false;
	    }  
	    
	});

	/* 비밀번호 찾기 인증번호 비교 */
	$(".pwEmailOK").blur(function(){
		var inputCode = $(".pwEmailOK").val();      // 입력코드    
		var checkResult = $("#pwEmailOkCheck");    // 비교 결과 
		
		if(inputCode == code){                            // 일치할 경우
			checkResult.html("인증번호가 일치합니다.");
			emailOkOk = true;
			$("#pwEmailOkCheck").css("color", "green");      
		} else {                                            // 일치하지 않을 경우
			checkResult.html("인증번호를 다시 확인해주세요.");
			$("#pwEmailOkCheck").css("color", "red");
			emailOkOk = false;
		}  
		
	});

}); //ready 끝