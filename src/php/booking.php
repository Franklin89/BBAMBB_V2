<?php

	//ToDo: Send Email to me
	//$obj = json_decode($json);
	//print $obj->{'foo-bar'}; // 12345

	$subject = 'New Reservation Request from: ';

//	$body =

//	'<html>
//	<head>
//	  <title>Reservation Request</title>
//	</head>
//	<body>
//    Guten Tag '. $_POST["Title"] . $_POST["LastName"] . $_POST["FirstName"] '
//	</body>
//	</html>';

	$body = $_POST['data'];

	$ch = curl_init('https://tridoobackend.azurewebsites.net/api/webbooking');                                                                      
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
	curl_setopt($ch, CURLOPT_POSTFIELDS, $body);                                                                  
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
		'Content-Type: application/json',                                                                                
		'Content-Length: ' . strlen($body))                                                                       
	);                                                                                                                   

	$result = curl_exec($ch);
    
//	$body = json_decode($_POST['data'],true);

	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

	$header .= 'From: Online Reservation <info@ml-software.ch>' . "\r\n";

	// Send email to front desk and dev team
	mail("matteo.locher@ml-software.ch", $subject, $body, $header);
	 
    echo $result;
?>
