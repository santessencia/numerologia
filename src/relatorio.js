import { numeroDestino, numeroAlma, numeroPersonalidade, licaoVida, anoPessoal, numerosAusentes, numerosExcesso } from './engine.js';
import { ARCANOS, INTERPRETACOES, PALAVRAS_CHAVE, INTROS } from './interpretacoes.js';

const MESES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

function formatarData(dia, mes, ano) {
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}

function p(texto) {
  return texto.split('\n\n').map(t => `<p>${t.trim()}</p>`).join('');
}

function secaoIntro(letra, titulo, intro, numero, arcano, palavrasChave, textoNum) {
  return `
    <section class="pdf-secao">
      <div class="pdf-secao-header">
        <span class="pdf-secao-letra">${letra}</span>
        <div>
          <h2 class="pdf-secao-titulo">${titulo}</h2>
          <p class="pdf-secao-numero-linha">Número <strong>${numero}</strong> — ${arcano}</p>
          <p class="pdf-secao-chave">Palavras-chave: <em>${palavrasChave}</em></p>
        </div>
      </div>
      <div class="pdf-secao-intro">${p(intro)}</div>
      <div class="pdf-secao-texto">${p(textoNum)}</div>
    </section>`;
}

export function renderizarRelatorio() {
  const dados = JSON.parse(sessionStorage.getItem('numerologia_dados') || 'null');
  if (!dados) { window.location.href = '/'; return null; }

  const { nome, dia, mes, ano } = dados;
  const anoAtual = new Date().getFullYear();

  const destino       = numeroDestino(nome);
  const alma          = numeroAlma(nome);
  const personalidade = numeroPersonalidade(nome);
  const licao         = licaoVida(dia, mes, ano);
  const anoPess       = anoPessoal(dia, mes, anoAtual);
  const ausentes      = numerosAusentes(nome, dia, mes, ano);
  const excesso       = numerosExcesso(nome);
  const dataFmt       = formatarData(dia, mes, ano);
  const cristalDados  = INTERPRETACOES.cristal[destino];

  // ── Cabeçalho web ────────────────────────────────────────────────────────
  document.getElementById('rel-nome').textContent = nome;
  document.getElementById('rel-data').textContent = dataFmt;
  document.getElementById('destino-numero').textContent = destino;
  document.getElementById('destino-arcano').textContent = ARCANOS[destino];
  document.getElementById('destino-texto').innerHTML = p(INTERPRETACOES.destino[destino]);

  // Cards web
  document.getElementById('cards-container').innerHTML = [
    { tipo: 'alma', num: alma, titulo: 'Número da Alma', texto: INTERPRETACOES.alma[alma] },
    { tipo: 'personalidade', num: personalidade, titulo: 'Número da Personalidade', texto: INTERPRETACOES.personalidade[personalidade] },
    { tipo: 'licao', num: licao, titulo: 'Lição de Vida', texto: INTERPRETACOES.licao[licao] },
    { tipo: 'ano', num: anoPess, titulo: `Ano Pessoal ${anoAtual}`, texto: INTERPRETACOES.anoPessoal[anoPess] },
  ].map(({ tipo, num, titulo, texto }) => `
    <div class="card" data-tipo="${tipo}">
      <div class="card-faixa"></div>
      <div class="card-header">
        <span class="card-titulo">${titulo}</span>
        <span class="card-numero">${num}</span>
      </div>
      <div class="card-arcano">${ARCANOS[num] || ''}</div>
      <div class="card-texto">${p(texto)}</div>
    </div>`).join('');

  // ── Capa do PDF ───────────────────────────────────────────────────────────
  document.getElementById('capa-nome').textContent = nome;
  document.getElementById('capa-data').textContent = dataFmt;

  // ── Resumo do mapa (índice) ───────────────────────────────────────────────
  document.getElementById('resumo-container').innerHTML = `
    <table class="resumo-tabela">
      <tbody>
        <tr><td class="resumo-letra">A.</td><td>Número da Alma (Vogais / Vidas Passadas)</td><td class="resumo-num">${alma}</td><td class="resumo-chave">${PALAVRAS_CHAVE.alma[alma]}</td></tr>
        <tr><td class="resumo-letra">B.</td><td>Número da Personalidade (Consoantes / Exterior)</td><td class="resumo-num">${personalidade}</td><td class="resumo-chave">${PALAVRAS_CHAVE.personalidade[personalidade]}</td></tr>
        <tr><td class="resumo-letra">C.</td><td>Número do Destino (Todas as letras)</td><td class="resumo-num">${destino}</td><td class="resumo-chave">${PALAVRAS_CHAVE.destino[destino]}</td></tr>
        <tr><td class="resumo-letra">D.</td><td>Número da Lição de Vida (Data de nascimento)</td><td class="resumo-num">${licao}</td><td class="resumo-chave">${PALAVRAS_CHAVE.licao[licao]}</td></tr>
        <tr><td class="resumo-letra">E.</td><td>Ano Pessoal ${anoAtual}</td><td class="resumo-num">${anoPess}</td><td class="resumo-chave"></td></tr>
        <tr><td class="resumo-letra">F.</td><td colspan="3">Potencialidades Pessoais — Excessos e Ausências</td></tr>
        <tr><td class="resumo-letra">G.</td><td colspan="3">Cristal do seu número</td></tr>
      </tbody>
    </table>`;

  // ── Template PDF (secções A-G) ────────────────────────────────────────────
  document.getElementById('pdf-secoes').innerHTML = `

    ${secaoIntro('A', 'A Energia que vem das Vogais — Número da Alma', INTROS.alma, alma, ARCANOS[alma], PALAVRAS_CHAVE.alma[alma], INTERPRETACOES.alma[alma])}

    ${secaoIntro('B', 'A Energia que vem das Consoantes — Número da Personalidade', INTROS.personalidade, personalidade, ARCANOS[personalidade], PALAVRAS_CHAVE.personalidade[personalidade], INTERPRETACOES.personalidade[personalidade])}

    ${secaoIntro('C', 'A Energia que vem da Soma de Todas as Letras — Número do Destino', INTROS.destino, destino, ARCANOS[destino], PALAVRAS_CHAVE.destino[destino], INTERPRETACOES.destino[destino])}

    ${secaoIntro('D', 'A Energia que vem da Nossa Data de Nascimento — Lição de Vida', INTROS.licao, licao, ARCANOS[licao], PALAVRAS_CHAVE.licao[licao], INTERPRETACOES.licao[licao])}

    <section class="pdf-secao">
      <div class="pdf-secao-header">
        <span class="pdf-secao-letra">E</span>
        <div>
          <h2 class="pdf-secao-titulo">Ano Pessoal ${anoAtual}</h2>
          <p class="pdf-secao-numero-linha">Número <strong>${anoPess}</strong></p>
        </div>
      </div>
      <div class="pdf-secao-intro">${p(INTROS.anoPessoal)}</div>
      <div class="pdf-secao-texto">${p(INTERPRETACOES.anoPessoal[anoPess])}</div>
    </section>

    <section class="pdf-secao">
      <div class="pdf-secao-header">
        <span class="pdf-secao-letra">F</span>
        <div><h2 class="pdf-secao-titulo">Potencialidades Pessoais</h2></div>
      </div>
      <div class="pdf-secao-intro">${p(INTROS.potencialidades)}</div>
      <div class="pdf-potencialidades">
        ${excesso.length > 0 ? `
          <div class="pot-grupo">
            <h3 class="pot-subtitulo">Números com energia em excesso: ${excesso.join(', ')}</h3>
            ${excesso.map(n => `<div class="pot-item"><span class="pot-num">${n}</span><p>${INTERPRETACOES.excesso[n]}</p></div>`).join('')}
          </div>` : ''}
        ${ausentes.length > 0 ? `
          <div class="pot-grupo">
            <h3 class="pot-subtitulo">Números com energia ausente: ${ausentes.join(', ')}</h3>
            ${ausentes.map(n => `<div class="pot-item"><span class="pot-num">${n}</span><p>${INTERPRETACOES.ausencia[n]}</p></div>`).join('')}
          </div>` : ''}
        ${excesso.length === 0 && ausentes.length === 0 ? '<p>O seu mapa apresenta uma distribuição equilibrada de energias.</p>' : ''}
      </div>
    </section>

    <section class="pdf-secao">
      <div class="pdf-secao-header">
        <span class="pdf-secao-letra">G</span>
        <div>
          <h2 class="pdf-secao-titulo">O Seu Cristal — ${cristalDados.nome}</h2>
          <p class="pdf-secao-chave">Cor: <em>${cristalDados.cor}</em> · ${cristalDados.subtitulo}</p>
        </div>
      </div>
      <div class="pdf-secao-intro">${p(INTROS.cristais)}</div>
      <div class="pdf-secao-texto">
        <p>${cristalDados.texto}</p>
        <blockquote class="cristal-afirmacao">"${cristalDados.afirmacao}"</blockquote>
      </div>
    </section>`;

  return dados;
}
