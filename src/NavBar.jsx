import { useBooks } from "./Books/BooksContext";
const NavBar = ({ setView, user }) => {
  const { setBook } = useBooks();
  const forceToBooks = () => {
    setBook({});
    setView("allBooks");
  };
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <nav>
      <a
        onClick={() => {
          forceToBooks();
        }}
      >
        All Books
      </a>
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
          <a
            onClick={() => {
              setView("login");
            }}
          >
            Login
          </a>
          <a
            onClick={() => {
              setView("register");
            }}
          >
            Register
          </a>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
