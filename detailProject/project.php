<?php
include_once './connection.php';
include_once './headerProject.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../style.css">
</head>

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


                <h2> Aperçu du project </h2>
                <video autoplay muted loop>
                    <source src="<?= $reqProject['Video'] ?>">
                </video>

                <div id="liens">
                <a href="<?= $reqProject['git'] ?>">Git du project</a>
                </div>
                



            <?php
            };
            ?>


        </section>





    </main>



</body>

</html>