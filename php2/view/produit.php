<?php session_start();
    require "../src/dbfunctions.php";
    $db = dbConnect();
    if(isset($_POST['delete'])){
        if(!is_null($db)){
            $id = verif($_POST['id']);
            $sql = "DELETE FROM products WHERE id=$id";
            $stmt = $db->prepare($sql);
            $test = $stmt->execute();
            if($test){
                
                header("location: listeProducts.php");
            }
        }
    }
    if(isset($_POST['add'])){
        $_SESSION['addProduct'] = "ok";
        header("location: produit.php");
    }
    if(isset($_POST['create'])){
        //$id = verif($_POST['id']);
        $name = verif($_POST['name']);
        $description = verif($_POST['description']);
        $price = verif($_POST['price']);
        $category_id = verif($_POST['category_id']);
        $image = "telechargement.jpeg";
        //image
        if(isset($_FILES["upload"])){

            $file = $_FILES["upload"]["tmp_name"];
            $mime = mime_content_type($file);
            $test = strstr($mime,"/",true) == "image";
            if($test){
                $ext = substr(strstr($mime,"/"),1);
                $imgfilename = microtime(true) * 10000 . '.' . $ext;
                $target = "../libs/img/" . $imgfilename;
                $imgdata = getimagesize($file);
                
                //var_dump($mime, $test, $ext, $imgdata, $target);
                //php.ini upload_max_filesize
                if (move_uploaded_file($file, $target)) {
                    $image = $imgfilename;
                    //update the db
                    // $db = dbConnect();
                    // $stmt = $db->prepare("UPDATE products SET image=? WHERE id=?");
                    // $stmt->execute(array($imgfilename,$id));
                    //redirect
                }
            }
        }

        //
        if(!is_null($db)){
            $sql = "INSERT INTO products(name, description, price, category_id, image) VALUES (:name, :description, :price, :category_id, :image)" ;
            $stmt = $db->prepare($sql);
            //$stmt->bindParam(":id", $id);
            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":description", $description);
            $stmt->bindParam(":price", $price);
            $stmt->bindParam(":category_id", $category_id);
            $stmt->bindParam(":image", $image);
            $test = $stmt->execute();
            if($test){
                unset($_SESSION['addProduct']);
                $id = $db->lastInsertId();
                header("location: ?id=".$id);
            }
        }
    }
    if(isset($_POST['valider'])){
        $id = verif($_POST['id']);
        $name = verif($_POST['name']);
        $description = verif($_POST['description']);
        $price = verif($_POST['price']);
        $category_id = verif($_POST['category_id']);
        //image

        //
        if(!is_null($db)){
            $sql = "UPDATE products SET name = :name, description = :description, price = :price, category_id = :category_id WHERE id=:id" ;
            $stmt = $db->prepare($sql);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":description", $description);
            $stmt->bindParam(":price", $price);
            $stmt->bindParam(":category_id", $category_id);
            $test = $stmt->execute();
            if($test){
                header("location: ?id=".$id);
            }
        }
    }
    if(isset($_GET['id']) || isset($_POST['modifier'])){
        
        $id = isset($_GET['id']) ? $_GET['id'] : $_POST['id'];
        if(!is_null($db)){
            $sql = "SELECT p.id, category_id, p.name AS pname, p.description, p.price, p.image, c.name AS cname FROM products AS p, categories AS c WHERE p.category_id = c.id AND p.id = $id" ;
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $products = array();
            while ($product = $stmt->fetchObject()) {
                $products[] = $product;
            }

            $bp = 0;
        }
        $product = $products[0];
        
    }
    if(isset($_POST['modifier']) || isset($_SESSION['addProduct'])){
        if(!is_null($db)){
            $sql = "SELECT * FROM categories";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $categories = array();
            while ($category = $stmt->fetchObject()) {
                $categories[] = $category;
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="../libs/bootstrap/bootstrap.min.css">
    </head>
<body>
    <div class="container-fluid">
        <?php 
            require "../templates/header.php";
        ?>

        <?php
        
            // $product = $products[0];

        if(isset($_GET['id'])){
        ?>
        <div class="mt-5">
            <h3>Détail de l'article</h3>
        </div>
        <div class="mt-5">
            <h2>Name : <?php echo $product->pname; ?></h2>
            <p>Description : <?php echo $product->description; ?></p>
            <p>Prix : <?php echo $product->price; ?> euros</p>
            <p><img src="../libs/img/<?php echo $product->image; ?>" alt="image"></p>
            <p>Category : <?php echo $product->cname; ?></p>
            <button class="btn btn-info">
                <a href="../view/listeProducts.php">Retour</a>
            </button>
            <!-- si admin -->
            <form method="post" action="../view/produit.php">
                <input class="d-none" name="id" value="<?= $product -> id ?>"></input>
                <button type="submit" name="modifier" class="btn btn-success">Modifier</button>
                <button type="submit" name="delete" class="btn btn-danger">Supprimer</button>
            </form>
        </div>

        <?php
        }
        elseif(isset($_POST['modifier'])){ ?>

        <form method="post" action="">
            <input class="d-none" name="id" value="<?= $product -> id ?>"></input>
            <label>Nom : </label>
            <input name="name" value="<?= $product -> pname ?>"></input>
            <label>Desc. : </label>
            <input name="description" value="<?= $product -> description ?>"></input>
            <label>Prix : </label>
            <input name="price" value="<?= $product -> price ?>"></input>
            <!--TODO image-->
            <div>
            <img src="../libs/img/<?php echo $product->image; ?>" alt="image">
            </div>
            <!-- <input type="file" name="upload" accept="image/x-png,image/gif,image/jpeg"> -->
            

            <label>Catég. : (Merci Kilian !)</label>
            <select name="category_id"  class="form-control" >
                <?php
                foreach ($categories as $category) {
                ?>
                <option <?php if ($product->category_id == $category->id){echo "selected";} ?> value="<?= $category->id ?>"> <?= $category->name ?> </option>
                <?php } ?>
            </select>
            
            <button type="submit" name="valider" class="btn btn-success">Valider</button>
        </form>       



        <?php    
        }
        else{ ?>
        <form method="post" action="" enctype="multipart/form-data">
            <input class="d-none" name="id" value=""></input>
            <label>Nom : </label>
            <input name="name" value=""></input>
            <label>Desc. : </label>
            <input name="description" value=""></input>
            <label>Prix : </label>
            <input name="price" value=""></input>
            <!--TODO image-->

            <input type="file" name="upload" accept="image/x-png,image/gif,image/jpeg">
            

            <label>Catég. : (Merci Kilian !)</label>
            <select name="category_id"  class="form-control" >
                <?php
                foreach ($categories as $category) {
                ?>
                <option value="<?= $category->id ?>"> <?= $category->name ?> </option>
                <?php } ?>
            </select>
            
            <button type="submit" name="create" class="btn btn-success">Valider</button>
        </form> 
        <?php

        } ?>
    

</div>
</body>
</html>