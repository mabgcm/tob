import React, { useState } from "react";

const GTA_CITIES = [
    "Toronto",
    "Barrie",
    "New Market",
    "Newmarket",
    "Bradford",
    "GTA"
];

export default function Checkout({ cart }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
        payment: "card"
    });
    const [shippingCost, setShippingCost] = useState(0);

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
        const isGTA = GTA_CITIES.some(
            (c) => c.toLowerCase() === cityNormalized
        );
        setShippingCost(isGTA ? 0 : 25);
    };

    // Form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "city") {
            handleCityChange(value);
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="container mt-4">
            <h2>Checkout</h2>
            <div className="row">
                {/* Order Summary */}
                <div className="col-md-6 mb-4">
                    <h4>Order Summary</h4>
                    <ul className="list-group mb-3">
                        {cart.map((item) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                <span>
                                    {item.name} <span className="text-muted">x {item.quantity}</span>
                                </span>
                                <span>${item.price * item.quantity}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? "Free" : `$${shippingCost}`}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between fw-bold">
                            <span>Total</span>
                            <span>${total}</span>
                        </li>
                    </ul>
                </div>

                {/* Shipping Details & Payment */}
                <div className="col-md-6">
                    <h4>Shipping Details</h4>
                    <form
                        action="https://formspree.io/f/meokzked"
                        method="POST"
                        className="p-4 border rounded"
                    >
                        {/* Formsubmit hidden fields */}
                        <input type="hidden" name="_subject" value="New Order" />
                        <input type="hidden" name="Cart" value={cartSummary} />
                        <input type="hidden" name="Subtotal" value={subtotal} />
                        <input type="hidden" name="Shipping" value={shippingCost} />
                        <input type="hidden" name="Total" value={total} />
                        {/* <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" /> */}

                        <div className="mb-3">
                            <label className="form-label">First Name *</label>
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
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address *</label>
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
                            <label className="form-label">City *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                placeholder="Toronto, Barrie, etc."
                            />
                            <div className="form-text">
                                Free shipping for Toronto GTA (Barrie, New Market, Bradford included). Other cities: C$25 shipping.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone *</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                pattern="^\d{10,}$"
                                placeholder="e.g. 4161234567"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            <select
                                className="form-select"
                                name="payment"
                                value={form.payment}
                                onChange={handleChange}
                            >
                                <option value="card">Pay by Card</option>
                                <option value="cash">Pay on Delivery</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Complete Checkout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}