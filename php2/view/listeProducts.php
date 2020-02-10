<?php session_start();
    require "../src/dbfunctions.php";
    $db = dbConnect();
    if(!is_null($db)){
        $sql = "SELECT p.id, p.name AS pname, p.description, p.price, p.image, c.name AS cname FROM products AS p, categories AS c WHERE p.category_id = c.id";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $products = array();
        while ($product = $stmt->fetchObject()) {
            $products[] = $product;
        }

        $bp = 0;
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
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Catégorie</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($products as $product) {?>
        <tr>
            <td><?= $product -> pname ?></td>
            <td><?= $product -> description ?></td>
            <td><?= $product -> price ?></td>
            <td>
                <img src="<?= '../libs/img/'.$product->image  ?>" alt="<?php echo $product->image?>">
            </td>
            <td><?= $product -> cname ?></td>
            <td>
                <a href="../view/produit.php?id=<?= $product->id ?>">
                    <button class="btn btn-secondary">Détail</button>
                </a>
                <form method="post" action="../view/produit.php">
                    <input class="d-none" name="id" value="<?= $product -> id ?>"></input>
                    <button type="submit" name="modifier" class="btn btn-success">Modifier</button>
                    <button type="submit" name="delete" class="btn btn-danger">Supprimer</button>
                </form>
                
            </td>
        </tr>
        <?php } ?>
    </tbody>
</table>

</div>
</body>
</html>