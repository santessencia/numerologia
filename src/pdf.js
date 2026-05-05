export function gerarPDF(nome) {
  // window.print() é a forma mais fiável para PDFs complexos com layout.
  // html2canvas converte tudo numa imagem e corta em fatias — destrói o layout.
  // O browser renderiza nativamente: fontes, gradients e paginação ficam perfeitos.
  window.print();
}
