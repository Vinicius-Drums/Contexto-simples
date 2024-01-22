import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProvedorTema } from "./components/Contextotema";

// Renderiza o aplicativo dentro do ProvedorTema para fornecer o contexto de tema
ReactDOM.render(
  <React.StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </React.StrictMode>,
  document.getElementById("root")
);
