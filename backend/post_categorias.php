<?php
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    $env = parse_ini_file('.env');
    $servername = $env["SERVERNAME"]; 
    $username = $env["DB_USER"];
    $password = $env["DB_PASSWORD"];
    $dbname = $env["DB_NAME"];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $dados = json_decode(file_get_contents('php://input'), true);

        if (is_array($dados) && count($dados) > 0) {
            try {
                $dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8";
                $conn = new PDO($dsn, $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $sql = "INSERT INTO categorias (categoria) VALUES (:categoria)";
                $stmt = $conn->prepare($sql);
                $conn->beginTransaction();

                foreach ($dados['categorias'] as $categoria) {
                    $stmt->bindParam(':categoria', $categoria['categoria']);
                    $stmt->execute();
                }

                $conn->commit();

                echo json_encode(['status' => 'sucesso']);
            } catch (PDOException $e) {
                echo json_encode(['error' => 'Falha na conexão: ' . $e->getMessage()]);
            }
        } else {
            echo json_encode(['error' => 'Dados inválidos. Esperado uma lista de categorias']);
        }
    } else {
        echo json_encode(['error' => 'Método HTTP não permitido']);
    }
?>
