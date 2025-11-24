import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "Fake book 1" },
    { id: 2, title: "Fake book 2" },
  ]);
  const [book, setBook] = useState({});

  useEffect(() => {
    // const fetchAllBooks = async () => {
    //   const { data } = await axios.get("API");
    //   console.log(data);
    //   setBooks(data);
    // };
    // fetchAllBooks();
  }, []);

  const value = { books, book, setBooks, setBook };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) {
    throw Error("useBooks must be used within the BooksContext provider");
  }
  return context;
}
