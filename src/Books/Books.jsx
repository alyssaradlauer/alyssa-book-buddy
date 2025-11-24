import { useBooks } from "./BooksContext";
import { Link } from "react-router";

const Books = () => {
  const { books } = useBooks;
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
