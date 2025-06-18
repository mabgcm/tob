import React from "react";

export default function Cart({ cart, goToCheckout }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.map((item) => (
                <div key={item.id} className="mb-2">
                    {item.name} x {item.quantity} = {item.price * item.quantity} $
                </div>
            ))}
            <p className="fw-bold">Total: {total} $</p>
            <button
                onClick={goToCheckout}
                disabled={cart.length === 0}
                className="btn btn-primary w-100"
            >
                Check Out
            </button>
        </div>
    );
}