<?php
	header("Content-type:text/html;charset=utf-8");
	//获取用户输入
	$usename = $_POST["usename"];
	$usepass = $_POST["usepass"];

	//处理
	//建立连接
	$con = mysql_connect('localhost','root','root');
	if(!$con){
		die("连接失败");
	}
	//2、选择数据库（选择目的地）
	mysql_select_db("clientinfo",$con);
    
    //3、执行SQL语句（传输数据）
	$sqlstr="select * from clients where usename='$usename' and usepass='$usepass'";
	$result = mysql_query($sqlstr,$con);

	//4、关闭数据库（过河拆桥）
	mysql_close($con);

	//三、响应
	if(mysql_num_rows($result)>0){
		echo "1";
	}else{
		echo "0";
	}


?>