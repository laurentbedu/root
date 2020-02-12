<?php
require "application/config/config.php";
require "application/model/model.php";
require "application/model/product.php";    
require "application/model/category.php"; 
    //Config::set('dbDsn','toto');
    //var_dump(Config::get('dbDsn'));

    // $sql = "SELECT * FROM product";
    // Product::query($sql);
    // $sql = "SELECT * FROM product WHERE id=?";
    // Product::query($sql, [3]);

    Product::insert(['name'=>'nomdema categ', 'description' => '...']);
    //var_dump($prod3);
?>