<?php 

$name = $_POST['popup-name'];
$phone = $_POST['popup-tel'];
$email = $_POST['popup-mail'];
$text = $_POST['popup-text'];

echo "Успешно отправлено <br>". $name . "<br>" . $phone . "<br>" . $email . "<br>" . $text; 

?> 