<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['company'])&&$_POST['company']!="")&&(isset($_POST['message'])&&$_POST['message']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'info@theinar.com';
    $subject = 'Feedback'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Phone: '.$_POST['phone'].'</p> 
					    <p>E-mail: '.$_POST['email'].'</p>  
					    <p>Company: '.$_POST['company'].'</p>  
					     <p>Message: '.$_POST['message'].'</p>          
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>