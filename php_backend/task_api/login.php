<?php

    require_once("./db.connection.php");
    header('Content-Type: application/json');

    $id = $_GET['id'];
    $pass = $_GET['pass'];

    $sql = "SELECT * FROM users WHERE user_id='$id' AND password='$pass'";
    $result = mysqli_fetch_assoc(mysqli_query($conn, $sql));

    if (count($result) > 0) {
        $resData = array(
        "success"=>true,
        "message"=>"Logged In Successfully!!",
        "data" => $result
        );
    }else{
        http_response_code(401);
        $resData = array(
        "success"=>false,
        "message"=>"Invalid Login!!"
        );
    }

    echo json_encode($resData);


?>