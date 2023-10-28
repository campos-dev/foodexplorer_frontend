import { useRef } from "react";
import { Container } from "./styles";

export function Input({ Icon, onIconClick, ...rest }) {
  const inputRef = useRef();

  const handleContainerClick = () => {
    inputRef.current.focus();
  };

  return (
    <Container onClick={handleContainerClick}>
      {Icon && (
        <div onClick={onIconClick}>
          <Icon />
        </div>
      )}
      <input ref={inputRef} {...rest} />
    </Container>
  );
}
