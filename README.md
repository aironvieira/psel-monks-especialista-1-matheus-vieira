# psel-monks-especialista-1-matheus-vieira

## Um projeto utilizando React JS, PHP, MySQL e Docker

### para inicialização do backend,
### é necessário a criação de um arquivo .env dentro da pasta backend com as variáveis globais:

### DB_USER= {user}
### DB_PASSWORD= {senha}
### DB_NAME= psel-db
### SERVERNAME= mysql-db

### após a criação do arquivo,
### docker-compose up --build irá criar dois containers, php e mysql, junto disto, o init.sql irá criar a database e a table de categorias já populada para utilização dinâmica no frontend.
### dentro de /backend

### para inicialização do frontend, necessário utilizar os seguintes comandos:

## npm install
## npm install styled-components
## npm install axios
### npm start

### o projeto iniciará e suas funções já estarão disponíveis.


### Explicação de algumas abordagens:

### A seção ProductsCategories esta sendo populada via request no backend.
### O forms esta requisitando um post com as categorias digitadas, necessária ao menos duas como validação, caso feito com sucesso, atualizar a página irá mostrar as categorias digitadas na ProductsCategories.
### A seção Products esta sendo populada via request na pasta public/data, os dados são dinâmicos de um json.




# psel-monks-especialista-1-matheus-vieira

## Projeto utilizando React JS, PHP, MySQL e Docker

### Inicialização do Backend:

1. **Criação do arquivo `.env`:**
   
   Na pasta `backend`, crie um arquivo `.env` com as seguintes variáveis de ambiente:
   
   ```env
   DB_USER={user}
   DB_PASSWORD={senha}
   DB_NAME=psel-db
   SERVERNAME=mysql-db
   ```

2. **Subindo os Containers com Docker:**

Após criar o arquivo `.env`, utilize o seguinte comando para inicializar os containers:
    `docker-compose up --build`.
Este comando irá criar um container com duas imagens: um para o PHP e outro para o MySQL. O arquivo init.sql será utilizado para criar o banco de dados e a tabela de categorias já populada, permitindo a utilização dinâmica no frontend.

### Inicialização do Frontend:

1. **Instalar Dependências:**

No diretório do frontend, execute os seguintes comandos para instalar as dependências necessárias:
```
npm install
npm install styled-components
npm install axios
```

2. **Iniciar o Projeto:**

Após instalar as dependências, inicie o projeto com o comando:
`npm start`.

### Explicação das Abordagens:

1. **Seção `ProductsCategories`:**
   
   Esta seção é populada dinamicamente via requisição ao backend. As categorias são carregadas com base nas informações armazenadas no banco de dados MySQL.

2. **Formulário de Categorias:**
   
   O formulário no frontend envia um POST com as categorias digitadas. Para validação, é necessário enviar pelo menos as duas primeiras categorias, a verificação de segurança é feita previamente. Em caso de sucesso, ao atualizar a página, as categorias digitadas serão exibidas na seção `ProductsCategories`.

3. **Seção `Products`:**
   
   Os dados da seção `Products` são dados dinâmicos, que são extraídos de um arquivo JSON localizado em `public/data`. Esses dados são utilizados para mostrar os produtos de forma dinâmica na interface.
