export function gerarPDF(nome) {
  const template = document.getElementById('pdf-template');
  const wrapper  = document.getElementById('relatorio-wrapper');
  const btnPDF   = document.getElementById('btn-pdf');
  const nomeArq  = nome.toLowerCase().replace(/\s+/g, '-') + '-chave-da-essencia.pdf';

  const opt = {
    margin: [12, 12, 16, 12],
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
        // 1. Activa a capa
        const capa = el.querySelector('.pdf-capa');
        if (capa) capa.style.display = 'flex';

        // 2. Corrige gradient text — html2canvas não suporta background-clip:text
        el.querySelectorAll('.destino-numero-grande, .card-numero').forEach(n => {
          n.style.backgroundImage      = 'none';
          n.style.webkitBackgroundClip = 'unset';
          n.style.backgroundClip       = 'unset';
          n.style.webkitTextFillColor  = '#2A1060';
          n.style.color                = '#2A1060';
        });

        // 3. Fundo sólido na capa (gradient não renderiza bem)
        if (capa) capa.style.background = '#2A1060';

        // 4. Faixa lateral dos cards → cor sólida
        el.querySelectorAll('.card-faixa').forEach(f => {
          f.style.background = '#C4607A';
        });

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

  // Torna o template visível (fora do viewport) para html2pdf capturar
  template.style.display = 'block';
  template.style.position = 'absolute';
  template.style.left = '-9999px';
  template.style.top = '0';

  window.html2pdf()
    .set(opt)
    .from(wrapper)
    .save()
    .then(() => {
      template.style.display = 'none';
      template.style.position = '';
      template.style.left = '';
      template.style.top = '';

      btnPDF.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Baixar Mapa Completo em PDF`;
      btnPDF.disabled = false;
    });
}
