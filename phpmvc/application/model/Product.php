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

    public static function selectOne($id){
        $db = self::getDb();
        $sql = "SELECT * FROM product WHERE id=?";
        $statement = $db->prepare($sql);
        $statement->execute([$id]);
        $product = $statement->fetchObject("Product");
        return $product;
    }
}