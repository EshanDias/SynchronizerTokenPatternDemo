<?php
    if(isset($_GET['Message'])) {
        $message = urldecode($_REQUEST['Message']);
        echo sprintf("<p>%s</p>", $message);
    }   
?>