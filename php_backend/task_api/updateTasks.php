<?php

    require_once("./db.connection.php");
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
    $desc = $_GET['description'];
    $status = $_GET['status'];
    $assignedBy = $_GET['assignedBy'];
    $assignedTo = $_GET['assignedTo'];
    $due = $_GET['dueDate'];

    // $sql = "UPDATE tasks SET description=".$_GET['description'].", assignedBy=".$_GET['assignedBy'].", assignedTo=".$_GET['assignedTo'].", dueDate=".$_GET['dueDate']." , status=".$_GET['status']." WHERE id=".$id;
    $sql = "UPDATE tasks SET description='$desc', assignedBy='$assignedBy', assignedTo='$assignedTo', dueDate='$due', status='$status' WHERE task_id=$id";
    $result = mysqli_query($conn, $sql);

   if ($result) {
        $resData = array(
        "success"=>true,
        "message" => "Data Updated Successfully",
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