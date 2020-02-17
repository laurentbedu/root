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
                //var_dump($datas);
                self::$pageToDisplay = View::getContent('allproducts',$datas);
                //$pageToDisplay = AllProductView::getContent($datas);
            break;
            case 'showproduct':
                $datas = Product::selectOne();
                self::$pageToDisplay = View::getContent('showproduct',$datas);
                //$pageToDisplay = ShowProductView::getContent($datas);
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

private static $pageToDisplay;
public static function display(){
    return self::$pageToDisplay;

}

}