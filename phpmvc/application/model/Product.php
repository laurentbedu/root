<?php
class Product extends Model{
    
    public static function selectAll(){
        $db = self::getDb();
        $sql = "SELECT * FROM product";
        $statement = $db->prepare($sql);
        $statement->execute();
        $products = $statement->fetchAll(PDO::FETCH_CLASS,"Product");
        return $products;
    }
}