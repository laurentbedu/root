<?php
class View{

    public static function getContent($route, $datas){
        if($route == 'allproducts'){
            ob_start();
            require 'application/templates/allproducts.php';
            return ob_get_clean();
        }
        if($route == 'showproduct'){
            ob_start();
            require 'application/templates/showproduct.php';
            return ob_get_clean();
        }
    }

}