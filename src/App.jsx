// import "/app.css"; ?
import { useState, useEffect } from "react";
import { useBooks } from "./Books/BooksContext";
import Books from "./Books/Books";
import SingleBook from "./Books/SingleBook";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import NavBar from "./NavBar";
import axios from "axios";
function App() {
  const { book } = useBooks();
  const [view, setView] = useState("");
  const [user, setUser] = useState({});

  const authenticate = async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    try {
      const { data } = await axios.get("API", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    authenticate();
  }, [user.id]);

  return (
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Library App
      </h1>
      <h2>Hello {user.username ? user.username : "Guest"}</h2>
      <NavBar setView={setView} user={user} setUser={setUser} />
      {view === "allBooks" ? book ? <SingleBook /> : <Books /> : null}
      {view === "login" ? (
        <LoginForm authenticate={authenticate} setView={setView} />
      ) : null}
      {view === "register" ? <RegisterForm setView={setView} /> : null}
    </div>
  );
}

export default App;
