// import "/app.css"; ?
import { useState, useEffect } from "react";
import { useBooks } from "./Books/BooksContext";
import Books from "./Books/Books";
import SingleBook from "./Books/SingleBook";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import NavBar from "./NavBar";
import axios from "axios";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Error404 from "./Error404";
import Profile from "./Auth/Profile";
function App() {
  const { book } = useBooks();
  const [user, setUser] = useState({});

  const authenticate = async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
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

      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Books />} />
          <Route path="books" element={<Books />} />
          <Route
            path="books/:id"
            element={<SingleBook user={user} authenticate={authenticate} />}
          />
          <Route
            path="login"
            element={<LoginForm authenticate={authenticate} />}
          />
          <Route path="register" element={<RegisterForm />} />
          <Route
            path="profile"
            element={<Profile user={user} authenticate={authenticate} />}
          />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>

      {/* {view === "allBooks" ? book ? <SingleBook /> : <Books /> : null}
      {view === "login" ? (
        <LoginForm authenticate={authenticate} setView={setView} />
      ) : null}
      {view === "register" ? <RegisterForm setView={setView} /> : null} */}
    </div>
  );
}

export default App;
