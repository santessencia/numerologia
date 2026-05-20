const TABELA_PITAGORICA = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

const VOGAIS = new Set(['A', 'E', 'I', 'O', 'U']);

function reduzir(n) {
  if (n === 11 || n === 22 || n === 33) return n;
  if (n <= 9) return n;
  const soma = String(n).split('').reduce((acc, d) => acc + Number(d), 0);
  return reduzir(soma);
}

function limparNome(nome) {
  return nome.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z\s]/g, '').toUpperCase().trim();
}

function numeroDestino(nome) {
  const limpo = limparNome(nome);
  const soma = limpo.replace(/\s/g, '').split('').reduce((acc, l) => acc + (TABELA_PITAGORICA[l] || 0), 0);
  return reduzir(soma);
}

function numeroAlma(nome) {
  const limpo = limparNome(nome);
  const soma = limpo.replace(/\s/g, '').split('').filter(l => VOGAIS.has(l)).reduce((acc, l) => acc + (TABELA_PITAGORICA[l] || 0), 0);
  return reduzir(soma);
}

const ARCANOS = {
  1: 'O Pioneiro', 2: 'O Diplomata', 3: 'O Criador', 4: 'O Construtor',
  5: 'O Explorador', 6: 'O Guardião', 7: 'O Sábio', 8: 'O Realizador',
  9: 'O Humanista', 11: 'O Iluminado', 22: 'O Mestre Construtor', 33: 'O Mestre do Amor',
};

const PALAVRAS_DESTINO = {
  1: 'Liderança e Iniciativa', 2: 'Diplomacia e Pacifismo', 3: 'Comunicação e Criatividade',
  4: 'Construção e Disciplina', 5: 'Versatilidade e Liberdade', 6: 'Responsabilidade e Amor',
  7: 'Análise e Espiritualidade', 8: 'Tenacidade e Poder', 9: 'Fraternidade e Compaixão',
  11: 'Inspiração e Intuição', 22: 'Filantropia e Grandes Realizações', 33: 'Justiça Social e Amor Universal',
};

const PALAVRAS_ALMA = {
  1: 'Iniciativa, Força e Independência', 2: 'Diplomacia, Paz e Cooperação', 3: 'Alegria, Criatividade e Comunicação',
  4: 'Organização, Trabalho e Eficiência', 5: 'Carisma, Força e Impulsividade', 6: 'Amor, Responsabilidade e Harmonia',
  7: 'Sabedoria, Justiça e Introspecção', 8: 'Ambição, Poder e Realização', 9: 'Generosidade e Espírito Comunitário',
  11: 'Espiritualidade, Sabedoria e Idealismo', 22: 'Consciência Superior e Liderança', 33: 'Amor Universal e Serviço',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { nome, email, nascimento } = req.body;

  if (!nome || !email || !nascimento) {
    return res.status(400).json({ erro: 'Dados incompletos (nome, email, nascimento)' });
  }

  const destino = numeroDestino(nome);
  const alma = numeroAlma(nome);
  const primeiroNome = nome.split(' ')[0];

  const appUrl = process.env.APP_URL || 'https://numerologia-rosy.vercel.app';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#F9F7FC;font-family:'Georgia',serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <span style="color:#4B2090;font-size:14px;letter-spacing:2px;">✦ &nbsp; CHAVE DA ESSÊNCIA &nbsp; ✦</span>
    </div>

    <div style="background:#ffffff;border-radius:16px;padding:40px 32px;border:1px solid #E8E0F0;">
      <p style="color:#2A1060;font-size:18px;margin:0 0 8px;">Olá, <strong>${primeiroNome}</strong> ✦</p>
      <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 28px;">
        O seu Mapa Numerológico foi calculado. Aqui está uma prévia dos seus números principais:
      </p>

      <!-- Destino -->
      <div style="background:#F3EDFC;border-radius:12px;padding:24px;margin-bottom:16px;text-align:center;">
        <p style="color:#4B2090;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Número do Destino</p>
        <p style="color:#2A1060;font-size:48px;font-weight:bold;margin:0 0 4px;">${destino}</p>
        <p style="color:#4B2090;font-size:16px;font-style:italic;margin:0 0 8px;">${ARCANOS[destino]}</p>
        <p style="color:#666;font-size:13px;margin:0;">${PALAVRAS_DESTINO[destino]}</p>
      </div>

      <!-- Alma -->
      <div style="background:#FDF2F5;border-radius:12px;padding:24px;margin-bottom:28px;text-align:center;">
        <p style="color:#C4607A;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Número da Alma</p>
        <p style="color:#2A1060;font-size:48px;font-weight:bold;margin:0 0 4px;">${alma}</p>
        <p style="color:#C4607A;font-size:16px;font-style:italic;margin:0 0 8px;">${ARCANOS[alma]}</p>
        <p style="color:#666;font-size:13px;margin:0;">${PALAVRAS_ALMA[alma]}</p>
      </div>

      <div style="border-top:1px solid #E8E0F0;padding-top:24px;text-align:center;">
        <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 20px;">
          O seu mapa completo contém ainda: <strong>Personalidade</strong>, <strong>Lição de Vida</strong>,
          <strong>Ano Pessoal</strong>, <strong>Potencialidades</strong> (excessos e ausências)
          e o <strong>Cristal</strong> do seu número — tudo com interpretações detalhadas e PDF para guardar.
        </p>
        <a href="${appUrl}/obrigado.html"
           style="display:inline-block;background:#4B2090;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:bold;">
          ✦ Desbloquear mapa completo — R$27
        </a>
        <p style="color:#999;font-size:12px;margin:16px 0 0;">Acesso imediato · PDF completo · Cristal + Chakra</p>
      </div>
    </div>

    <!-- Cross-promo Akasha Cria -->
    <div style="background:#1a0533;border-radius:12px;padding:24px 20px;margin-top:24px;text-align:center;">
      <p style="color:#c4b5fd;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Para terapeutas e criadores holísticos</p>
      <p style="color:#fff;font-size:16px;font-weight:bold;margin:0 0 8px;">Você usa numerologia com seus clientes?</p>
      <p style="color:#a78bfa;font-size:13px;line-height:1.6;margin:0 0 16px;">
        Conheça o Akasha Cria — IA que gera conteúdo estratégico para terapeutas holísticos.
        Posts, carrosséis, stories e copies alinhados com o calendário astral.
      </p>
      <a href="https://studioai-khaki.vercel.app/register?utm_source=mapa&utm_medium=email&utm_campaign=upsell"
         style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:bold;">
        Experimentar grátis
      </a>
    </div>

    <div style="text-align:center;margin-top:32px;">
      <p style="color:#999;font-size:12px;">Chave da Essência · Numerologia Pitagórica</p>
      <p style="color:#bbb;font-size:11px;">Os números revelam o que a alma já sabe ✦</p>
    </div>

  </div>
</body>
</html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Chave da Essência <mapa@resend.dev>',
        to: [email],
        subject: `✦ ${primeiroNome}, o seu Mapa Numerológico — Destino ${destino}`,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(500).json({ erro: 'Erro ao enviar email', detalhe: data });
    }

    return res.status(200).json({ ok: true, id: data.id });
  } catch (err) {
    console.error('Erro interno:', err);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
}
