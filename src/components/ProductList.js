import React, { useState } from "react";
import products from "../products";

export default function ProductList({ addToCart }) {
    const [quantities, setQuantities] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const handleQuantityChange = (id, value) => {
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
            setQuantities((prev) => ({ ...prev, [product.id]: "" }));
        } else {
            alert("Please enter a valid quantity.");
        }
    };

    // Ürün adı veya fiyatına göre filtreleme
    const filteredProducts = products.filter((product) => {
        const term = searchTerm.toLowerCase();
        return (
            product.name.toLowerCase().includes(term) ||
            product.price.toString().includes(term)
        );
    });

    return (
        <div className="container mt-4">
            <h2>Ürünler</h2>

            {/* Search bar */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ürün adı ya da fiyatla ara"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="accordion" id="productAccordion">
                {filteredProducts.map((product) => {
                    const collapseId = `collapse-${product.id}`;
                    const headingId = `heading-${product.id}`;

                    return (
                        <div className="accordion-item" key={product.id} style={{ border: "none" }}>
                            <h2
                                className="accordion-header"
                                id={headingId}
                                style={{ borderBottom: "1px solid #dee2e6" }}
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded="false"
                                    aria-controls={collapseId}
                                    style={{ boxShadow: "none" }}
                                >
                                    <div className="d-flex justify-content-between w-100">
                                        <span>{product.name}</span>
                                        <span>{product.price} $</span>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className="accordion-collapse collapse"
                                aria-labelledby={headingId}
                                data-bs-parent="#productAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ width: 'auto', height: 250, objectFit: 'cover', marginRight: 10, borderRadius: 4 }}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <strong>Fiyat:</strong> {product.price} $
                                        </div>
                                        <div className="col-md-3">
                                            <input
                                                type="number"
                                                min="1"
                                                className="form-control"
                                                style={{ width: 80 }}
                                                placeholder="Adet"
                                                value={quantities[product.id] || ""}
                                                onChange={(e) =>
                                                    handleQuantityChange(product.id, e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleBuy(product)}
                                            >
                                                Sepete ekle
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-muted">{product.info}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}