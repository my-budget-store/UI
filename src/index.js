import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Mobile from "./MobileApp";
import Desktop from "./DesktopApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>{isMobile ? <Mobile /> : <Desktop />}</BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
