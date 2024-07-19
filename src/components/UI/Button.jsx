import classes from "./Button.module.css";
import Spinner from "./spinner/Spinner";

export const Button = ({ isLoading, onClick, variant, children }) => {
  const content = isLoading ? <Spinner /> : children;
  const isOutlined = variant === "outlined";

  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${isOutlined ? classes.outlined : ''}`}
    >
      {content}
    </button>
  );
};
