<?php
include_once './connection.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./project.css">
</head>
<header id="headerProject">

        <figure>
            <img src="../Img/logo2.png" alt="logo">
        </figure>
        <nav>
            <ul>
                <li><a href="../index.php">Accueil</a></li>
                <li id="showSoumenu">
                    <div>
                    <p>Autre projects</p>
                    </div>
                <ul id="sousmenu">
                <?php
                    $id = $_GET['id'];
                    $reqNav = $db->prepare(
                        'SELECT `id`, `title` FROM `project` WHERE `id` <> :id');

                    $reqNav->bindParam('id', $id, PDO::PARAM_INT);
                    $reqNav->execute();

                    while ($Nav = $reqNav->fetch(PDO::FETCH_ASSOC)) {

                    ?>
                            <li><a href="../detailProject/project.php?id=<?= $Nav['id']?>"><?= $Nav['title'] ?>
                            </a></li>
                    <?php
                    }
                    ?>




                   

                                                    
                </ul>
            </li>
            </ul>
        </nav>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <nav id="navMobil">
        <ul>
                <li><a href="../index.php">Accueil</a></li>
                <li id="showSoumenu">
                    <div>
                    <p>Autre projects</p>
                    </div>
                <ul id="sousmenu">
                <?php
                    $id = $_GET['id'];
                    $reqNav = $db->prepare(
                        'SELECT `id`, `title` FROM `project` WHERE `id` <> :id');

                    $reqNav->bindParam('id', $id, PDO::PARAM_INT);
                    $reqNav->execute();

                    while ($Nav = $reqNav->fetch(PDO::FETCH_ASSOC)) {

                    ?>
                            <li><a href="../detailProject/project.php?id=<?= $Nav['id']?>"><?= $Nav['title'] ?>
                            </a></li>
                    <?php
                    }
                    ?>                                            
                </ul>
            </li>
            </ul>
        </nav>


    </header>


<body>
    <main class="mainProject">
        <section>
            <?php
            $id = $_GET['id'];

            $req = $db->prepare(
                'SELECT `id`, `title`,`content_description`,`Video`, `git`,
GROUP_CONCAT(DISTINCT `langage`) AS `langagess`,
 `id_langage` FROM `langages`

INNER JOIN `project_langage` 
ON `langages`.`id_langage` = `project_langage`.`langege_id`
    
INNER JOIN `project`
ON `project_langage`.`project_id` =`project`.`id`

WHERE `project_id` = :id'
            );
            $req->bindParam('id', $id, PDO::PARAM_INT);
            $req->execute();
            while ($reqProject = $req->fetch(PDO::FETCH_ASSOC)) {


                $langegess = explode(',', $reqProject['langagess']);

            ?>
                <H1><?= $reqProject['title'] ?></H1>

                <p><?= $reqProject['content_description'] ?></p>
                <h2> Technologie utilisées</h2>
                <div id="langages">

                    <?php
                    foreach ($langegess as $value) {
                    ?><img src="<?= $value ?>" alt="">
                    <?php
                    }
                    ?>



                </div>

                <?php 
                    if((isset($reqProject['Video']) && !empty($reqProject['Video']))){
                ?>
                <h2> Aperçu du project </h2>
                <video autoplay muted loop>
                    <source src="<?= $reqProject['Video'] ?>">
                </video>
                <?php 
                    }
                ?>

                <div id="liens">
                <a href="<?= $reqProject['git'] ?>">Git du project</a>
                </div>
            <?php
            };
            ?>
        </section>
    </main>
    <script src="./detailProject.js"></script>
</body>

</html>