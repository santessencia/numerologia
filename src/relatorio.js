import { numeroDestino, numeroAlma, numeroPersonalidade, licaoVida } from './engine.js';
import { ARCANOS, INTERPRETACOES } from './interpretacoes.js';

const MESES = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

function formatarData(dia, mes, ano) {
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}

function paragrafos(texto) {
  return texto.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
}

function criarCard(tipo, numero, titulo, texto) {
  return `
    <div class="card" data-tipo="${tipo}">
      <div class="card-faixa"></div>
      <div class="card-header">
        <span class="card-titulo">${titulo}</span>
        <span class="card-numero">${numero}</span>
      </div>
      <div class="card-arcano">${ARCANOS[numero]}</div>
      <div class="card-texto">${paragrafos(texto)}</div>
    </div>
  `;
}

export function renderizarRelatorio() {
  const dados = JSON.parse(sessionStorage.getItem('numerologia_dados') || 'null');
  if (!dados) { window.location.href = '/'; return null; }

  const { nome, dia, mes, ano } = dados;
  const destino     = numeroDestino(nome);
  const alma        = numeroAlma(nome);
  const personalidade = numeroPersonalidade(nome);
  const licao       = licaoVida(dia, mes, ano);
  const dataFmt     = formatarData(dia, mes, ano);

  // Relatório
  document.getElementById('rel-nome').textContent  = nome;
  document.getElementById('rel-data').textContent  = dataFmt;

  document.getElementById('destino-numero').textContent = destino;
  document.getElementById('destino-arcano').textContent = ARCANOS[destino];
  document.getElementById('destino-texto').innerHTML    = paragrafos(INTERPRETACOES.destino[destino]);

  document.getElementById('cards-container').innerHTML =
    criarCard('alma',          alma,          'Número da Alma',          INTERPRETACOES.alma[alma]) +
    criarCard('personalidade', personalidade, 'Número da Personalidade', INTERPRETACOES.personalidade[personalidade]) +
    criarCard('licao',         licao,         'Lição de Vida',           INTERPRETACOES.licao[licao]);

  // Capa do PDF
  document.getElementById('capa-nome').textContent = nome;
  document.getElementById('capa-data').textContent = dataFmt;

  return dados;
}
