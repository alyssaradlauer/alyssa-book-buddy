import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BooksProvider } from "./Books/BooksContext.jsx";

createRoot(document.getElementById("root")).render(
  <BooksProvider>
    <App />
  </BooksProvider>
);
