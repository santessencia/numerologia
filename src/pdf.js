export function gerarPDF(nome) {
  const template = document.getElementById('pdf-template');
  const wrapper  = document.getElementById('relatorio-wrapper');
  const btnPDF   = document.getElementById('btn-pdf');
  const nomeArq  = nome.toLowerCase().replace(/\s+/g, '-') + '-chave-da-essencia.pdf';

  btnPDF.textContent = 'Gerando PDF…';
  btnPDF.disabled = true;

  // Torna o template renderizável — position:fixed fora do viewport
  // (display:none impede o html2canvas de calcular dimensões e trava para sempre)
  template.style.cssText = 'position:fixed;left:-9999px;top:0;width:900px;display:block;z-index:-1;';

  // Aguarda o browser calcular o layout antes de capturar
  requestAnimationFrame(() => {
    // força reflow
    void wrapper.offsetHeight;

    const opt = {
      margin: [12, 12, 16, 12],
      filename: nomeArq,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        backgroundColor: '#F9F7FC',
        windowWidth: 900,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          // Activa capa
          const capa = clonedDoc.querySelector('.pdf-capa');
          if (capa) {
            capa.style.display = 'flex';
            capa.style.background = '#2A1060';
          }

          // Corrige gradient text (não suportado pelo html2canvas)
          clonedDoc.querySelectorAll('.destino-numero-grande, .card-numero').forEach(n => {
            n.style.backgroundImage      = 'none';
            n.style.webkitBackgroundClip = 'unset';
            n.style.backgroundClip       = 'unset';
            n.style.webkitTextFillColor  = '#2A1060';
            n.style.color                = '#2A1060';
          });

          // Faixa lateral dos cards → cor sólida
          clonedDoc.querySelectorAll('.card-faixa').forEach(f => {
            f.style.background = '#C4607A';
          });
        },
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      },
      pagebreak: { mode: ['css', 'legacy'] },
    };

    const restaurar = () => {
      template.style.cssText = 'display:none;';
    };

    window.html2pdf()
      .set(opt)
      .from(wrapper)
      .save()
      .then(() => {
        restaurar();
        btnPDF.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Baixar Mapa Completo em PDF`;
        btnPDF.disabled = false;
      })
      .catch(err => {
        console.error('Erro ao gerar PDF:', err);
        restaurar();
        btnPDF.textContent = 'Erro — tente novamente';
        btnPDF.disabled = false;
      });
  });
}
