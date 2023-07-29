<?php

// if (isset($_POST['message'])) {
//     $entete  = 'MIME-Version: 1.0' . "\r\n";
//     $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
//     $entete .= 'From: sg.jiri@yahoo.fr' . "\r\n";
//     $entete .= 'Reply-To: ' . $_POST['email'] . "\r\n";




//     $message = "<h3>" . $_POST['firstname'] . " " . $_POST['lastname'] . "</h3>";
//     $message .= "<p>" . htmlspecialchars($_POST['message']) . "</p>";
//     $message .= $_POST['phone'];

//     $retour = mail('fischerdev01@gmail.com', 'Envoi depuis page Contact', $message, $entete);
//     if ($retour)
//         echo '<p>Votre message a bien été envoyé.</p>';
// }


$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$object = $_POST['object'];
$message = $_POST['message'];
require_once "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;

