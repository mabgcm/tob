// pages/api/create-payment.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST destekleniyor' });
    }

    const axios = await import('axios').then(mod => mod.default);

    const { amount, orderId } = req.body;

    const apiKey = '4EBPTAK-WH4M4NH-PKFV4YS-8EXW2S7';

    try {
        const response = await axios.post('https://api.nowpayments.io/v1/payment', {
            price_amount: amount,
            price_currency: 'USD',
            pay_currency: 'USDT',
            order_id: orderId,
            order_description: 'PurrlyBaby ürün ödemesi',
            ipn_callback_url: 'https://seninsite.com/api/ipn-callback',
            success_url: 'https://seninsite.com/tesekkurler',
            cancel_url: 'https://seninsite.com/odeme-iptal',
        }, {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        return res.status(200).json({ invoiceUrl: response.data.invoice_url });
    } catch (error) {
        console.error(error.response?.data || error.message);
        return res.status(500).json({ error: 'NOWPayments API hatası' });
    }
}
