<?php
    header("Content-type:text/html;charset=utf-8");
    //获取用户输入的信息
    $usename = $_POST["custId"];
    //处理
    //建立连接
    $conn = mysql_connect('localhost','root','root');
    if(!$conn){
        die("连接失败");
    }
    //选择数据库
    mysql_select_db('customerInfo',$conn);
    //执行sql语句
    //先查询
    $sqlstr = "select * from customerList where custName = '$usename'";
    $result = mysql_query($sqlstr,$conn);

    mysql_close($conn);

    if(mysql_num_rows($result)>0){
        
        echo "1";
    }else{
    	echo "0";
    }
?>