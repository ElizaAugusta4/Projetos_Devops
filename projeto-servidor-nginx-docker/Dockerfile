# Use a imagem oficial do Nginx como base
FROM nginx:latest

# Copie o arquivo de configuração personalizado para o contêiner
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie o arquivo HTML para o diretório de conteúdo do Nginx
COPY index.html /usr/share/nginx/html/
