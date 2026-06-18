// AutoElite Motors - Painel de Acessibilidade (ABNT NBR 17225)
// Recursos: alto contraste (5.11), tamanho de fonte e espacamento (5.12).
// As preferencias ficam salvas no localStorage e valem em todas as paginas.

document.addEventListener("DOMContentLoaded", function () {
  var raiz = document.documentElement;

  // Estado: le do localStorage ou comeca no padrao.
  var pref = JSON.parse(localStorage.getItem("acessibilidade")) || {
    contraste: false, // ligado/desligado
    fonte: 0,         // 0 a 4  -> 100% ate 200%
    espaco: 0,        // 0 a 3  -> normal ate amplo
  };

  // Tabelas de valores para cada passo.
  var FONTE   = [1, 1.25, 1.5, 1.75, 2];
  var LINHA   = [1.4, 1.5, 1.8, 2.1];
  var LETRA   = [0, 0.12, 0.16, 0.2];
  var PALAVRA = [0, 0.16, 0.24, 0.32];
  var PARAGRAFO = [0, 2, 2.5, 3]; // 5.12.2: nível 1 já garante 2x

  // Aplica o estado atual na pagina e salva.
  function aplicar() {
    raiz.classList.toggle("alto-contraste", pref.contraste);
    document
      .getElementById("ac-contraste")
      .setAttribute("aria-pressed", pref.contraste);
    raiz.style.setProperty("--escala-fonte", FONTE[pref.fonte]);
    raiz.style.setProperty("--altura-linha", LINHA[pref.espaco]);
    raiz.style.setProperty("--espaco-letra", LETRA[pref.espaco] + "em");
    raiz.style.setProperty("--espaco-palavra", PALAVRA[pref.espaco] + "em");
    raiz.style.setProperty("--espaco-paragrafo", PARAGRAFO[pref.espaco] + "em");
    localStorage.setItem("acessibilidade", JSON.stringify(pref));

    // Atualiza os textos dos controles.
    document.getElementById("ac-contraste").querySelector("strong").textContent =
      pref.contraste ? "ativado" : "desativado";
    document.getElementById("ac-fonte").textContent = FONTE[pref.fonte] * 100 + "%";
    document.getElementById("ac-espaco").textContent =
      ["Normal", "Médio", "Amplo", "Máximo"][pref.espaco];
  }

  // Mantem o valor dentro dos limites do array.
  function limite(v, max) {
    return Math.max(0, Math.min(max, v));
  }

  // Monta a barra fixa no topo.
  var barra = document.createElement("nav");
  barra.id = "barra-acessibilidade";
  barra.setAttribute("aria-label", "Opções de acessibilidade");
  barra.innerHTML =
    '<span class="ac-titulo">Acessibilidade</span>' +
    '<div class="ac-grupo">' +
      '<button type="button" id="ac-contraste" class="ac-btn">Alto contraste: <strong>desativado</strong></button>' +
    '</div>' +
    '<div class="ac-grupo" role="group" aria-label="Tamanho do texto">' +
      '<span class="ac-rotulo">Texto</span>' +
      '<button type="button" class="ac-btn" data-acao="fonte--" aria-label="Diminuir texto">A−</button>' +
      '<span class="ac-valor" id="ac-fonte" aria-live="polite">100%</span>' +
      '<button type="button" class="ac-btn" data-acao="fonte++" aria-label="Aumentar texto">A+</button>' +
    '</div>' +
    '<div class="ac-grupo" role="group" aria-label="Espaçamento do texto">' +
      '<span class="ac-rotulo">Espaçamento</span>' +
      '<button type="button" class="ac-btn" data-acao="espaco--" aria-label="Reduzir espaçamento">−</button>' +
      '<span class="ac-valor" id="ac-espaco" aria-live="polite">Normal</span>' +
      '<button type="button" class="ac-btn" data-acao="espaco++" aria-label="Aumentar espaçamento">+</button>' +
    '</div>' +
    '<button type="button" id="ac-redefinir" class="ac-btn">Redefinir</button>';
  document.body.insertBefore(barra, document.body.firstChild);

  // Um unico ouvinte cuida de todos os botoes.
  barra.addEventListener("click", function (ev) {
    var btn = ev.target.closest("button");
    if (!btn) return;

    if (btn.id === "ac-contraste") pref.contraste = !pref.contraste;
    else if (btn.id === "ac-redefinir") pref = { contraste: false, fonte: 0, espaco: 0 };
    else if (btn.dataset.acao === "fonte++") pref.fonte = limite(pref.fonte + 1, 4);
    else if (btn.dataset.acao === "fonte--") pref.fonte = limite(pref.fonte - 1, 4);
    else if (btn.dataset.acao === "espaco++") pref.espaco = limite(pref.espaco + 1, 3);
    else if (btn.dataset.acao === "espaco--") pref.espaco = limite(pref.espaco - 1, 3);

    aplicar();
  });

  aplicar();
});