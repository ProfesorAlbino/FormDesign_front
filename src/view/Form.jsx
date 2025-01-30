import React from "react";
import '../styles/view/FormStyle.css';

export default function Form() {
  return (
    <div className="container-fluid py-4">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Formulario de Contacto</td>
                  <td>Formulario principal para contacto con clientes</td>
                  <td>25/01/2025</td>
                  <td className="action-buttons">
                    <button className="btn btn-info btn-sm text-white" title="Ver">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="btn btn-warning btn-sm text-white"
                      title="Modificar"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" title="Eliminar">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Encuesta de Satisfacción</td>
                  <td>Encuesta para evaluar la satisfacción del usuario</td>
                  <td>24/01/2025</td>
                  <td className="action-buttons">
                    <button className="btn btn-info btn-sm text-white" title="Ver">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="btn btn-warning btn-sm text-white"
                      title="Modificar"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" title="Eliminar">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
