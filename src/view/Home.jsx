import React, { useEffect, useState } from "react";
import "../styles/view/HomeStyle.css";
import { getNumForms, getTopForms} from "../js/FormService.js";
import { getDataFormByUser } from "../js/FormDataService.js";
import { CardDashboard } from "../components/CardDashboard.jsx";

export default function Home() {
  const json = JSON.parse(localStorage.getItem("user"));

  const name = json.nombre;
  const lastName = json.apellido;
  const numForms = 4;

  const [totalForms, setTotalForms] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const idUsuario = json.idUsuario;

    const getTotalForms = async () => {
      try {
        const response = await getNumForms({ idUsuario });
        setTotalForms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getForms = async () => {
      try {
        const response = await getTopForms({ numForms, idUsuario });
        setForms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTotalData = async () => {
      try {
        const response = await getDataFormByUser({ idUsuario });
        setTotalData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTotalForms();
    getForms();
    getTotalData();

  }, [json.idUsuario]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-lg-10 main-content align-content-center">
            <div>
              <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
            </div>
            <div>
              <h1 className="text-center">Bienvenido a tu panel de control</h1>
              <h2 className="text-center mb-5">
                {name} {lastName}
              </h2>
            </div>
            <div className="px-4">
              <div className="row g-4 mb-4">
                
                <CardDashboard Data={totalForms} descrption="Formularios" />

                <CardDashboard Data={totalData} descrption="Datos Totales" />

              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-8">
                  <div className="card h-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Formularios Recientes</h5>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Descripción</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Acción</th>
                            </tr>
                          </thead>
                          <tbody>
                            {forms.length > 0 ? (
                              forms.map((form, index) => (
                                <tr key={index}>
                                  <td>{form.nombre}</td>
                                  <td>{form.descripcion}</td>
                                  <td>{new Date(form.fechaCreacion).toLocaleString()}</td>
                                  <td>
                                    <a className="btnForm" href={`/form/${form.idFormulario}`}>
                                      Ver
                                    </a>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="4" className="text-center">
                                  Sin registros disponibles
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Usuario</h5>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                          <i className="fas fa-arrow-up text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Nombre</h6>
                          <small className="text-muted">
                            {name} {lastName}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                          <i className="fas fa-users text-primary"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Correo</h6>
                          <small className="text-muted">{json.correo}</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <i className="fas fa-chart-pie text-warning"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <input
                            type="button"
                            className="btn btn-primary"
                            value="Editar Perfil"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
