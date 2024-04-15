<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mysqli = require __DIR__ . "/datab.php";
    $sql = sprintf("SELECT * FROM user
            WHERE email = '%s'",
            $mysqli->real_escape_string($_POST["email"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {

        if (password_verify($_POST["password"], $user["password_hash"])) {
        
            session_start();
            $_SESSION["user_id"] = $user["id"];
            header ("location: home.html");
        }
        else {
            if(

                header ("location: error.html")
            
            );
            } 
        }
    
    }
    
?>
