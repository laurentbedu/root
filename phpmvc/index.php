<?php
    require "application/controller/Controller.php";
    Controller::init();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>MVC</title>
    <link rel="stylesheet" href="public/bootstrap/bootstrap.min.css">
    </head>
<body class="">
    <div class="container-fluid">
    <a href="index.php?r=allproducts">Voir tous les produits</a><br>
    <a href="index.php?r=showproduct&i=3">Voir le produit avec id=3</a><br>
    <?=
        Controller::display();
    ?>
    </div>
</body>
</html>