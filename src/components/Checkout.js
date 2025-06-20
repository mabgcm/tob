import React, { useState, useEffect } from "react";

const GTA_CITIES = [
    "Angus",
    "Aurora",
    "Barrie",
    "Bradford",
    "Innisfil",
    "Markham",
    "New Market",
    "New Techumseth",
    "Richmond Hill",
    "Vaughan",
];

export default function Checkout({ cart, goBackToProducts }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
        payment: "card",
    });
    const [shippingCost, setShippingCost] = useState(0);
    const [paymentInfoText, setPaymentInfoText] = useState("");

    // Cart summary for hidden input
    const cartSummary = cart
        .map((item) => `${item.name} x ${item.quantity} = $${item.price * item.quantity}`)
        .join("; ");

    // Subtotal and total
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + shippingCost;

    // City change handler for shipping cost
    const handleCityChange = (value) => {
        setForm((prev) => ({ ...prev, city: value }));
        const cityNormalized = value.trim().toLowerCase();
        const isGTA = GTA_CITIES.some((c) => c.toLowerCase() === cityNormalized);

        if (isGTA) {
            // Eğer şehir GTA içindeyse ve sipariş 100$ üstüyse kargo ücretsiz, değilse 25$
            setShippingCost(subtotal > 100 ? 0 : 10);
        } else {
            // GTA dışı şehirlerde her zaman 25$
            setShippingCost(15);
        }
    };

    // Payment method change handler with validation
    const handlePaymentChange = (value) => {
        const cityNormalized = form.city.trim().toLowerCase();
        const isGTA = GTA_CITIES.some((c) => c.toLowerCase() === cityNormalized);

        // GTA dışı şehirlerde kapıda ödeme seçilirse uyarı ver ve ödeme yöntemini karta çevir
        if (!isGTA && value === "cash") {
            alert("Bu adres için kapıda ödeme seçeneği kabul edilmez.");
            setForm((prev) => ({ ...prev, payment: "card" }));
            setPaymentInfoText("Kartla ödeme linki daha sonra telefonla size ulaşilarak verilecektir.");
            return;
        }

        setForm((prev) => ({ ...prev, payment: value }));

        // Ödeme seçeneğine göre bilgilendirme metni
        if (value === "card") {
            setPaymentInfoText("Kartla ödeme linki daha sonra telefonla size ulaşilarak verilecektir.");
        } else if (value === "cash") {
            setPaymentInfoText("");
        } else if (value === "interact") {
            setPaymentInfoText("Transfer emaili daha sonra size telefonla gönderilecektir.");
        } else {
            setPaymentInfoText("");
        }
    };

    // Form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "city") {
            handleCityChange(value);
        } else if (name === "payment") {
            handlePaymentChange(value);
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Sayfa yüklendiğinde veya ödeme yöntemi değiştiğinde bilgilendirme metnini ayarla
    useEffect(() => {
        if (form.payment === "card") {
            setPaymentInfoText("Kartla ödeme linki daha sonra telefonla size ulaşilarak verilecektir.");
        } else if (form.payment === "interact") {
            setPaymentInfoText("Transfer emaili daha sonra size telefonla gönderilecektir.");
        } else {
            setPaymentInfoText("");
        }
    }, []);

    return (
        <div className="container mt-4">
            <button className="btn btn-warning mb-3" onClick={goBackToProducts}>
                Geri Git
            </button>

            <h2 className="text-center mb-5">Siparişi Tamamla</h2>
            <div className="row">
                {/* Sipariş Özeti */}
                <div className="col-md-6 mb-4">
                    <h4>Sipariş Özeti</h4>
                    <ul className="list-group mb-3">
                        {cart.map((item) => (
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={item.id}
                            >
                                <span>
                                    {item.name} <span className="text-muted">x {item.quantity}</span>
                                </span>
                                <span>${item.price * item.quantity}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Ara Toplam</span>
                            <span>${subtotal}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Kargo</span>
                            <span>{shippingCost === 0 ? "Ücretsiz" : `$${shippingCost}`}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between fw-bold">
                            <span>Toplam</span>
                            <span>${total}</span>
                        </li>
                    </ul>
                </div>

                {/* Gönderim Bilgileri ve Ödeme */}
                <div className="col-md-6">
                    <h4>Gönderim Bilgileri</h4>
                    <form
                        action="https://formspree.io/f/meokzked"
                        method="POST"
                        className="p-4 border rounded"
                    >
                        {/* Gizli alanlar */}
                        <input type="hidden" name="_subject" value="Yeni Sipariş" />
                        <input type="hidden" name="Cart" value={cartSummary} />
                        <input type="hidden" name="Subtotal" value={subtotal} />
                        <input type="hidden" name="Shipping" value={shippingCost} />
                        <input type="hidden" name="Total" value={total} />

                        <div className="mb-3">
                            <label className="form-label">Ad *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Soyad</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Adres *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Şehir *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                placeholder="Toronto, Barrie, vb."
                            />
                            <div className="form-text">
                                Angus, Aurora, Barrie, Bradford, Innisfil, Markham, New Market, New Techumseth, Richmond Hill, Vaughan için 100 C$ üstü siparişlerde ücretsiz kargo. Diğer şehirler için 25 C$ kargo ücreti uygulanır.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefon *</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                pattern="^\d{10,}$"
                                placeholder="ör. 4161234567"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ödeme Yöntemi</label>
                            <select
                                className="form-select"
                                name="payment"
                                value={form.payment}
                                onChange={handleChange}
                            >
                                <option value="card">Kart ile Ödeme</option>
                                <option value="cash">Kapıda Ödeme</option>
                                <option value="interact">Interact ile Ödeme</option>
                            </select>
                            {paymentInfoText && (
                                <div className="form-text mt-2">{paymentInfoText}</div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Siparişi Tamamla
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}