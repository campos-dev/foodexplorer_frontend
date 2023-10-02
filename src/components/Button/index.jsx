import { Container } from "./styles";

export function Button({ id, className, Icon, title }) {
  return (
    <Container type="button" id={id} className={className}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
