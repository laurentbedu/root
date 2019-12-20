<?php
    if(isset($_GET['param1']) && isset($_GET['param2'])){
        echo 'Reponse GET : '.$_GET['param1']." ".$_GET['param2'];
    }else if(isset($_POST['param1']) && isset($_POST['param2'])){
        echo 'Reponse POST : '.$_POST['param1']." ".$_POST['param2'];
    }else{
        echo 'Reponse à la requette';
    }
?>