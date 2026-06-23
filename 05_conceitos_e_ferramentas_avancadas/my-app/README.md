# 💻 Tela de Cadastro & Login - Clone da Plataforma DIO

![GitHub repo size](https://img.shields.io/github/repo-size/Giovanna-Lanzillotta/dio_formacao_react_developer?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Giovanna-Lanzillotta/dio_formacao_react_developer?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361dafb)
![Styled Components](https://img.shields.io/badge/styled--components-%23db7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)

> Desafio prático de desenvolvimento web desenvolvido como parte da **Formação React Developer** na [Digital Innovation One (DIO)](https://www.dio.me/).

O projeto consiste na réplica das interfaces de Login, Cadastro e Feed da plataforma DIO, com foco na criação de componentes dinâmicos, reutilizáveis e estilizados de forma avançada no ecossistema do React.

---

## 📸 Demonstração

<p align="center">
  <img src="./assets/preview-projeto.gif" alt="Demonstração do Projeto" width="100%">
</p>

---

## 🚀 Tecnologias e Conceitos Utilizados

O ecossistema do projeto foi estruturado com ferramentas modernas do ecossistema JavaScript:

* **React.js**: Biblioteca base para a construção de interfaces SPA baseadas em componentes.
* **React Router DOM (v7)**: Gerenciamento robusto de rotas internas e navegação dinâmica (`useNavigate`).
* **Styled Components**: Componentização do CSS com escopo isolado, passagem de `props` dinâmicas para o estilo (*variants*) e uso avançado de pseudo-elementos (`::after`, `::before`).
* **React Hook Form**: Gerenciamento de performance, estado de formulários e captura otimizada de inputs.
* **Axios**: Integração e requisições HTTP para consumo de API externa.
* **JSON Server**: Simulação de uma API REST baseada em um arquivo local (`db.json`) para validação de autenticação em tempo real.
* **React Icons & Google Fonts ('Open Sans')**: Identidade visual oficial da plataforma.

---

## 🎨 Destaques Técnicos & Arquitetura

* **Consumo Dinâmico de API**: Autenticação simulada ponta a ponta (Frontend ⇆ API Local), validando credenciais de usuários cadastrados diretamente na memória/JSON.
* **Componentização Avançada**: Separação estruturada de responsabilidades visuais em componentes reutilizáveis como `Container`, `Row`, `Column`, `Wrapper`, `Input` e `Button`.
* **Botões com Variantes Dinâmicas**: Criação de botões customizáveis (`ButtonContainer`) que alteram comportamento, bordas e cores de forma reativa baseados na prop `variant="primary|secondary"`.
* **Layout Responsivo**: Uso estratégico de CSS Flexbox e Grid layouts para garantir o alinhamento preciso do cabeçalho, formulários e feed de notícias.

---

## 🛠️ Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
