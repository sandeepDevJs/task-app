<?php

    require_once("./db.connection.php");
    header('Content-Type: application/json');

    if (!$_GET["task_id"]) {

        $resData = array(
            "success"=>false,
            "message"=>"No Data Found!",
            "count" => 0,
            "data" => []
        );

        echo json_encode($resData);
        exit();
    }

    $id = $_GET["task_id"];
    $sql = "DELETE FROM tasks WHERE task_id=$id";
    $result = mysqli_query($conn, $sql);

   if ($result) {
        $resData = array(
        "success"=>true,
        "message" => "Data Deleted Successfully",
    );

   }else{

        $resData = array(
            "success"=>false,
            "message"=>"Something Went Wrong!",
            "count" => 0,
            "data" => []
        );
   }

    echo json_encode($resData);


?>