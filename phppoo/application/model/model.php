<?php

class Model{

    private static $db = null;
    private static function getDb() {
        if (self::$db === null) {
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
            } catch(PDOException $e){
                // nouvelle connexion ?
            }
        }
        return self::$db;
    }

    public static function query($sql, $params = null) {
        if ($params == null) {
            $resultat = self::getDb()->query($sql);   // exécution directe
        }
        else {
            $resultat = self::getDb()->prepare($sql); // requête préparée
            $resultat->execute($params);
        }
        return $resultat;
    }

    public static function selectOne($id){
        $classe = get_called_class();
        $table = strtolower($classe);
        $sql = "SELECT * FROM $table WHERE id=?";
        $resp = self::query($sql,[$id]);
        $row = $resp->fetchObject($classe);
        $bp=null;
        return $row;
    }

    public static function insert($fields){
        //
        $classe = get_called_class();
        $table = strtolower($classe);
        $columns = "";
        $values = "";
        foreach($fields as $k=>$v){

            $bp = null;
        }
        $sql = "INSERT INTO $table ($column) VALUES ()";
    }

    public function update($fields){

    }


    
}