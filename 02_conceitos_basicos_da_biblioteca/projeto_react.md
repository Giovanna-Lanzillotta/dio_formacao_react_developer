# Babel

## 🚀 Começando
Para iniciar o gerenciamento de pacotes neste projeto, você pode utilizar o Yarn ou o NPM.

1. Inicializar o projeto
Execute o comando abaixo para gerar o arquivo package.json:
```bash
# Usando Yarn
yarn init -y  
# Usando NPM
npm init -y  
```

2. Instalar o Babel
```bash
# Instalação das dependências do Babel
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```

3. Criar o arquivo `.babelrc` de configuração em formato JSON.Ele deve ser criado na raiz do seu projeto. Quando você executa o Babel, ele procura automaticamente por esse arquivo para saber quais transformações aplicar.

# Webpack

1. Inicializar o projeto, digitando no terminal:
```bash
yarn add html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server style-loader css-loader 
file-loader -D
```

2. Criar na raiz o arquivo `webpack.config.js`

# Instalar React na aplicação

Execute o comando abaixo para instalar o react
```bash
yarn add react-dom -D
```

1.Criar o diretorio `public` e dentro dele o arquivo `index.html`