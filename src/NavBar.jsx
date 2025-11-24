import { useBooks } from "./Books/BooksContext";
import { NavLink, useNavigate } from "react-router";
const NavBar = ({ user, setUser }) => {
  const { setBook } = useBooks();
  const navigate = useNavigate();
  //   const forceToBooks = () => {
  //     setBook({});
  //     setView("allBooks");
  //   };
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
    navigate("/");
  };
  return (
    <nav>
      <NavLink to="/books">All Books</NavLink>
      {user.id ? (
        <a
          onClick={() => {
            logout();
          }}
        >
          Logout
        </a>
      ) : (
        <span>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
