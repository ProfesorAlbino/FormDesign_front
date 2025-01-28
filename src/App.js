import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import UserLayout from "./layout/UserLayout";
import Home from "./view/Home";
import Form from "./view/Form";
import Login from "./view/Login";
import Register from "./view/Register";

const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute
              element={
                <UserLayout num={1}>
                  <Home />
                </UserLayout>
              }
            />
          }
        />
        <Route
          path="/form"
          element={
            <PrivateRoute
              element={
                <UserLayout num={2}>
                  <Form />
                </UserLayout>
              }
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
