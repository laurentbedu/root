<?php
require "../src/dbfunctions.php";

    $errPseudo = "";
    $errEmail = "";
    $errPassword = "";
    $errPwConfirm = "";
    $errAccount = "";

    if(isset($_POST['submit'])){
        $pseudo = verif($_POST['pseudo']);
        $email = verif($_POST['email']);
        $password = verif($_POST['password']);
        $pwconfirm = verif($_POST['pwconfirm']);
        $test = true;
        if (strlen($pseudo) < 3){
            $errPseudo = "Nombre de caractères insuffisants (minimum 3).";
            $test = false;
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errEmail = "Cette adresse email est invalide.";
            $test = false;
        }
        if(!preg_match('@[A-Z]@', $password) || 
               !preg_match('@[a-z]@', $password) ||
               !preg_match('@[0-9]@', $password) ||
               !preg_match('@\W@', $password) || 
               strlen($password) < 8 ||
               strlen($password) > 16){

                $errPassword = "Le mot de passe doit contenir entre 8 et 16 caractères dont : une majuscule, une minuscule, un nombre et un caractère spécial.";
                $test = false;
            }
        if($password != $pwconfirm){
            $errPwConfirm = "Les mots de passes saisis ne sont pas identiques.";
            $test = false;
        }
        if($test){
            $db = dbConnect();
            $stmt = $db->prepare("SELECT count(*) FROM user WHERE pseudo = ? OR email = ?");
            $stmt->execute(array($pseudo, $email));
            /*$stmt = $db->prepare("SELECT count(*) FROM user WHERE pseudo = :pseudo OR email = :email");
            $stmt->execute(array(':pseudo' => $pseudo, ':email' => $email));*/
            $resp = $stmt->fetch();
            if($resp[0] > 0){
                $errAccount = "Pseudo ou email dèjà utilisé.";
                $test = false;
            }
        }
        if($test){
            $stmt = $db->prepare("INSERT INTO user(pseudo, email, password, role_id) VALUES (?, ?, ?, 2)");
            $created = $stmt->execute(array($pseudo, $email, password_hash($password, PASSWORD_BCRYPT)));
            if($created){
                echo "Well Done !";
                header("location: ../view/listeProducts.php");
            }
            else{
                echo "Try again later !";
            } 
                
        }
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>Inscription</title>
    <link rel="stylesheet" href="../libs/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../libs/css/main.css">
        
</head>
<body class="container-fluid">

<div class="card mx-auto mw-360px">
    <div class="card-body">
        <h4 class="card-title mt-3 text-center">Inscription</h4>
        <small class="text-danger"><?= $errAccount; ?></small>
        <form class="m-1" method="post" action="">
            <div class="form-group">
                <input name="pseudo" class="form-control" placeholder="Pseudo" type="text">
                <small class="text-danger"><?= $errPseudo; ?></small>
            </div>
            <div class="form-group">
                <input name="email" class="form-control" placeholder="Email" type="mail">
                <small class="text-danger"><?= $errEmail; ?></small>
            </div>
            <div class="form-group">
                <input name="password" class="form-control" placeholder="Mot de passe" type="password">
                <small class="text-danger"><?= $errPassword; ?></small>
            </div>
            <div class="form-group">
                <input name="pwconfirm" class="form-control" placeholder="Mot de passe" type="password">
                <small class="text-danger"><?= $errPwConfirm; ?></small>
            </div>
            <div class="form-group">
                <button type="submit" name="submit" class="btn btn-primary btn-block">Inscription</button>
            </div>
        </form>
    </div>
</div>


</body>
</html>