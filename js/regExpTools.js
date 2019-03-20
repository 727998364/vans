
//正则封装：
//参数：
//验证的类型：（如：邮箱，ip地址，身份证号码等）
//要验证的字符串
//返回值：true：验证成功；false：验证失败；
/*
function check(type,str){
	switch(type){
		case "email":var reg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i;break;
		case "ip":var reg = /^([1-9]|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])){3}$/;;break;
		case "cardId":var reg = /^\d{6}[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9X]$/;break;
		case "date":var reg = /^([12]\d{3}\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[01])|[12]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])|[12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))$/;break;
		default: return null;
	}
	return reg.test(str);	
}
*/

//check("email","hello");

function check(type,str){
	var regObj = {
		"phone":/^1(3|4|5|7|8)\d{9}$/,
		"password":/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,
		"email": /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i,
		"ip": /^([1-9]|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])){3}$/,
		"cardId": /^\d{6}[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9X]$/,
		"date": /^([12]\d{3}\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[01])|[12]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])|[12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))$/
	};	
//	regObj["eamil"].test("hello");	
	return regObj[type].test(str);	
}

function yzm(){
	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//遍历
	var strHtml="";
	for(var i=0;i<4;i++){
		var index=parseInt(Math.random()*str.length);
		strHtml+=str[index];
	}
	return strHtml;
}