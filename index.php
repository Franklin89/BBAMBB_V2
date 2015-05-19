<?php
session_start();
header('Cache-control: private'); // IE 6 FIX

if(isSet($_GET['lang']))
{
$lang = $_GET['lang'];

// register the session and set the cookie
$_SESSION['lang'] = $lang;

setcookie('lang', $lang, time() + (3600 * 24 * 30));
}
else if(isSet($_SESSION['lang']))
{
$lang = $_SESSION['lang'];
}
else if(isSet($_COOKIE['lang']))
{
$lang = $_COOKIE['lang'];
}
else
{
$lang = 'de';
}

switch ($lang) {
  case 'en':
    $lang_file = 'lang.en.php';
    break;

  case 'de':
    $lang_file = 'lang.de.php';
    break;

  case 'fr':
    $lang_file = 'lang.fr.php';
    break;

  default:
  $lang_file = 'lang.de.php';

}

include_once 'languages/'.$lang_file;
?>

<!DOCTYPE html>
<html>
<head lang="de-CH">
    <meta charset="UTF-8">
    <title>Bed and Breakfast am Bühlberg</title>

    <!--Fonts-->
    <link href='https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Serif:400,700,400italic' rel='stylesheet' type='text/css'>

    <!--Stylesheets-->
    <link href="css/main.css" type="text/css" rel="stylesheet" />

</head>

<body>

    <ul>
        <li><a href="index.php?lang=de">DE</a></li>
        <li><a href="index.php?lang=fr">FR</a></li>
        <li><a href="index.php?lang=en">EN</a></li>
    </ul>

    <div class="main_container">
        <h1><?php echo $lang['WELCOME']; ?></h1>

        <!--Nav Bar-->
        <div class="container">
            <ul>
                <li><button id="test">Test</button></li>
            </ul>
        </div>

        <!--Content: Dynamically loaded if a link gets clicked-->
        <div class="container">
            <h1><?php echo $lang['WELCOME']; ?></h1>
        </div>
    </div>

    <!--Scripts-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="application/javascript" src="js/app.js"></script>

</body>
</html>