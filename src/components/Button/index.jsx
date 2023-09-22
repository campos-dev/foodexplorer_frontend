import { Container } from "./styles";

export function Button({ Icon, title }) {
  return (
    <Container type="button">
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
