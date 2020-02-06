<?php

    require "src/dbfunctions.php";
    $db = dbConnect();
    if(!is_null($db)){
        $stmt = $db->prepare("SELECT * FROM categories");
        $stmt->execute();
        $categories = array();
        while ($category = $stmt->fetchObject()) {
            $categories[] = $category;
        }
        var_dump($categories);
    }
    
