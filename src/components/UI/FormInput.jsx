import classes from "./FormInput.module.css";

export const FormInput = ({
  placeholder,
  id,
  value,
  error,
  labelText,
  type = "text",
  ...rest
}) => {


  const placeholderX = placeholder !== "" && placeholder ? placeholder : "...";
  return (
    <div className={classes.formLabel}>
      <label className={classes.label} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`${classes.formInput} ${error && classes.error}`}
        placeholder={placeholderX}
        id={id}
        value={value}
        type={type}
        {...rest}
      />
    </div>
  );
};
