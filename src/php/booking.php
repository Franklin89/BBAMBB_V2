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

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_POST, 1);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $_POST['data']);
	
	curl_setopt($curl, CURLOPT_URL, 'https://tridoobackend.azurewebsites.net/api/webbooking');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    $body = $_POST['data'];
//	$body = json_decode($_POST['data'],true);

	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

	$header .= 'From: Online Reservation <info@ml-software.ch>' . "\r\n";

	// Send email to front desk and dev team
	mail("matteo.locher@ml-software.ch", $subject, $body, $header);
	 
    echo $body;
?>
