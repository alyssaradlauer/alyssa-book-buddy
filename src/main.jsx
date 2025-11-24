import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BooksProvider } from "./Books/BooksContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
);
