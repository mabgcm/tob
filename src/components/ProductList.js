import React, { useState } from "react";
import products from "../products";

export default function ProductList({ addToCart }) {
    // Her ürün için adet bilgisini ayrı ayrı tutmak için state
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        // Sadece sayı girilmesine izin ver
        if (/^\d*$/.test(value)) {
            setQuantities((prev) => ({
                ...prev,
                [id]: value,
            }));
        }
    };

    const handleBuy = (product) => {
        const quantity = parseInt(quantities[product.id] || "1", 10);
        if (quantity > 0) {
            addToCart(product, quantity);
            setQuantities((prev) => ({ ...prev, [product.id]: "" })); // inputu sıfırla
        } else {
            alert("Please enter a valid quantity.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Products</h2>
            <table className="table table-bordered align-middle">
                <tbody>
                    {products.map((product) => (
                        <React.Fragment key={product.id}>
                            <tr>
                                <td style={{ width: "30%" }}>
                                    <strong>{product.name}</strong>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <input
                                        type="number"
                                        min="1"
                                        className="form-control"
                                        style={{ width: 80 }}
                                        value={quantities[product.id] || ""}
                                        onChange={(e) =>
                                            handleQuantityChange(product.id, e.target.value)
                                        }
                                        placeholder="Qty"
                                    />
                                </td>
                                <td style={{ width: "20%" }}>
                                    <span>{product.price} $</span>
                                </td>
                                <td style={{ width: "30%" }}>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleBuy(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="text-muted">
                                    {product.info}
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}