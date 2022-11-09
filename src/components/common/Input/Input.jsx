import React from "react";
import clsx from "clsx";

const Input = ({
  children,
  classes,
  label = "label",
  type = "text",
  name = "",
  value,
  onChange,
  readonly = false,
}) => {
  const inputId = React.useId();
  const inputRef = React.useRef();

  React.useEffect(() => {
    const input = inputRef.current;

    if (input.value.length > 0) {
      input.parentElement.classList.add("_has");
    } else {
      input.parentElement.classList.remove("_has");
    }

    function handleFocusInput() {
      this.parentElement.classList.add("_focus");
      this.classList.add("_focus");
    };

    function handleBlurInput() {
      this.parentElement.classList.remove("_focus");
      this.classList.remove("_focus");
      if (input.value.length > 0) {
        this.parentElement.classList.add("_has");
      } else {
        this.parentElement.classList.remove("_has");
      }
    };

    input.addEventListener("focus", handleFocusInput)

    input.addEventListener("blur", handleBlurInput)

    return () => {
      input.removeEventListener("focus", handleFocusInput);
      input.removeEventListener("focus", handleBlurInput);
    };
  }, []);

  return (
    <>
      <div className={clsx("input-item", classes)}>
        <label htmlFor={inputId} className={"input-item__label"}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={inputId}
          className={"input-item__input"}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readonly}
        />
        {children}
      </div>
      <div className={"input-item__error"}></div>
    </>
  )
}

export default Input;