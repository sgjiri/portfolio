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
<?php

$req = $db->prepare('SELECT `title`,`content_description`,`content_techno` FROM `project`WHERE `title` = "biblook"');
$req->execute();
$reqProject = $req->fetch(PDO::FETCH_ASSOC);
?>
<H1><?= $reqProject['title'] ?></H1>
<p><?= $reqProject['content_description']?></p>


    
</body>
</html>