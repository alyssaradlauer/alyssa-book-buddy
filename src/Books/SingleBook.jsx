import { useBooks } from "./BooksContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const SingleBook = () => {
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
