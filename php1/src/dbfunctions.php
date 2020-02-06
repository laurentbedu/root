<?php
    require "../config/config.php";

    function dbConnect(){
        $db = null;
        try{
            $db = new PDO(DB_DSN,DB_USER,DB_PASS);
        }
        catch(PDOException $e){
            echo ('Connexion Error : ' . $e -> getMessage());
        }
        return $db;
    }

    function verif($entry){
        $entry = htmlspecialchars(stripslashes(trim($entry)));
        return $entry;
    }