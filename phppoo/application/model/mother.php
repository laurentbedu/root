<?php
    class Mother{

        // public function __construct($param){ //toujour public !
        //     echo 'constructeur';
        //     $this->varPublic = $param;
        //     $this->fctPrivate();
        // }

        public $varPublic = "variable de classe public";
        protected $varProtected = "variable de classe protected";
        private $varPrivate = "variable de classe private";

        public static $classname = "user";

        public static function fctStatic(){ 
            //echo $this -> varPublic;
            echo self::$classname;
            //echo static::$classname;
            //return new User();
        }

        function fctStd(){ //public
            echo $this->varPublic;
            echo $this->varProtected;
            echo $this->varPrivate;
            $this->fctProtected();
            $this->fctPrivate();
        }

        protected function fctProtected(){
            // echo $this->varPublic;
            // echo $this->varProtected;
            // echo $this->varPrivate;
        }

        private function fctPrivate(){
            echo $this->varPublic;
            echo $this->varProtected;
            echo $this->varPrivate;
        }
    }
?>