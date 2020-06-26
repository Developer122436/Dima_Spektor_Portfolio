<?php
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        
        $emailTo = "dorsaaran1224@gmail.com";

        $headers  = 'MIME-Version: 1.0' . "\r\n"
        .'Content-type: text/html; charset=utf-8' . "\r\n"
        .'From: ' . $emailFrom . "\r\n";
    
        $body = '<h2>Contact Request</h2>
        <h4>Name</h4><p>'.$name.'</p>
        <h4>Email</h4><p>'.$emailFrom.'</p>
        <h4>Email</h4><p>'.$subject.'</p>
        <h4>Message</h4><p>'.$message.'</p>
        ';

        if(mail($emailTo, $subject, $body, $headers)) {
          header("Location: contact.html");;
        } else {
          echo '<p>We are sorry but the email did not go through.</p>';
        }
?>



