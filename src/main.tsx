import React from "react";
import ReactDOM from "react-dom/client";
import WrappedApp from "./App.tsx";
import "./index.css";
import TailwindIndicator from "./components/global/layout/TailwindIndicator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrappedApp />
    <TailwindIndicator />
  </React.StrictMode>,
);
