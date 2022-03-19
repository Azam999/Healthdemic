import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Error404Page from "./pages/Error404Page";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
