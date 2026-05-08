
// Importa o plugin que automatiza a criação do arquivo HTML final e injeta o <script> do bundle
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    // Habilita Source Maps: vincula o código gerado ao código original para facilitar o debug
    devtool : "source-map",

    // Arquivo principal de entrada da aplicação
    entry: "./src/index.js",
    module: {
        // Define como o Webpack deve tratar diferentes tipos de arquivos através de loaders
        rules: [
            {
            // Processa arquivos .js usando Babel (transpilação de ES6+ para JS antigo)            
            test: /\.js|jsx$/,
            exclude: /node_modules/, // Não processa bibliotecas externas para ser mais rápido
            use: {loader: "babel-loader"}
            },
            { 
             // Permite importar arquivos .html dentro do JavaScript e processar tags como <img src>              
            test: /\.html$/,
            use: [{loader: "html-loader"}]
            },
            {
            // Processa arquivos CSS. O 'css-loader' lê o código e o 'style-loader' injeta no HTML            
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            { 
            // Processa imagens.           
            test: /\.(png|jpe?g|gif)$/i,
            use: ["file-loader"]
            },
            
        ]
    },
    // Configura como o Webpack resolve os caminhos dos módulos
    resolve: {
        extensions: [".js", ".jsx"] // Permite importar arquivos sem precisar digitar a extensão
    },
    //Lista de plugins adicionais para o processo de build
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html' // Usa este arquivo como molde para gerar o arquivo final
        }),
    ],
};