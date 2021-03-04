<?php

    require("./db.connection.php");
    header('Content-Type: application/json');

    $sql = "SELECT * FROM tasks";
    $result = mysqli_query($conn, $sql);
    $rData = [];

    while($row = mysqli_fetch_assoc($result)) {
        array_push($rData, $row);
    }

    $resData = array(
        "success"=>true,
        "count" => count($rData),
        "data" => $rData
    );

    echo json_encode($resData);


?>