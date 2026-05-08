# ⚛️ Conceitos básicos da Biblioteca 

## 🛠️ Criando projetos React 

### Babel
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

### Webpack

O Webpack agrupa todos os arquivos (JS, CSS, Imagens) em um único pacote otimizado.

1. Inicializar o projeto, digitando no terminal:
```bash
yarn add html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server style-loader css-loader 
file-loader -D
```

2. Criar na raiz o arquivo `webpack.config.js`

### Instalar React na aplicação

Execute o comando abaixo para instalar o react
```bash
yarn add react-dom -D
```

1. Criar o diretorio `public` e dentro dele o arquivo `index.html`


## 💡 Conceitos Fundamentais para React

### JSX (JavaScript XML)
- App.jsx
```jsx
const App = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return(
        <div className="App">
            <h1>Hello DIO!</h1>
            {arr.map(item => {
                return (<p>{item} x 5 = {item * 5}</p>)
            })}
            <p>1 + 1 = {1 +1}</p>
        </div>

    );
};

export default App;
```

### Componentes de classes e funcionais

- Exemplo de um componente de classes
```jsx
import React, { Component} from "react";

class App extends Component {
    state = {
        usuarios: ["Pablo", "José", "Manoel"],
    };

    render() {
        const { usuarios } = this.state;
        return (
            <div className="App">
                <h1>Hello Dio!</h1>
                {usuarios.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        )
    }
    
}

export default App;
```

- Exemplo de um componente funcional
```jsx
import React, { useState} from "react";

const App = () => {
    
    const [usuarios, setUsuarios ] = useState(
        ["Pablo", "José", "Manoel"]
    )

    return(
        <div className="App">
            <h1>Hello Dio!!!</h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}

        </div>
    );
  
}

export default App;

```
- Exemplo de um ciclo de vida:
```jsx
import React, { useEffect, useState} from "react";

const App = () => {
    
    const [usuarios, setUsuarios ] = useState(
        ["Pablo", "José", "Manoel"]
    )

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([...usuarios, "Ismael"]);
        },3000);
    },[]);

    return(
        <div className="App">
            <h1>Hello Dio!!!</h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}

        </div>
    );
  
}

export default App;
```

🔹 Componentes: Classes vs. Funcionais
Atualmente, a comunidade React prioriza Componentes Funcionais devido à simplicidade e ao uso de Hooks.

| Tipo| Característica |
| :--- | :---: |
| Class Components | Utilizam `this.state` e métodos de ciclo de vida como `componentDidMount`. |
| Functional Components | Utilizam Hooks (`useState`, `useEffect`) e são funções puras de JS. |



## Criando projetos React 

### Eslint

Digite no terminal

```bash
npx eslint --init
```

- Instalar no terminal
```bash
yarn add eslint -D
```


### Prettier

```JSON
{
    "semi": true,
    "tabWidth": 4,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "none",
    "jsxBracketSameLine" : true
    
}
``` 


### Editor Config

- Criar na raiz um arquivo chamado `.editorconfig`