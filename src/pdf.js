export function gerarPDF(nome) {
  const wrapper = document.getElementById('relatorio-wrapper');
  const btnPDF  = document.getElementById('btn-pdf');
  const nomeArq = nome.toLowerCase().replace(/\s+/g, '-') + '-chave-da-essencia.pdf';

  const opt = {
    margin: [14, 14, 18, 14],
    filename: nomeArq,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      backgroundColor: '#F9F7FC',
      windowWidth: 900,
      scrollX: 0,
      scrollY: 0,
      onclone: (_doc, el) => {
        // 1. Activa capa no clone
        const capa = el.querySelector('.pdf-capa');
        if (capa) capa.style.display = 'flex';

        // 2. Corrige gradient text nos números (não suportado pelo html2canvas)
        el.querySelectorAll('.destino-numero-grande, .card-numero').forEach(n => {
          n.style.backgroundImage       = 'none';
          n.style.webkitBackgroundClip  = 'unset';
          n.style.backgroundClip        = 'unset';
          n.style.webkitTextFillColor   = '#2A1060';
          n.style.color                 = '#2A1060';
        });

        // 3. Gradient de fundo da capa → cor sólida
        if (capa) {
          capa.style.background = '#2A1060';
        }

        // 4. Faixa lateral dos cards: força cor sólida (gradient em abs pode ser cortado)
        el.querySelectorAll('.card-faixa').forEach(f => {
          f.style.background = '#C4607A';
        });

        // 5. Garante que o body do clone tem fundo claro
        el.style.backgroundColor = '#F9F7FC';
      },
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['css', 'legacy'] },
  };

  btnPDF.textContent = 'Gerando PDF…';
  btnPDF.disabled = true;

  window.html2pdf()
    .set(opt)
    .from(wrapper)
    .save()
    .then(() => {
      btnPDF.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Baixar Mapa em PDF`;
      btnPDF.disabled = false;
    });
}
