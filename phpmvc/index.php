<?php
    require "application/controller/Controller.php";
    Controller::init();
    Product::test();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>MVC</title>
    <link rel="stylesheet" href="public/bootstrap/bootstrap.min.css">
    </head>
<body class="bg-dark text-light">
    <div class="container-fluid">
    <?php
        Controller::display();
    ?>
    </div>
</body>
</html>