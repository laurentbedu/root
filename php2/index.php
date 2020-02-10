<?php session_start()?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
    </head>
<body>
    <div class="container-fluid">
        <?php 
            require "templates/header.php";
        ?>
        <?php
            //echo "_" . (microtime(true) * 10000)
            // $to       = 'd2wm.afpa.lievin@gmail.com';
            // $subject  = 'Test sendmail';
            // $message  = 'Hello !';
            // $headers  = 'From: noreply@mywebsite.com' . "\r\n" .
            //             'MIME-Version: 1.0' . "\r\n" .
            //             'Content-type: text/html; charset=utf-8';
            // if(mail($to, $subject, $message, $headers))
            //     echo "Email OK";
            // else
            //     echo "Email failed";

            //echo ((microtime(true) * 10000) - 15811537073248) <  864000000;
            //15811537073248
            //864000000

        ?>
    </div>
</body>
</html>

   
    
