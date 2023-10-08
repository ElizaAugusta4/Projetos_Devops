# Definindo a imagem base do Node.js
FROM node:14

# Criando e definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando os arquivos de dependência para o diretório de trabalho
COPY app/package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante dos arquivos da aplicação para o diretório de trabalho
COPY app/ .
