# ProjetoFront-LojaCarro
#  AutoElite Motors

##  Sobre o projeto

O **AutoElite Motors** é um site desenvolvido como projeto acadêmico de Front-End para simular uma concessionária de veículos usados. O objetivo é praticar estruturação de páginas web utilizando **HTML5, CSS3 e JAVASCRIPT**, aplicando conceitos de organização, navegação entre páginas e estilização moderna.

---

##  Objetivo

- Desenvolver um site estático funcional para uma loja de carros
- Praticar criação de páginas interligadas
- Trabalhar layout visual com CSS
- Simular funcionalidades básicas de cadastro e login (sem backend)
- Tornar melhor a questão de acessibilidade de uma pagina web

---

##  Tecnologias utilizadas

- HTML5 (estrutura das páginas)
- CSS3 (estilização e layout)
- JavaScript (painel de acessibilidade e armazenamento local)
- Web Storage API (localStorage para salvar preferências)
- Google Fonts (tipografia)
- Organização de arquivos e imagens

---
```
## 📁 Estrutura do projeto
autoelite-motors/
├── index.html # Página inicial do site
├── html/ # Diretorio com arquivos HTML
  ├── cadastro.html # Página de cadastro de clientes
  └── login.html # Página de login
├── css/ # Diretorio com arquivos CSS
  └── style.css # Arquivo de estilos principal
├── js/ # Diretorio com arquivos Java Script
  └── script.js # Arquivo Java Script
├── icones/ # Diretorio com icones utilizados no projeto
  ├── buscar.svg
  └── whatsapp.svg
└── imagens/ # Diretorio com imagens utilizadas no projeto
  ├── logo_cabecalho.png
  ├── fundo.png
  ├── civic.png
  ├── fluence.png
  └── gol.png

```

---

##  Funcionalidades

###  Página inicial (index.html)
- Exibição do banner principal da concessionária
- Menu de navegação entre páginas
- Campo de pesquisa de veículos
- Apresentação do estoque com cards de carros

###  Estoque de veículos
Cada veículo contém:
- Modelo
- Ano
- Quilometragem
- Preço
- Imagem ilustrativa

---

###  Cadastro de clientes (cadastro.html)
Formulário com campos:
- Nome completo
- CPF
- Data de nascimento
- Telefone
- E-mail
- Senha e confirmação
- Observações adicionais

---

###  Login (login.html)
- Formulário simples de autenticação
- Campos de e-mail e senha
- Redirecionamento para página inicial

---

##  Acessibilidade (ABNT NBR 17225)

O site possui uma barra de acessibilidade fixa no topo, presente em todas as páginas,
que permite ao usuário ajustar a apresentação do conteúdo. Os recursos atendem aos
seguintes itens da norma ABNT NBR 17225:2025:

- **Alto contraste** (5.11): alterna o esquema de cores da página para preto e branco
- **Tamanho do texto** (5.12.7): aumenta a fonte de 100% até 200%
- **Espaçamento do texto** (5.12.1 a 5.12.4): ajusta entrelinha, espaçamento entre
  letras, palavras e parágrafos
- **Contraste dos textos da barra** (5.11.2 / 5.11.3): acima de 7:1
- **Persistência**: as escolhas do usuário são salvas no navegador (localStorage) e
  mantidas ao recarregar e ao navegar entre as páginas

---

##  Estilo e layout

O projeto foi desenvolvido com foco em um visual moderno e automotivo:

- Fundo escuro com imagem fixa
- Destaque em vermelho para botões e links
- Tipografia moderna (Bebas Neue e Raleway)
- Cards de veículos com efeito hover
- Layout centralizado e responsivo básico

---

##  Limitações do projeto

- Projeto apenas front-end
- Não possui banco de dados
- As preferências de acessibilidade são salvas localmente no navegador (localStorage); não há outro armazenamento
- Login e cadastro são apenas visuais (simulação)

---

##  Possíveis melhorias futuras

- Sistema de login funcional com backend
- Integração com banco de dados
- Filtro de busca no estoque
- Melhor responsividade para dispositivos móveis

---

##  Autor

Projeto desenvolvido para disciplina de Front-End / ADS como prática de:

- Estruturação de páginas web;
- HTML semântico;
- CSS e layout;
- Organização de projeto web

Participantes do Projeto:

- Bruno Samuel de Camargo Cardoso;
- Bruno Rocha de Souza;
- Fabio Kaynan Ignacio Ramos;
- Renato Muchni Teixeira

---

##  Observação final

Este projeto tem caráter **acadêmico e demonstrativo**, sendo utilizado para aprendizado de desenvolvimento web.