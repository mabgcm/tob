import React, { useState } from "react";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const [showCart, setShowCart] = useState(false);

  // Sepetteki toplam ürün adedi
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Sepete ürün ekleme (quantity parametresiyle uyumlu)
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // Sepet offcanvas'ını aç/kapat
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  // Checkout ve ödeme akışı
  const goToCheckout = () => {
    closeCart();
    setPage("checkout");
  };

  const completeCheckout = (result) => {
    if (result === "thankyou") {
      setPage("thankyou");
      setCart([]); // Sipariş sonrası sepeti temizle
    } else {
      setPage("payment");
      setCart([]); // Sipariş sonrası sepeti temizle
    }
  };

  // Sayfa geçişleri
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  if (page === "checkout")
    return (
      <Checkout
        cart={cart}
        completeCheckout={completeCheckout}
      />
    );

  if (page === "payment")
    return (
      <div className="container mt-5">
        <h2>Payment module</h2>
        <p>Payment integration will be added here.</p>
      </div>
    );

  if (page === "thankyou")
    return (
      <div className="container mt-5">
        <h2>Thank you for your order!</h2>
        <p>Your order has been received. We will contact you soon.</p>
      </div>
    );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1 d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={openCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
            </svg>
            <span className="ms-2">Cart</span>
            <span className="badge bg-primary ms-2">{cartCount}</span>
          </span>
        </div>
      </nav>

      {/* Offcanvas Cart */}
      <div
        className={`offcanvas offcanvas-start bg-white${showCart ? " show" : ""}`}
        tabIndex="-1"
        style={{
          visibility: showCart ? "visible" : "hidden",
          transition: "visibility 0.2s, opacity 0.2s"
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Cart</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closeCart}
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cart cart={cart} goToCheckout={goToCheckout} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        <ProductList addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;