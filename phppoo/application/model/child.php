<?php
    class Child extends Mother{

        public static $classname = "child";

         function test(){
            $this->fctProtected();
            //$this->fctPrivate();
            echo $this->varProtected;
            //echo $this->varPrivate;
         }

         public static function fctStatic(){ 
            //echo $this -> varPublic;
            echo self::$classname;
            //echo static::$classname;
            //return new User();
        }



    }
?>