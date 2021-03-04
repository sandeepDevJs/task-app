<?php

    require("./db.connection.php");
    header('Content-Type: application/json');

    if(!isset($_GET["id"])){
        $resData = array(
        "success"=>false,
        "message"=>"Could not get data!"
        );

        echo json_encode($resData);

        exit();
    }

    $id = $_GET["id"];
    $sql = "SELECT * FROM tasks WHERE task_id=".$id;
    $result = mysqli_query($conn, $sql);
    

    $row = mysqli_fetch_assoc($result);
        
    

    $resData = array(
        "success"=>true,
        "data" => $row
    );

    echo json_encode($resData);


?>