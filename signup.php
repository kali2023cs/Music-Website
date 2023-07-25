<?php

session_start();

include('db_connect.php');
$msg = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_password = $_POST['user_password'];
    $user_re_password = $_POST['user_re_password'];

    if (!empty($user_name) &&  !empty($user_email) && !empty($user_password) && !is_numeric($user_name)) {
        if ($user_password === $user_re_password ) {
            $query = "insert into user (user,email, password) VALUES('$user_name','$user_email', '$user_password')";
            mysqli_query($con, $query);
            header("Location: index.php");
            
        } else{
            $msg ="Password Not Match";
             
        }
    }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Music App Sign Up </title> 
</head>

<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Sign Up</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" name="user_name" placeholder="Enter your username..." required>
                    </div>
                    <div class="card">
                        <label for="email">Email</label>
                        <input type="email" name="user_email" placeholder="Enter your email..." required>
                    </div>
                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Enter your password..." required>
                    </div>
                    <div class="card">
                        <label for="re-password">Re-Password</label>
                        <input type="password" name="user_re_password" placeholder="Enter your re_password..." required>
                    </div>
                    <input type="submit" value="Sign Up" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""> <span>Remember Me</span>
                    </div>
                    <p> You Have A Account?<a href="index.php">Login</a></p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="tavera.jpg" alt="">
             <!--<h3>Inccorect Password</h3> -->

             <?php
             echo ('<h3>'.$msg.'</h3>');
             ?>

        </div>
    </header>
</body>

</html>




