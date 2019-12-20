<?php 
    if(isset($_POST['table'])){
        echo file_get_contents($_POST['table'].".json");
    }
?>