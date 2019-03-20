$(function(){
	$("h3:contains('手机快捷登录')").click(function(){
		$(".phoneLogin").css("display","block");
		// $(".content").css("display","none");
	})
	$("h3:contains('用户名登录')").click(function(){
		$(".phoneLogin").css("display","none");
		// $(".content").css("display","none");
	});
	$("#phone").blur(function(){
		var $ph=$("#phone").val();
		if($ph ==""){
			$("#usenameyz").html("请输入用户名");
		}
		else if(check("phone",$ph)==false){
			$("#usenameyz").html("请输入正确的手机号");
		}else{
			$("#usenameyz").html("");
		}
	});
	$("#password").blur(function(){
		var $mima=$("#password").val();
		if($mima ==""){
			$("#usepassyz").html("请输入密码");
		}
		else if(check("password",$mima)==false){
			$("#usepassyz").html("请按要求输入密码");
		}else{
			$("#usepassyz").html("");
		}
	});
})