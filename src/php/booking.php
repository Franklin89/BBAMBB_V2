<?php

	//ToDo: Send Email to me
	$subject = 'New Reservation Request from: ';

	$body =

	'<html>
	<head>
	  <title>Reservation Request</title>
	</head>
	<body>
    ' . $_POST . '
	</body>
	</html>';

	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

	$header .= 'From: Online Reservation <info@ml-software.ch>' . "\r\n";

	// Send email to front desk and dev team
	mail("matteo.locher@ml-software.ch", $subject, $body, $header);

?>
