import { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import { Title } from "../UI/title/Title";
import { Wrapper } from "../wrapper/Wrapper";

export const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [isError, setIsError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title.length < 3 && author.length < 3) {
      setIsError(true);
      return;
    }
    setIsError(false);
    const newbook = {
      title: title,
      author: author,
      isFavorite: false,
      id: Math.floor(Math.random() * 1000),
      source: "manuell",
    };
    onAddBook(newbook);
    setAuthor("");
    setTitle("");
  };

  function titleValueHandler(event) {
    setTitle(event.target.value);
  }
  function authorValueHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <Wrapper>
      <form onSubmit={onSubmitHandler}>
        <Title>Add a New Book</Title>
        <FormInput
          value={title}
          onChange={titleValueHandler}
          id="f1"
          labelText="Title"
          error={isError}
        />
        <FormInput
          value={author}
          onChange={authorValueHandler}
          id="f2"
          labelText="Author"
          error={isError}
        />
        <div>
          <Button>Add Book</Button>
          <Button>Add Random</Button>
          <Button>Add Random via API</Button>
          <Button variant="outlined">Cancel</Button>
        </div>
      </form>
    </Wrapper>
  );
};
