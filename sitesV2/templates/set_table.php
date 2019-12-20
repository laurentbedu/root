<?php
    if(isset($_POST['table']) && isset($_POST['data'])){
        $res = file_put_contents($_POST['table'].".json", $_POST['data']);
        echo $res != false;//OK => 1
        //la fonction file_put_contents renvoi soit le nombre d'octets écrit
        //soit false (si l'écriture du fichier ne s'est pas déroulée correctement)
    }
?>