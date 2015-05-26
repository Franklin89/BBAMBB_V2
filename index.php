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
    <link href="css/navigation.css" type="text/css" rel="stylesheet" />

</head>

<body>

    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>

    <ul id="language">
        <li><a href="?lang=de">DE</a></li>
        <li><a href="?lang=fr">FR</a></li>
        <li><a href="?lang=en">EN</a></li>
    </ul>

    <div id="error"></div>

    <div class="main_container" style="padding-top: 100px">

        <div class="container" style="margin-bottom: 70px">
            <a href="">
                <img src="data/images/small_logo.png" height="150px">
            </a>
        </div>

        <!--Nav Bar-->
        <div id="navbar" class="container">
            <div id="bbambb">
                <a href="#bbambb" class="navigation"><?php echo $lang['bbambb'] ?></a>
            </div>
            <div id="rooms">
                <a href="#rooms" class="navigation"><?php echo $lang['rooms'] ?></a>
            </div>
            <div id="locality">
                <a href="#locality" class="navigation"><?php echo $lang['locality'] ?></a>
            </div>
            <div id="offers">
                <a href="#offers" class="navigation"><?php echo $lang['offers'] ?></a>
            </div>
            <div id="reservation">
                <a href="#reservation" class="navigation"><?php echo $lang['reservation'] ?></a>
            </div>
        </div>

        <!--Content: Dynamically loaded if a link gets clicked-->
        <div id="content" class="container">
            <h1><?php echo $lang['welcome']; ?></h1>
        </div>

    </div>

    <!--Footer-->
    <div id="footer_main_container">
        <div id="footer_container">
            <table class="footer_table_setup">
                <tr>
                    <td>BED AND BREAKFAST AM BÜHLBERG</td>
                    <td>|</td>
                    <td>Bühlbergstrasse 108</td>
                    <td>|</td>
                    <td>3775 Lenk im Simmental</td>
                    <td>|</td>
                    <td>+41 (0)33 733 04 19</td>
                    <td>|</td>
                    <td><a href="mailto:info@bbambb.ch">info@bbambb.ch</a></td>
                    <td id="space"></td>
                    <!--<td><a href="http://www.ml-software.ch">Copyright &copy; 2013 ML-Software</a></td>-->
                    <td><a href="files/Impressum.pdf" target="_blank">IMPRESSUM</a></td>
                    <td>|</td>
                    <td><a href="files/AGB.pdf" target="_blank">AGB</a></td>
                </tr>
            </table>
        </div>
    </div>

    <!--Scripts-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="application/javascript" src="lib/jquery.bbq.1.2.1.js"></script>
    <script type="application/javascript" src="js/app.js"></script>

</body>
</html>