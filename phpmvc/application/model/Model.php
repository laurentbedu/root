<?php
class Model{

    private static $db = null;
    private static $connectCount = 0;//compte le nb de tentatives de connection
    protected static function getDb() {
        if(self::$db == null){
            // Récupération des paramètres de configuration BD
            $dsn = Config::get("dbDsn");
            $user = Config::get("dbUser");
            $pass = Config::get("dbPass");
            // Création de la connexion
            try{
                self::$db = new PDO($dsn, $user, $pass,
                array(
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
                ));
            }
            catch(PDOException $e){
                // nouvelle connexion ?
                self::$connectCount++;
                if(self::$connectCount < 3){
                    sleep(1);//attendre une seconde
                    return self::getDb();
                }
            }
        }

        return self::$db;
    }

}