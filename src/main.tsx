import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/form";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Form />
  </StrictMode>
);
