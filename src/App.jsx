import { useState } from "react";
import "./App.css";
import { BookForm } from "./components/bookForm/BookForm";
import { BookList } from "./components/bookList/BookList";
import { Filter } from "./components/filter/Filter";
import { Header } from "./components/header/Header";
import { Button } from "./components/UI/Button";

function App() {
  const [open, setOpen] = useState("53");
  const [books, setBooks] = useState([]);

  function openAddBookForm() {
    setOpen((prev) => {
      return !prev;
    });
  }
  function toggleFavorite(id) {
    const updateBooks = books.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setBooks(updateBooks);
  }
  function deleteHandler(id) {
    const updateBooks = books.filter((item) => item.id !== id);
    setBooks(updateBooks);
  }

  const buttonText = !open ? "Add Book" : "Cancel";

  function onAddNewBook(parametr) {
    setBooks((prev) => {
      return [...prev, parametr];
    });
  }

  return (
    <div className="app">
      <Header />
      <Button onClick={openAddBookForm}>{buttonText}</Button>
      <main className="app-main">
        <div className="app-left-column">
          {open && (
            <BookForm onCancel={openAddBookForm} onAddBook={onAddNewBook} />
          )}
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList
            books={books}
            onToggle={toggleFavorite}
            onDelete={deleteHandler}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
