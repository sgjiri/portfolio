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
    $mail->Host       = 'smtp.mail.yahoo.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'sg.jiri@yahoo.fr';                     //SMTP username
    $mail->Password   = 'Kubofka1@';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('sg.jiri@yahoo.fr', 'Jiri');
    $mail->addAddress('fischerdev01@gmail.com', 'Jirka');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $object;
    $mail->Body    = "Bonjour $firstname $lastname,<br><br>$message"; 
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
