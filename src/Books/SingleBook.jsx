import { useBooks } from "./BooksContext";
const SingleBook = () => {
  const { setBook, book } = useBooks();
  const backToBooks = () => {
    setBook({});
  };
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
