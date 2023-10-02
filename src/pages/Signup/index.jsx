import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import polygon from "../../assets/Polygon 1.svg";

export function Signup() {
  return (
    <Container>
      <div id="logo">
        <img src={polygon} alt="foodexplorer logo" />
        <p>food explorer</p>
      </div>

      <form id="userInfoBox">
        <h1>Create an account</h1>
        <p>Name</p>
        <Input type="text" />
        <p>Email</p>
        <Input type="email" />
        <p>Password</p>
        <Input type="password" minLength="6" />
        <Button title="Sign up" />
        <ButtonText>already have an account</ButtonText>
      </form>
    </Container>
  );
}
