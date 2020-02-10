<?php session_start();
    require "../src/dbfunctions.php";
    $errLogin = "";
    $errPassword = "";
    $errAccount = isset($_SESSION['errLogin']) ? $_SESSION['errLogin'] : "";
    if(isset($_POST['submit'])){
        $login = verif($_POST['login']);
        $password = verif($_POST['password']);
        $test = true;
        if(strlen($login) < 1){
            $errLogin = "Saisir votre login.";
            $test = false;
        }
        if(strlen($password) < 1){
            $errPassword = "Saisir votre mot de passe.";
            $test = false;
        }
        if($test){
            $db = dbConnect();
            $stmt = $db->prepare("SELECT * FROM user WHERE pseudo = ? OR email = ?");
            $stmt->execute(array($login, $login));
            $users = array();
            while ($user = $stmt->fetchObject()) {
                $users[] = $user;
            }
            if(count($users) > 0){
                $user = $users[0];
                $test = empty($user->token) && password_verify($password, $user->password);
                //token = '' ?
                if($test){
                    $_SESSION['role'] = $user->role_id;
                    $_SESSION['pseudo'] = $user->pseudo;
                    unset($_SESSION['errLogin']);
                    header("location: ../view/listeProducts.php");
                }
                
            }
            else{
                $test = false;
            }
            if(!$test){
                $_SESSION['errLogin'] = "Identifiant ou mot de passe incorrect !";
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
        <h4 class="card-title mt-3 text-center">Connexion</h4>
        <small class="text-danger"><?= $errAccount; ?></small>
        <form class="m-1" method="post" action="">
            <div class="form-group">
                <input name="login" class="form-control" placeholder="Identifiant" type="text">
                <small class="text-danger"><?= $errLogin; ?></small>
            </div>
            <div class="form-group">
                <input name="password" class="form-control" placeholder="Mot de passe" type="password">
                <small class="text-danger"><?= $errPassword; ?></small>
            </div>
            <div class="form-group">
                <button type="submit" name="submit" class="btn btn-primary btn-block">Connexion</button>
            </div>
        </form>
    </div>
</div>


</body>
</html>