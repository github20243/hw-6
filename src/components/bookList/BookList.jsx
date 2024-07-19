import { Button } from "@mui/material";
import { Title } from "../UI/title/Title";
import { Wrapper } from "../wrapper/Wrapper";
import styles from "./BookList.module.css";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";

export const BookList = ({ books, onToggle, onDelete }) => {
  return (
    <Wrapper>
      <Title>Add a New Book</Title>
      <ul className={styles["book-list"]}>
        {books.map((book, index) => (
          <li key={book.id}>
            <span>{index + 1}. </span>
            <div className={styles["book-info"]}>
              <strong>
                {book.Title} {book.author}
              </strong>
              ({book.source})
            </div>
            <div className={styles["book-actions"]}>
              <span onClick={() => onToggle(book.id)}>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className={styles["star-icons"]} />
                ) : (
                  <BsBookmarkStar className={styles["star-icons"]} />
                )}
              </span>
              <Button onClick={() => onDelete(book.id)} variant="outlined">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
