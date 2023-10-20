import { Container } from "./styles";

export function Button({ id, className, Icon, title, onClick }) {
  return (
    <Container type="button" id={id} className={className} onClick={onClick}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
