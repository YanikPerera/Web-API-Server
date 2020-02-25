<?php
    $loc = file_get_contents('https://ipapi.co/8.8.8.8/json/');
    echo $loc;
    $obj = json_decode($loc);
?>
