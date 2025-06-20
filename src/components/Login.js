import React, { useState } from "react";

export default function Login({ onLogin }) {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "1234") {
            onLogin();
        } else {
            alert("Wrong Password");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form
                onSubmit={handleSubmit}
                className="p-4 border rounded bg-white shadow"
                style={{ minWidth: 300 }}
            >
                <div className="mb-3">
                    <input
                        type="password"
                        maxLength={4}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Siteye giriș için șifreyi giriniz"
                        className="form-control text-center"
                        autoFocus
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Giriș Yap
                </button>
            </form>
        </div>
    );
}