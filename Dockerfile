# Usando a imagem oficial do PHP com Apache
FROM php:8.1-apache

# Habilitar módulos necessários
RUN docker-php-ext-install pdo pdo_mysql

# Copiar o código PHP para o container
COPY . /var/www/html/

# Definir as permissões para o Apache
RUN chown -R www-data:www-data /var/www/html/

# Expor a porta padrão do Apache
EXPOSE 80
