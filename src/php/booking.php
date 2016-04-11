<?php

	//ToDo: Send Email to me
	//$obj = json_decode($json);
	//print $obj->{'foo-bar'}; // 12345

	$subject = 'New Reservation Request from: ';

	$body =

	'<html>
	<head>
	  <title>Reservation Request</title>
	</head>
	<body>
    Guten Tag '. $_POST["title"] . $_POST["lastname"] . $_POST["firstname"] '
	</body>
	</html>';

	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

	$header .= 'From: Online Reservation <info@ml-software.ch>' . "\r\n";

	// Send email to front desk and dev team
	$result = mail("matteo.locher@ml-software.ch", $subject, $body, $header);
	if(!$result) {
     echo "Error";
	} else {
    echo "Success";
	}
?>
