<?php
header('Access-Control-Allow-Origin: *');
isset($_POST['numero1']) ? $numero1 = $_POST['numero1'] : $numero1 = "";
isset($_POST['numero2']) ? $numero2 = $_POST['numero2'] : $numero2 = "";


echo '[{"res" : "' . ($numero1+$numero2) . '"}]';
?>