<?php
$command=$_POST['command'];
$detail=$_POST['detail'];
$name=$_POST['name'];
$mobile=$_POST['mobile'];
$email=$_POST['email'];
$sex=$_POST['sex'];
$callTime=implode(",",(array)$_POST['callTime']);
$to      = 'tm455340@gmail.com';
$subject = "=?UTF-8?B?".base64_encode("網頁資料郵件")."?=";
$message = '聯絡事項:'.$command."\r\n".
           '內容:'.$detail."\r\n".
           '姓名:'.$name."\r\n".
           '行動電話:'.$mobile."\r\n".
           '電子郵件:'.$email."\r\n".
           '性別:'.$sex."\r\n".
           '聯絡時段:'.$callTime;
$headers = 'From:'.$email. "\r\n".
           'Reply-To: tm455340@gmail.com' . "\r\n";

mail($to, $subject, $message, $headers);

echo "送出成功";

header("refresh:3;url='contact.html'");

?>