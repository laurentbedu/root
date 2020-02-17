<?php
class View{

    public static function getContent($route, $datas){
        if($route == 'allproducts'){
            ob_start();
            require 'application/templates/allproducts.php';
            return ob_get_clean();
            // ob_clean();
            // return $page;

        }
    }

}