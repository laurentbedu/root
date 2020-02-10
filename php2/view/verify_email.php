<?php
require "../src/dbfunctions.php";

    if(isset($_GET['token'])){
        $token = $_GET['token'];
        $ts = (microtime(true) * 10000);
        $db = dbConnect();
            $stmt = $db->prepare("SELECT * FROM user WHERE token = ?");
            $stmt->execute(array($token));
            /*$stmt = $db->prepare("SELECT count(*) FROM user WHERE pseudo = :pseudo OR email = :email");
            $stmt->execute(array(':pseudo' => $pseudo, ':email' => $email));*/
            $resp = $stmt->fetch();
            if($resp){
                $email = $resp['email'];
                //strstr($email, '@', true);
                if(!empty($resp['token'])){
                    $tokenTs = intval(strstr($resp['token'], '$2y$10$', true));
                    $tokenEmail = strstr($resp['token'], '$2y$10$');
                    $testEmail = password_verify($email, $tokenEmail);
                    $testTs = $ts - $tokenTs < (24*60*60*10000);//24h
                    //var_dump($testEmail, $testTs);
                    if($testEmail && $testTs){
                        //active account : delete token
                        $stmt = $db->prepare("UPDATE user SET token='' WHERE id=?");
                        $stmt->execute(array($resp['id']));
                        header("location: connexion.php");
                    }
                }
            }
    }
?>