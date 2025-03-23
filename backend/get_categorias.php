<?php

    $env = parse_ini_file('.env');
    $servername = $env["SERVERNAME"]; 
    $username = $env["DB_USER"];
    $password = $env["DB_PASSWORD"];
    $dbname = $env["DB_NAME"];

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    try {
        $dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8";
        $conn = new PDO($dsn, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM categorias";
        $resultado = $conn->query($sql);

        $categorias = [];

        if ($resultado && $resultado->rowCount() > 0) {
            while ($linha = $resultado->fetch(PDO::FETCH_ASSOC)) {
                $categorias[] = $linha;
            }
        }

        echo json_encode($categorias);

    } catch (PDOException $e) {
        echo json_encode(['error' => 'Falha na conexão: ' . $e->getMessage()]);
    }
?>
