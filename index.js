import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import {RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import "./styles/main.scss";
import { routes } from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);