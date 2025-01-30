import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/SideBarStyle.css";
import { Database, User, Bolt, Home, LogOut } from "lucide-react";
// import { useEffect, useState } from "react";

const Sidebar = ({ num }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header mt-4 text-center ">
        <h4>Form Desing</h4>
        <hr />
      </div>

      <nav className="sidebar-nav ms-3">
        <ul className="list-unstyled">
          {/* Opción 1: Inicio */}
          <li className={`mb-4`}>
            <a
              href="/"
              className={`sidebar-nav-item w-50 ${num === 1 ? "active" : ""}`}
            >
              <Home /> <span>Inicio</span>
            </a>
          </li>

          {/* Opción 2: Formularios */}
          <li className={`mb-4`}>
            <a
              href="/form"
              className={`sidebar-nav-item w-50 ${num === 2 ? "active" : ""}`}
            >
              <Database /> <span>Formularios</span>
            </a>
          </li>

          {/* Opción 3: Cuenta */}
          <li className={`mb-4`}>
            <a
              href="/account"
              className={`sidebar-nav-item w-50 ${num === 3 ? "active" : ""}`}
            >
              <User /> <span>Cuenta</span>
            </a>
          </li>

          {/* Opción 4: Otros */}
          <li className={`mb-4`}>
            <a
              href="/others"
              className={`sidebar-nav-item w-50 ${num === 4 ? "active" : ""}`}
            >
              <Bolt /> <span>Otros</span>
            </a>
          </li>

          {/*cerrar sesion */}
          <li className="mb-4 d-flex w-100">
            
            <button
              onClick={logout}
              className={`sidebar-nav-item btn`}
              id="logout"
            >
              <LogOut/> <span>  Cerrar sesión</span>
            </button>
          </li>

        </ul>

      </nav>

      <div className="sidebar-footer p-3 border-top text-center mt-auto">
        <small>© 2024 Form Desing</small>
      </div>
    </div>
  );
};

export default Sidebar;
