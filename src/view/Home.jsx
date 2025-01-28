import React from "react";
import "../styles/view/HomeStyle.css";

export default function Home() {

    const json= JSON.parse(localStorage.getItem("user"));

    const name = json.nombre;
    const lastName= json.apellido;

  return (
    <>
      <div class="container-fluid">
        <div class="row">

            <div class="col-md-9 col-lg-10 main-content align-content-center">
                <div>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center">
                        Bienvenido a tu panel de control
                    </h1>
                    <h2 className="text-center mb-5">
                        {name} {lastName}
                    </h2>
                </div>
                <div class="px-4">
                    <div class="row g-4 mb-4">
                        <div class="col-12 col-sm-6 col-xl-3">
                            <div class="card stat-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="card-subtitle mb-1">Total Users</h6>
                                        <h3 class="card-title mb-0">2,456</h3>
                                    </div>
                                    <div class="stat-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                            <div class="card stat-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="card-subtitle mb-1">Revenue</h6>
                                        <h3 class="card-title mb-0">$8,245</h3>
                                    </div>
                                    <div class="stat-icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                            <div class="card stat-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="card-subtitle mb-1">Orders</h6>
                                        <h3 class="card-title mb-0">456</h3>
                                    </div>
                                    <div class="stat-icon">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                            <div class="card stat-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="card-subtitle mb-1">Growth</h6>
                                        <h3 class="card-title mb-0">+12%</h3>
                                    </div>
                                    <div class="stat-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-12 col-lg-8">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Recent Activity</h5>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td>New Order</td>
                                                    <td>2024-01-27</td>
                                                    <td><span class="badge bg-success">Completed</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Jane Smith</td>
                                                    <td>Payment</td>
                                                    <td>2024-01-26</td>
                                                    <td><span class="badge bg-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Mike Johnson</td>
                                                    <td>Registration</td>
                                                    <td>2024-01-26</td>
                                                    <td><span class="badge bg-info">New</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Quick Stats</h5>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="flex-shrink-0">
                                            <i class="fas fa-arrow-up text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-0">Monthly Sales</h6>
                                            <small class="text-muted">15% increase</small>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="flex-shrink-0">
                                            <i class="fas fa-users text-primary"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-0">New Users</h6>
                                            <small class="text-muted">+123 this week</small>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="fas fa-chart-pie text-warning"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-0">Conversion Rate</h6>
                                            <small class="text-muted">4.5% average</small>
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
