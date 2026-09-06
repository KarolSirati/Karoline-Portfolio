import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioView } from "./views/PortfolioView";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioView />
  </StrictMode>,
);
