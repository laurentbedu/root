<?php

class Controller{

public static function init(){
    session_start();
    spl_autoload_register(function ($class) {
        $mainDir = "application/";
        $dirTab = scandir($mainDir);
        $dirTab = array_diff($dirTab, array('.', '..'));
        foreach ($dirTab as $subDir){
            $file = $mainDir . $subDir . "/" . $class . ".php";
            if (file_exists($file)) {
                require $file;
            }
        }        
    });


}

public static function display(){
    echo 'Controller display';
}

}