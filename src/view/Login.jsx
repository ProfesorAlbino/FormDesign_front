import React, { useState } from "react";
import "../styles/view/LoginStyle.css";
import { login } from "../js/AuthService.js";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login({ mail, password });
      if (response.success===true) {
        window.location.href = "/";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid align-items-center d-flex justify-content-center mt-5">
      <div className="login-container">
        <div className="login-header">
          <h1>Iniciar Sesión</h1>
          <p className="text-muted">Ingresa tus credenciales para continuar</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <a href="/" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
          <div className="register-link">
            ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
