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

  // Ürünler sayfasına geri dönme fonksiyonu
  const goBackToProducts = () => {
    setPage("products");
  };

  // Sayfa geçişleri
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  if (page === "checkout")
    return (
      <Checkout
        cart={cart}
        completeCheckout={completeCheckout}
        goBackToProducts={goBackToProducts}
      />
    );

  if (page === "payment")
    return (
      <div className="container mt-5">
        <h2>Ödeme Modülü</h2>
        <p>Ödeme entegrasyonu burada eklenecektir.</p>
      </div>
    );

  if (page === "thankyou")
    return (
      <div className="container mt-5">
        <h2>Siparişiniz için teşekkürler!</h2>
        <p>Siparişiniz alındı. En kısa sürede sizinle iletişime geçilecektir.</p>
      </div>
    );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1 d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={openCart}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ms-2">Sepet</span>
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
          transition: "visibility 0.2s, opacity 0.2s",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Sepet</h5>
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
      <div className="container mt-5">
        <ProductList addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;