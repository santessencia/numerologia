const TABELA_PITAGORICA = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

const VOGAIS = new Set(['A', 'E', 'I', 'O', 'U']);

export function valorLetra(letra) {
  return TABELA_PITAGORICA[letra.toUpperCase()] || 0;
}

export function ehVogal(letra) {
  return VOGAIS.has(letra.toUpperCase());
}

export function reduzir(n) {
  if (n === 11 || n === 22 || n === 33) return n;
  if (n <= 9) return n;
  const soma = String(n).split('').reduce((acc, d) => acc + Number(d), 0);
  return reduzir(soma);
}

export function limparNome(nome) {
  return nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z\s]/g, '')
    .toUpperCase()
    .trim();
}

export function numeroDestino(nome) {
  const limpo = limparNome(nome);
  const soma = limpo
    .replace(/\s/g, '')
    .split('')
    .reduce((acc, l) => acc + valorLetra(l), 0);
  return reduzir(soma);
}

export function numeroAlma(nome) {
  const limpo = limparNome(nome);
  const soma = limpo
    .replace(/\s/g, '')
    .split('')
    .filter(l => ehVogal(l))
    .reduce((acc, l) => acc + valorLetra(l), 0);
  return reduzir(soma);
}

export function numeroPersonalidade(nome) {
  const limpo = limparNome(nome);
  const soma = limpo
    .replace(/\s/g, '')
    .split('')
    .filter(l => !ehVogal(l) && l.match(/[A-Z]/))
    .reduce((acc, l) => acc + valorLetra(l), 0);
  return reduzir(soma);
}

export function licaoVida(dia, mes, ano) {
  const soma =
    reduzir(dia) +
    reduzir(mes) +
    reduzir(Number(String(ano).split('').reduce((a, d) => a + Number(d), 0)));
  return reduzir(soma);
}
