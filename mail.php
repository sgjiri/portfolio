<?php


$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$object = $_POST['object'];
$message = $_POST['message'];

 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'sg.jiri@fischer-j.eu';                     //SMTP username
    $mail->Password   = 'Kubofka1@';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('sg.jiri@fischer-j.eu', 'Jiri');
    $mail->addAddress('fischerdev01@gmail.com', 'Jirka');     //Add a recipient
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $object;
    $mail->Body    = "Bonjour $firstname $lastname,<br><br>$message"; 
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo "<script>alert(\"Votre message a été envoyé avec succès\")</script>";
    echo "<meta http-equiv='refresh' content='0;url= https://fischer-j.eu'>";
} catch (Exception $e) {
    echo "<script>alert(\"Erreur d'envoie\")</script>";
    echo "<meta http-equiv='refresh' content='0;url= https://fischer-j.eu'>";
}
