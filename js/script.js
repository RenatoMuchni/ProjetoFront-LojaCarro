var passoFonte = 0;
var passoEspaco = 0;
var contrasteLigado = false;

var FONTE = [1, 1.25, 1.5, 1.75, 2];
var LINHA = [1.4, 1.5, 1.8, 2.1];
var LETRA = [0, 0.12, 0.16, 0.2];
var PALAVRA = [0, 0.16, 0.24, 0.32];
var PARAGRAFO = [0, 2, 2.5, 3];
var NOME_ESPACO = ["Normal", "Médio", "Amplo", "Máximo"];


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


function salvar() {
  localStorage.setItem("ac_fonte", passoFonte);
  localStorage.setItem("ac_espaco", passoEspaco);
  if (contrasteLigado === true) {
    localStorage.setItem("ac_contraste", "sim");
  } else {
    localStorage.setItem("ac_contraste", "nao");
  }
}


function aplicar() {
  var corpo = document.body;

  
  document.documentElement.style.fontSize = 125 * FONTE[passoFonte] + "%";


  if (contrasteLigado === true) {
    corpo.classList.add("alto-contraste");
  } else {
    corpo.classList.remove("alto-contraste");
  }

  var tags = ["p", "h1", "h2", "h3", "a", "label", "li"];
  var t;
  for (t = 0; t < tags.length; t++) {
    var elementos = document.getElementsByTagName(tags[t]);
    var i;
    for (i = 0; i < elementos.length; i++) {
      elementos[i].style.lineHeight = LINHA[passoEspaco];
      elementos[i].style.letterSpacing = LETRA[passoEspaco] + "em";
      elementos[i].style.wordSpacing = PALAVRA[passoEspaco] + "em";
    }
  }

  var paragrafos = document.getElementsByTagName("p");
  var p;
  for (p = 0; p < paragrafos.length; p++) {
    paragrafos[p].style.marginBottom = PARAGRAFO[passoEspaco] + "em";
  }

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

function pesquisar(){
  var texto = document.getElementById("campo-busca").value.toLocaleLowerCase();
  var carros = document.getElementsByClassName("carro");
  var i;

  for(i=0;i<carros.length; i++){
    var titulo = carros[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

    if (titulo.indexOf(texto) !== -1) {
      carros[i].style.display = "inline-block";
    } else {
      carros[i].style.display = "none";
    }
  }

  document.getElementById("estoque").scrollIntoView();
}

window.onload = function () {
  carregar();
  aplicar();
};