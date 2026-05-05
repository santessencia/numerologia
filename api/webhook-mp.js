export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { type, data } = req.body;

  // Só processa notificações de pagamento
  if (type !== 'payment') return res.status(200).end();

  try {
    const pagResp = await fetch(`https://api.mercadopago.com/v1/payments/${data.id}`, {
      headers: { 'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}` },
    });
    const pag = await pagResp.json();

    if (pag.status !== 'approved') return res.status(200).end();

    // Recupera dados do comprador guardados no external_reference
    const ref = JSON.parse(pag.external_reference || '{}');

    // Regista na Google Sheets se o URL estiver configurado
    const sheetsUrl = process.env.SHEETS_URL;
    if (sheetsUrl) {
      await fetch(sheetsUrl, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data:      new Date().toLocaleString('pt-BR'),
          nome:      ref.nome      || '',
          email:     ref.email     || '',
          whatsapp:  ref.whatsapp  || '',
          plano:     ref.plano     || '',
          valor:     pag.transaction_amount,
          pagamento: pag.id,
          status:    'pago',
        }),
      });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Webhook erro:', err);
    return res.status(500).end();
  }
}
