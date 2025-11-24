import { useBooks } from "./BooksContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
const SingleBook = () => {
  const { setBook, book, books } = useBooks();
  const { id } = useParams();

  const singleBook = books.find((game) => {
    return book.id === id;
  });

  useEffect(() => {
    const fetchSingleBook = async () => {
      const { data } = await axios.get(`API${id}`);
      setBook(data);
    };
    fetchSingleBook();
  }, []);

  const backToBooks = () => {
    setBook({});
  };

  if (!book) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {/* <h2>{book.title}</h2> */}
      //add whatever else information is required per single book
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
