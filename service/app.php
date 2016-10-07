<?php
require_once 'Reader.php';
require_once 'BaseAliados.php';
require_once 'BaseAliadosMerge.php';

$fileName = "Base-aliados.json";
$reader = new Reader();
$baseAliados = new BaseAliados();
$baseAliadosMerge = new BaseAliadosMerge();

$reader->read("Resources/", "Base-aliados.xlsx");
$baseAliados->setReader($reader);
$baseAliadosMerge->setReader($reader);
$baseAliadosMerge->setBaseMide($baseAliados);

$dataArray = array();

$dataArray = $baseAliadosMerge->getArrayAllEntitiesToBuildJson();

$file = fopen('Resources/'.$fileName.'', "w") or die("Problemas para generar el archivo Json - ( Resources/".$fileName." )");
fwrite($file, json_encode($dataArray,JSON_PRETTY_PRINT));
echo "El archivo ($fileName) se genero correctamente";