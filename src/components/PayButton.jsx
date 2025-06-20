import axios from 'axios';

const PayButton = ({ amount }) => {
    const handlePayment = async () => {
        try {
            const res = await axios.post('/api/create-payment', {
                amount,
                orderId: `order_${Date.now()}`
            });
            window.location.href = res.data.invoiceUrl;
        } catch (error) {
            alert('Ödeme başlatılamadı.');
            console.error(error);
        }
    };

    return (
        <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">
            Kripto ile Öde
        </button>
    );
};

export default PayButton;
