<?php
    header("Content-type:text/html;charset=utf-8");
    //获取用户输入的信息
    $usename = $_POST["custId"];
    $usepass = $_POST["custPass"];
    //处理
    //建立连接
    if(($usename!="")&&($usepass!="")){
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
        if(mysql_num_rows($result)>0){
            mysql_close($conn);
            echo "该用户名已经被注册,请重新输入";
        }else{
            $sqlstr = "insert into customerList values('$usename','$usepass')";
            $result = mysql_query($sqlstr,$conn);
            mysql_close($conn);
            if($result==1){
                echo "注册成功"."<br/>"."<a href='../uselogin.html'>"."返回"."</a>";
            }else{
                echo "注册失败";
            }
        }
    }else{
        echo "请输入用户名或密码"."<br/>"."<a href='../uselogin.html'>"."返回"."</a>";
    }
?>