import { useRef } from "react";
import { Container } from "./styles";

export function Input({ Icon, ...rest }) {
  const inputRef = useRef();

  const handleContainerClick = () => {
    inputRef.current.focus();
  };

  return (
    <Container onClick={handleContainerClick}>
      {Icon && <Icon />}
      <input ref={inputRef} {...rest} />
    </Container>
  );
}
