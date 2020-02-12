<?php
class Config{
    
    private static $dbDsn = "mysql:host=localhost;port=3308;dbname=dbone";
    private static $dbUser = "myapp";
    private static $dbPass = "83p9RTUsjIWWr3Cj";

    public static function get($key){
        return self::${$key};
    }

    // public static function getDbDsn(){
    //     return self::$dbDsn;
    // }

    public static function set($key, $value){
        self::${$key} = $value;
    }

    // public static function setDbDsn($value){
    //     self::$dbDsn = $value;
    // }
    
}