<?php

class Controller{

public static function init(){
    session_start();

    //autoload des classes
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

    //$_GET
    if(isset($_GET['r'])){
        $route = $_GET['r'];
        //$id = $_GET['i'] ?? null; //raccourci de :
        if(isset($_GET['i'])){
            $id = $_GET['i'];
        }
        //
        switch($route){
            case 'allproducts':
                $datas = Product::selectAll();
            break;
            case 'showproduct':
                
            break;
            default : //accueil
                echo 'accueil';
        }
    }
    else{
        //accueil
        echo 'accueil';
    }

}

public static function display(){
    echo 'Controller display';
}

}