# 💻 DIO - Projeto Trilha React Developer

Este é um projeto desenvolvido durante a formação React Developer da [DIO (Digital Innovation One)](https://www.dio.me/). A aplicação simula a interface da plataforma da DIO, contendo páginas de Home, Cadastro, Login (com autenticação real integrada a uma API mockada) e o Feed de artigos/usuários.

O projeto foi totalmente migrado/desenvolvido utilizando **React**, **TypeScript** e **Styled-Components**, aplicando conceitos avançados de Context API para gerenciamento de estado global e React Router DOM para navegação.

---

## 🚀 Funcionalidades

* **Página Inicial (Home):** Apresentação da plataforma com navegação para login/cadastro.
* **Cadastro:** Formulário para novos usuários criarem suas contas.
* **Login com Validação:** Autenticação integrada ao banco de dados via Context API.
* **Feed:** Listagem de posts, ranking de usuários e progresso de aprendizado do perfil.
* **Rotas Protegidas/Dinâmicas:** Uso do `useNavigate` e estruturas de roteamento organizadas.

---

## 🛠️ Tecnologias Utilizadas

* [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces.
* [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança no código.
* [Styled-Components](https://styled-components.com/) - Estilização baseada em componentes (CSS-in-JS).
* [React Router DOM](https://reactrouter.org/) - Gerenciamento e navegação de rotas.
* [JSON Server](https://github.com/typicode/json-server) - API falsa (mock) para simular o banco de dados e autenticação de senhas.

---

## 🔧 Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

*npm run api* - Inicia o servidor backend simulado (JSON Server). Ele roda o banco de dados local (db.json) na porta 8001 para que a aplicação consiga fazer o cadastro, login e a validação de usuários.

*npm start* - Inicia o servidor de desenvolvimento do React (Front-end). Ele compila o projeto e abre a aplicação automaticamente no seu navegador no endereço http://localhost:3000 para você visualizar as telas.