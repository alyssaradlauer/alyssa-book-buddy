import { useBooks } from "./BooksContext";
const Books = () => {
  const { book, books, setBook } = useBooks;
  const viewBook = (book) => {
    setBook(book);
  };
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2
              onClick={() => {
                viewBook(book);
              }}
            >
              {book.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
