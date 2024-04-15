<?php
$host = "localhost:4306";
$dbname = "rrs";
$username = "root";
$password = ""; 

$mysqli= new mysqli ($host, $dbname, $password, $dbname);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
    }

return $mysqli;
?>