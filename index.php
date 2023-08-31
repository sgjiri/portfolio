<?php
include_once './detailProject/connection.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Exploration de mon parcours en tant que développeur web. Plongez dans mes compétences en conception, en codage et en création de sites web qui allient esthétique et performance.">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Averia+Gruesa+Libre&display=swap" rel="stylesheet">
    <link rel="icon" href="./Img/Fish3.png">
    <title>PortfolioJF</title>
</head>

<body>
    <header id="mainHeader">
        <figure>
            <img src="./Img/logo2.png" alt="logo">
        </figure>
        <nav>
            <ul>
                <li><a href="#fullscreen">Accueil</a></li>
                <li><a href="#lienProjects">Mes réalisations</a></li>
                <li><a href="#contentPresentation">Qui suis-je</a></li>
                <li><a href="#contentContact">Contact</a></li>
            </ul>
        </nav>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <nav id="navMobil">
            <ul>
                <li><a href="#fullscreen">Accueil</a></li>
                <li><a href="#lienProjects">Mes réalisations</a></li>
                <li><a href="#contentPresentation">Qui suis-je</a></li>
                <li><a href="#contentContact">Contact</a></li>
            </ul>
        </nav>

    </header>
    <main>
        <section>
            <div id="fullscreen">
                <div id="sky">
                    <div id="clouds">
                        <figure id="cloud1">
                            <img src="./Img/Nouage1.svg" alt="cloud1">
                        </figure>
                        <figure id="cloud2">
                            <img src="./Img/Nuage 2.svg" alt="cloud2">
                        </figure>
                        <figure id="cloud3">
                            <img src="./Img/Nouage3.svg" alt="cloud3">
                        </figure>

                    </div>
                    <div id="imgPecheur">
                        <figure id="pecheur">
                            <img src="./Img/pecheur.svg" alt="pecheur">
                        </figure>
                        <figure id="barque">
                            <img src="./Img/barque 2.svg" alt="barque">
                        </figure>
                    </div>
                    <figure id="reeds">
                        <img src="./Img/raoseaux.png" alt="reeds">
                    </figure>
                    <figure id="reeds2">
                        <img src="./Img/raoseaux2.png" alt="reeds">
                    </figure>
                    <div id="text">
                        <h1>Jirka Fischer</h1>
                        <h2 class="h2">Developpeur web</h2>



                    </div>


                </div>
                <figure id="sea">
                    <img src="./Img/sea.svg" alt="sea">



                    <p>
                        Issue de l’agroalimentaire et de la théologie je suis un professionnel polyvalent, engagé et creatif, prêt à apporter une contribution significative à tout projet.
                    </p>
                    <figure id="js" class="boule">
                        <img src="./Img/JS.png" alt="JS">
                    </figure>
                    <figure id="html" class="boule">
                        <img src="./Img/html.png" alt="html">
                    </figure>
                    <figure id="css" class="boule">
                        <img src="./Img/CSS.png" alt="css">
                    </figure>
                    <figure id="php" class="boule">
                        <img src="./Img/PHP.png" alt="php">
                    </figure>
                    <figure id="sql" class="boule">
                        <img src="./Img/SQL.png" alt="sql">
                    </figure>
                    <figure id="python" class="boule">
                        <img src="./Img/Python.png" alt="python">
                    </figure>
                    <figure class="fish" id="fish1">
                        <img src="./Img/Fish1.png" alt="fish">
                    </figure>
                    <figure class="fish" id="fish2">
                        <img src="./Img/Fish2.png" alt="fish">
                    </figure>
                    <figure class="fish" id="fish3">
                        <img src="./Img/Fish3.png" alt="fish">
                    </figure>

                </figure>



            </div>
        </section>
        <section class="section" id="projects">

            <div class="content" id="contentProjects">



                <h2 class="h2" id="h2Projects">Mes réalisations</h2>
                <button id="btnRealisation">
                    <span id="realisations">Voir mes réalisations</span>
                    <span id="X">X</span>
                </button>

                <div id="lienProjects"></div>
                <?php
                $req = $db->prepare('SELECT `id`,`title`,`content_description`,`Video` FROM `project`WHERE `title` = "biblook"');
                $req->execute();
                $reqBiblook = $req->fetch(PDO::FETCH_ASSOC);
                ?>
                <a href="./detailProject/project.php?id=<?= $reqBiblook['id'] ?>" class="action cardBiblook" id="biblookHover"></a>
                <div class="card cardBiblook">
                    <div class="textCard" id="textBiblook">
                        <h3>Biblook</h3>
                        <p>Réalisation d'un site de bibliothèque</p>
                    </div>
                    <div class="divGrid biblook"></div>
                </div>

                <?php
                $reqVache = $db->prepare('SELECT `id`,`title`,`content_description` FROM `project` WHERE `title` = "Homeaway"');
                $reqVache->execute();
                $Vache = $reqVache->fetch(PDO::FETCH_ASSOC);
                ?>
                <a href="./detailProject/project.php?id=<?= $Vache['id'] ?>" class="action cardVache" id="vacheHover"></a>
                <div class="card cardVache">
                    <div class="textCard" id="textVache">
                        <h3>Homeaway</h3>
                        <p>Réalisation d'un site de location chez habitants</p>
                    </div>
                    <div class="divGrid vache"></div>
                </div>


                <?php
                $reqSalon = $db->prepare('SELECT `id`,`title`,`content_description` FROM `project` WHERE `title` = "Salon Lotus"');
                $reqSalon->execute();
                $reqLotus = $reqSalon->fetch(PDO::FETCH_ASSOC);
                ?>
                <a href="./detailProject/project.php?id=<?= $reqLotus['id'] ?>" class="action cardLotus" id="lotusHover"></a>
                <div class="card cardLotus">
                    <div class="textCard" id="textLotus">
                        <h3>Lotus</h3>
                        <p>Réalisation d'un site de salon de beauté
                        </p>
                    </div>
                    <div class="divGrid lotus"></div>
                </div>


                <?php
                $reqJadoo = $db->prepare('SELECT `id`,`title`,`content_description` FROM `project` WHERE `title` = "Jadoo"');
                $reqJadoo->execute();
                $Jadoo = $reqJadoo->fetch(PDO::FETCH_ASSOC);
                ?>
                <a href="./detailProject/project.php?id=<?= $Jadoo['id'] ?>" class="action cardJadoo" id="jadooHover"></a>
                <div class="card cardJadoo">
                    <div class="textCard" id="textJadoo">
                        <h3>Jadoo</h3>
                        <p>Réalisation d'un site de restaurant japonais
                        </p>
                    </div>
                    <div class="divGrid jadoo"></div>
                </div>






            </div>
        </section>
        <section class="section" id="presentation">
            <div class="content" id="contentPresentation">
                <div class="left">
                    <div id="aquariom">
                        <h2 class="h2 h2Presentation" id="h2Presentation">Mes compétences:</h2>
                        <div class="contentPresentation">
                            <figure id="jsCompetences" class="boule">
                                <img src="./Img/JS.png" alt="JS">
                            </figure>
                            <figure id="htmlCompetences" class="boule">
                                <img src="./Img/html.png" alt="html">
                            </figure>
                            <figure id="cssCompetences" class="boule">
                                <img src="./Img/CSS.png" alt="css">
                            </figure>
                            <figure id="phpCompetences" class="boule">
                                <img src="./Img/PHP.png" alt="php">
                            </figure>
                            <figure id="sqlCompetences" class="boule">
                                <img src="./Img/SQL.png" alt="sql">
                            </figure>
                            <figure id="pythonCompetences" class="boule">
                                <img src="./Img/Python.png" alt="python">
                            </figure>
                            <figure id="gitCompetences" class="boule">
                                <img src="./Img/GIT.png" alt="git">
                            </figure>
                        </div>
                    </div>
                    <div class="CV">
                        <a target="_blank" class="btn" href="./asset/JiriFischerCV.pdf"> Télécharger mon CV</a>
                    </div>
                    <div class="text">
                        <h2 class="h2 h2Presentation">Qui est Jirka</h2>
                        <div class="contentPresentation">
                            <p>
                                Je suis Jirka Fischer, un développeur web passionné par la technologie et la création de sites web.
                            </p>
                            <br>
                            <p>
                                Issue de l’agroalimentaire et de la théologie je suis un professionnel polyvalent, engagé et créatif, prêt à apporter une contribution significative à tout projet.
                            </p>
                            <br>
                            <p>
                                Ma formation en développement web m'a permise d'acquérir de solides compétences en HTML, CSS, JavaScript, ainsi que des connaissances en PHP et en bases de données. Je suis également familié avec les outils tels que Git et les frameworks tels que React.
                            </p>
                            <br>
                            <p>
                                Bien que je sois relativement nouveau dans le domaine du développement web, j'ai une solide compréhension des meilleures pratiques de codage et de conception. Je suis également prêt à apprendre de nouvelles technologies et à relever de nouveaux défis.
                            </p>
                            <br>
                            <p>
                                Si vous recherchez un développeur web déterminé, capable de résoudre des problèmes , désireux de continuer à apprendre et à se développer dans le domaine, je serais ravi de discuter de vos besoins en matière de développement web.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="right">
                    <figure class="foto foto1">
                        <img src="./Img/foto.png" alt="">
                    </figure>
                    <figure class="foto foto2">
                        <img src="./Img/foto1.png" alt="">
                    </figure>
                </div>

            </div>
        </section>
        <section class="section" id="contact">

            <div class="content" id="contentContact">
                <div id="lien contact"></div>
                <div class="padding">
                    <h2 class="h2 h2Presentation">Contact</h2>


                    <!-- <?php

                            // if (isset($_POST['message'])) {
                            // // on récupère les données du formulaire

                            // $firstname = $_POST['firstname'];
                            // $lastname = $_POST['lastname'];
                            // $email = $_POST['email'];
                            // $phone = $_POST['phone'];
                            // $object = $_POST['object'];
                            // $message = $_POST['message'];


                            // // notre email 

                            // $to = "fischerdev01@gmail.com";

                            // // sujet du message

                            // $subject = "Message de contact depuis votre portfolio";

                            // // message 

                            // $body = "Firstname: $firstname\Lastname: $lastname\Email: $email\Phone: $phone\Object: $object\Message: $message";
                            // $retour = (mail($to, $subject, $body,''));

                            // if ($retour){
                            //     echo "Votre message a bien été envoyé";
                            // } else {
                            //     echo "Une erreur est survenue lors de l'envoi de votre message.";
                            // }



                            // }
                            ?>     -->

                    <form action="mail.php" method="post" id='formContact'>
                        <div class="zonneForm zonneForm1">
                            <div class="name deuxinfo">
                                <div class="champ lastname">
                                    <label class="label" for="lastname">Nom*</label>
                                    <input id="lastname" type="text" class="info" name="lastname" required>
                                </div>
                                <div class="firstname champ">
                                    <label for="firstname" class="label">Prénom*</label>
                                    <input id="firstname" type="text" class="info" name="firstname" required>
                                </div>
                            </div>
                            <div class="contacts deuxinfo">
                                <div class="champ email">
                                    <label for="email" class="label">E-mail*</label>
                                    <input id="email" type="email" class="info" name="email" required>
                                </div>
                                <div class="champ tel">
                                    <label for="phone" class="label">Telephone*</label>
                                    <input id="phone" class="info" type="text" name="phone" required>
                                </div>

                            </div>

                            <div class="champ object">
                                <label for="object" class="label">Object*</label>
                                <input id="object" type="text" class="info" name="object" required>
                            </div>
                            <div class="champ message">
                                <label for="message" class="label">Message*</label>
                                <textarea name="message" id="message" cols="30" rows="10" class="info"></textarea>
                            </div>
                            <div class="champ confidencionality">
                                <input type="checkbox" class="info" name="confidentiality" id="Check">
                                <label for="confidencionality" class="label"> En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <a target="_blank" href="./asset/Confidencialité.pdf">Politique de confidentialité</a>.</label>
                            </div>
                            <input class="champ submit" type="submit" name="submit" value="envoyer" />
                        </div>
                        <div class="zonneForm zonneForm2">
                            <div class="contactRight">
                                <div class="contentContactRight momMail">
                                    <figure>
                                        <img src="./Img/icons8-email-64 1.png" alt="iconmail">
                                    </figure>
                                    <p>sg.jiri@yahoo.fr</p>
                                </div>
                                <div class="contentContactRight monAdresse">
                                    <figure>
                                        <img src="./Img/icons8-country-house-100 1.png" alt="iconhause">
                                    </figure>
                                    <p>01000, Bourg en Bresse</p>
                                </div>
                                <div class="contentContactRight mesReseaux">
                                    <a href="https://github.com/sgjiri" target="_blank">
                                        <img src="./Img/icons8-github-100.png" alt="icongit">
                                    </a>
                                    <a href="https://www.linkedin.com/in/jiri-fischer-453529101/" target="_blank">
                                        <img src="./Img/icons8-linkedin-entouré-100.png" alt="ikonlinkedin">
                                    </a>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>


    </main>
    <script src="./main.js"></script>
    <!-- <script src="./sc.js"></script> -->
</body>

</html>