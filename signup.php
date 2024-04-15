<?php
if (empty($_POST["name"])){
    die ("name is required");
}
if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
    die ("email is not valid");
}
if (strlen($_POST["password"])<8) {
    die ("password must be at least 8 characters long");
}
if ( ! preg_match("/[a-z]/i",$_POST["password"])){
    die ("password must contain at least one letter");
}
if ($_POST["password"] != $_POST["confirmPassword"]){
    die ("passwords do not match");
}
$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ . "/datab.php";

$sql = "INSERT INTO user (name, email, password_hash)
        values (?,?,?)";

$stmt = $mysqli->stmt_init();
if ( ! $stmt->prepare($sql)) {
    die("SQL error: ".$mysqli->error);
    }

$stmt->bind_param("sss",
    $_POST["name"],
    $_POST["email"],
    $password_hash);

    if ($stmt->execute()) {

        header("Location: home.html");
        exit;

        echo "Signup successful";
        } 
    else {
        if ($mysqli->errno === 1062) {
        die("email already taken");
        } 
    else {
        die ($mysqli->error . "" . $mysqli->errno);
        }
    }
?>
