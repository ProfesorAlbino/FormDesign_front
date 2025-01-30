import React, { useState } from "react";
import "../styles/view/RegisterStyle.css";
import { register } from "../js/AuthService.js";

export default function Register() {
//   const userModel = {
//     nombre: "",
//     apellido: "",
//     correo: "",
//     contraseña: "",
//   };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  
//   const [user, setUser] = useState(userModel);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await register({ nombre, apellido, correo, contraseña });
      if (response.success === true) {
        window.location.href = "/login";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container align-items-center d-flex justify-content-center mt-5">
      <div className="register-container">
        <div className="register-header">
          <h1>Crear cuenta</h1>
          <p className="text-muted">Complete el formulario para registrarse</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={(e) => setNombre(e.target.value )}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <div className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              required
            />
          </div>

          <div className="password-requirements">
            <h6>La contraseña debe contener:</h6>
            <ul>
              <li>Al menos 8 caracteres</li>
              <li>Una letra mayúscula</li>
              <li>Una letra minúscula</li>
              <li>Un número</li>
              <li>Un carácter especial</li>
            </ul>
          </div>

          <button type="submit" className="btn btn-primary">
            Crear cuenta
          </button>

          <div className="login-link">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
