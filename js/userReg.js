$(function(){
	$("#phone").blur(function(){
		var $ph=$("#phone").val();
		if($ph ==""){
			$("#phoneyz").html("请输入用户名");
		}
		else if(check("phone",$ph)==false){
			$("#phoneyz").html("请输入正确的手机号");
		}else{
			$("#phoneyz").html("");
		}
		$.ajax({
   			type: "POST",
   			url: "php/userRegNew.php",
   			data: "custId="+$ph,
   			success: function(xhr){
     			if(xhr==1){
					$("#phoneyz").html("该用户名已被注册，请重新输入");
				}else{
					$("#phoneyz").html("该用户名可以使用");
				}
    }
});
	});
	$("#password").blur(function(){
		var $mima=$("#password").val();
		if($mima ==""){
			$("#passwordyz").html("请输入密码");
		}
		else if(check("password",$mima)==false){
			$("#passwordyz").html("请按要求输入密码");
		}else{
			$("#passwordyz").html("");
		}
	});
	$("#pass").blur(function(){
		var $mima=$("#password").val();
		var $mimayz=$("#pass").val();
		if($mimayz ==""){
			$("#passyz").html("密码与确认密码不相符，请重新填写");
		}
		else if($mima!=$mimayz){
			$("#passyz").html("密码与确认密码不相符，请重新填写");
		}else{
			$("#passyz").html("");
		}
	});
	var $result = yzm();
	$("#yzmResult").html($result);
	$("#yzm").click(function(){
		$result = yzm();
		$("#yzmResult").html($result);
	});
	$("#yzmWrite").blur(function(){
		var $yzmResult = $("#yzmResult").html();
		var $yzmWrite = $("#yzmWrite").val();
		if($yzmResult.toLowerCase()!= $yzmWrite.toLowerCase()){
			$("#yzmspan").html("您输入的验证码有误，请重新填写");
		}else{
			$("#yzmspan").html("");
		}
	});
})
