<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// On vérifie si le formulaire a été soumis
if (!empty($_POST)) {
    // Initialisation d'un tableau d'erreurs dans la session

    $_SESSION["error"] = [];

    // Vérification de la présence et de la non-vacuité des données d'email et de mot de passe
    if (isset($_POST["email"], $_POST["firstname"], $_POST["lastname"], $_POST["phone"], $_POST["object"], $_POST["message"]) && !empty($_POST["email"]) && !empty($_POST["firstname"]) && !empty($_POST["lastname"]) && !empty($_POST["phone"]) && !empty($_POST["object"]) && !empty($_POST["message"])) {

        $firstname = strip_tags($_POST['firstname']);
        $lastname = strip_tags($_POST['lastname']);
        $email = strip_tags($_POST['email']);
        $phone = strip_tags($_POST['phone']);
        $object = strip_tags($_POST['object']);
        $message = strip_tags($_POST['message']);
        $phonePattern = '/^[0-9]{10}$/';

        // Validation de l'adresse email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            user();
            // Ajout d'une erreur si l'email n'est pas valide
            $_SESSION["error"]["emailFaild"] = "L'adresse email est incorrecte";
            header("Location: /PHP/portfolio/index.php#contact");
            exit;
        }

        if (!preg_match($phonePattern, $phone)) {
            user();
            $_SESSION["error"]["phoneInvalid"] = "Le numéro de téléphone doit contenir 10 chiffres et aucune lettre";
            header("Location: /PHP/portfolio/index.php#contact");
            exit;
        }

        // Vérification de la case de confidentialité
        if (!isset($_POST["confidentiality"])) {
            // Ajout d'une erreur si la case n'est pas cochée
            $_SESSION["error"]["confidentiality"] = "Vous devez accepter la politique de confidentialité pour envoyer le formulaire.";
            header("Location: /PHP/portfolio/index.php#contact");
            exit;
        }

        // Si aucune erreur n'est présente jusqu'ici
        if ($_SESSION["error"] === []) {

            $_SESSION["sendMail"] = [];
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
                unset($_SESSION["user"]);
                unset($_SESSION["error"]);
                $_SESSION["sendMail"]["succes"] = "Votre message a été envoyé avec succès";
                header("Location: /PHP/portfolio/index.php#contact");
                exit;
            } catch (Exception $e) {
                $_SESSION["sendMail"]["error"] = "Erreur d'envoie";
                header("Location: /PHP/portfolio/index.php#contact");
                exit;
                
            }
        }
    } else {

        user();
        // Ajout d'une erreur si le formulaire est soumis mais incomplet
        $_SESSION["error"]["empty"] = "Le formulaire est incomplet";
        header("Location: /PHP/portfolio/index.php#contact");
        exit;
    }
}


function user()
{
    $_SESSION["user"]["lastname"] = $_POST['lastname'];
    $_SESSION["user"]["firstname"] = $_POST['firstname'];
    $_SESSION["user"]["email"] = $_POST['email'];
    $_SESSION["user"]["phone"] = $_POST['phone'];
    $_SESSION["user"]["object"] = $_POST['object'];
    $_SESSION["user"]["message"] = $_POST['message'];
}
