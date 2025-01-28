import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import UserLayout from "./layout/UserLayout";
import Home from "./view/Home";
import Form from "./view/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout num={1}>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/form"
          element={
            <UserLayout num={2}>
              <Form />
            </UserLayout>
          }
        />

        {/* Rutas sin UserLayout */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
