<?php
class Config{

    private static $dbDsn = "mysql:host=localhost;port=3308;dbname=dbone";
    private static $dbUser = "myapp";
    private static $dbPass = "83p9RTUsjIWWr3Cj";

    //getter générique
    public static function get($key){
        //${...} "transforme" une chaine en variable php
        return self::${$key} ?? null;
    }

    //getter pour une variable en particulier
    public static function getDbDsn(){
        return self::$dbDsn;
    }

    //setter générique
    public static function set($key, $value){
        self::${$key} = $value;
    }

    //setter pour une variable en particulier
    public static function setDbDsn($value){
        self::$dbDsn = $value;
    }

}