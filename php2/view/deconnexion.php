<?php session_start();
    unset($_SESSION['role']);
    unset($_SESSION['pseudo']);
    header("location: ../index.php");
?>