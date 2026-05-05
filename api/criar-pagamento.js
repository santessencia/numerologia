export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { nome, email, whatsapp, plano } = req.body;

  if (!nome || !email || !plano) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  const precos = {
    imediato: { valor: 27.00, titulo: 'Chave da Essência — Acesso Imediato' },
    vip:      { valor: 97.00, titulo: 'Chave da Essência — Mapa VIP'         },
  };

  if (!precos[plano]) {
    return res.status(400).json({ erro: 'Plano inválido' });
  }

  const appUrl = process.env.APP_URL || 'https://numerologia-rosy.vercel.app';

  const body = {
    items: [{
      title:      precos[plano].titulo,
      quantity:   1,
      unit_price: precos[plano].valor,
      currency_id: 'BRL',
    }],
    payer: { name: nome, email },
    external_reference: JSON.stringify({ nome, email, whatsapp, plano }),
    back_urls: {
      success: `${appUrl}/pagamento-sucesso.html`,
      failure: `${appUrl}/captacao.html`,
      pending: `${appUrl}/captacao.html`,
    },
    auto_return: 'approved',
    notification_url: `${appUrl}/api/webhook-mp`,
    statement_descriptor: 'CHAVE DA ESSENCIA',
  };

  try {
    const resposta = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify(body),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      console.error('Erro MP:', dados);
      return res.status(500).json({ erro: 'Erro ao criar pagamento', detalhe: dados });
    }

    return res.status(200).json({ url: dados.init_point });

  } catch (err) {
    console.error('Erro interno:', err);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
}
