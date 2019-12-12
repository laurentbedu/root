<?php
    header("Access-Control-Allow-Origin: *"); 
    $strJsonFileContents = file_get_contents("users.json");
    echo $strJsonFileContents;
?>