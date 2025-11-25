import { useBooks } from "./BooksContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const SingleBook = ({ user, authenticate }) => {
  const { setBook, book, books } = useBooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const singleBook = books.find((game) => {
    return book.id === id;
  });

  useEffect(() => {
    const fetchSingleBook = async () => {
      const { data } = await axios.get(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
      );
      setBook(data);
    };
    fetchSingleBook();
  }, []);

  const reserveBook = async () => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      alert("Please login to reserve this book.");
      return;
    }
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
        { bookId: book.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Reservation created:", data);

      if (authenticate) {
        await authenticate();
      }

      setBook({ ...book, available: false });

      alert("Book reserved!");
    } catch (error) {
      console.error(error);
      alert("Could not reserve this book.");
    }
  };

  const backToBooks = () => {
    navigate("/books");
  };

  if (!book) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <h4>Author: {book.author}</h4>
      <h3>ID: {book.id}</h3>
      <img src={book.coverimage} alt={book.title} />
      <p>{book.description}</p>
      {user.id && book.available && (
        <button onClick={reserveBook}>Reserve this book</button>
      )}
      <div>
        <button
          onClick={() => {
            backToBooks();
          }}
        >
          Back To Book List
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
