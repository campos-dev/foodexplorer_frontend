import { useRef } from "react";
import { Container } from "./styles";

export function Input({ Icon, onIconClick, ...rest }) {
  return (
    <Container>
      {Icon && (
        <div onClick={onIconClick}>
          <Icon />
        </div>
      )}
      <input {...rest} />
    </Container>
  );
}
