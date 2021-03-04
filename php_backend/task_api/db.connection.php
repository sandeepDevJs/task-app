<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$conn = mysqli_connect("localhost", "root", "", "taskDB");

// Check connection 
if (!$conn) { 
    die("Connection failed: " . mysqli_connect_error());
}

?>