//  Barra de acessibilidade - AutoElite Motors

// Variaveis que guardam o estado atual
// Comecam em 0 e sao lidas do localStorage, se existirem.
var passoFonte = 0;   // 0 a 4  -> de 100% ate 200%
var passoEspaco = 0;  // 0 a 3  -> de normal ate maximo
var contrasteLigado = false;

// Tabelas com os valores de cada passo.
var FONTE = [1, 1.25, 1.5, 1.75, 2];
var LINHA = [1.4, 1.5, 1.8, 2.1];
var LETRA = [0, 0.12, 0.16, 0.2];
var PALAVRA = [0, 0.16, 0.24, 0.32];
var PARAGRAFO = [0, 2, 2.5, 3];
var NOME_ESPACO = ["Normal", "Médio", "Amplo", "Máximo"];


// Le os valores salvos no localStorage
function carregar() {
  if (localStorage.getItem("ac_fonte") !== null) {
    passoFonte = Number(localStorage.getItem("ac_fonte"));
  }
  if (localStorage.getItem("ac_espaco") !== null) {
    passoEspaco = Number(localStorage.getItem("ac_espaco"));
  }
  if (localStorage.getItem("ac_contraste") === "sim") {
    contrasteLigado = true;
  }
}


// Salva os valores atuais no localStorage
function salvar() {
  localStorage.setItem("ac_fonte", passoFonte);
  localStorage.setItem("ac_espaco", passoEspaco);
  if (contrasteLigado === true) {
    localStorage.setItem("ac_contraste", "sim");
  } else {
    localStorage.setItem("ac_contraste", "nao");
  }
}


// Aplica o estado atual na pagina
function aplicar() {
  var corpo = document.body;

  // Tamanho da fonte.
  corpo.style.fontSize = FONTE[passoFonte] * 100 + "%";

  // Espacamentos do texto.
  corpo.style.lineHeight = LINHA[passoEspaco];
  corpo.style.letterSpacing = LETRA[passoEspaco] + "em";
  corpo.style.wordSpacing = PALAVRA[passoEspaco] + "em";

  // Alto contraste: liga/desliga uma classe no body
  if (contrasteLigado === true) {
    corpo.classList.add("alto-contraste");
  } else {
    corpo.classList.remove("alto-contraste");
  }

  // Espacamento entre paragrafos: percorre todos os <p> com um laco
  var paragrafos = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.marginBottom = PARAGRAFO[passoEspaco] + "em";
  }

  // Atualiza os textos mostrados na barra (aula 02 - textContent).
  document.getElementById("ac-fonte").textContent = FONTE[passoFonte] * 100 + "%";
  document.getElementById("ac-espaco").textContent = NOME_ESPACO[passoEspaco];

  if (contrasteLigado === true) {
    document.getElementById("ac-contraste").textContent = "Alto contraste: ativado";
    document.getElementById("ac-contraste").setAttribute("aria-pressed", "true");
  } else {
    document.getElementById("ac-contraste").textContent = "Alto contraste: desativado";
    document.getElementById("ac-contraste").setAttribute("aria-pressed", "false");
  }

  salvar();
}

// Funcoes chamadas pelos botoes (uma para cada acao).

function ligarContraste() {
  if (contrasteLigado === true) {
    contrasteLigado = false;
  } else {
    contrasteLigado = true;
  }
  aplicar();
}

function aumentarFonte() {
  if (passoFonte < 4) {
    passoFonte = passoFonte + 1;
  }
  aplicar();
}

function diminuirFonte() {
  if (passoFonte > 0) {
    passoFonte = passoFonte - 1;
  }
  aplicar();
}

function aumentarEspaco() {
  if (passoEspaco < 3) {
    passoEspaco = passoEspaco + 1;
  }
  aplicar();
}

function diminuirEspaco() {
  if (passoEspaco > 0) {
    passoEspaco = passoEspaco - 1;
  }
  aplicar();
}

function redefinir() {
  passoFonte = 0;
  passoEspaco = 0;
  contrasteLigado = false;
  aplicar();
}


// Quando a pagina carrega, le o que foi salvo e aplica.
window.onload = function () {
  carregar();
  aplicar();
};