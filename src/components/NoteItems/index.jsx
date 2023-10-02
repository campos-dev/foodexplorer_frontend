import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItems({
  isNew = false,
  value,
  onClick,
  onChange,
  ...rest
}) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={onChange}
        {...rest}
      />
      <button onClick={onClick} type="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
