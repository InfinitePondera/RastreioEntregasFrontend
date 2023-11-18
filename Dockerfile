# Imagem base
FROM node:14

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando os arquivos de definição de dependências e instalando as dependências
COPY package*.json ./

RUN npm install

# Copiando o restante dos arquivos do projeto
COPY . .

# Expondo a porta que a aplicação utiliza
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]