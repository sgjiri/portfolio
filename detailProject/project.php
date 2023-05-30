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

$req = $db->prepare('SELECT `id`, `title`,`content_description`,`content_techno`, `langage` FROM `project`

INNER JOIN `project_langage` 
ON `project`.`id` = `project_langage`.`project_id`
    
INNER JOIN `langages`
ON `project_langage`.`langege_id` =`langages`.`id_langage`

WHERE `id` = :id');
$req->bindParam('id', $id, PDO::PARAM_INT);
$req->execute();
while($reqProject = $req->fetch(PDO::FETCH_ASSOC)){
?>
<H1><?= $reqProject['title'] ?></H1>
<p><?= $reqProject['content_description']?></p>
<h2> Technologie utilisées</h2>
<div>
    <?php
    if($reqProject['langage']){?>
        <img src="<?= $reqProject['langage']?>" alt="">
    
    <?php
    }
    ?>

</div>
<h2> Aperçu du project </h2>
<video autoplay muted loop><source src="../Img/Opera - Biblook - Opera - 29 May 2023.mp4">
<?php
};
?>

    </section>





</main>


    
</body>
</html>