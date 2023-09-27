import { Container } from "./styles";

export function AmountItems({ amount }) {
  return (
    <Container>
      <div id="changeNumBox">
        <button className="changeNum">-</button>
        <p>{amount}</p>
        <button className="changeNum">+</button>
      </div>
    </Container>
  );
}
