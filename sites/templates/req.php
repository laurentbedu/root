<?php
    if(isset($_POST['table']) && isset($_POST['data'])){
        file_put_contents($_POST['table'].".json", $_POST['data']);
    }
?>