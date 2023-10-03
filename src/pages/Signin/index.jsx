import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import polygon from "../../assets/Polygon 1.svg";

import { Link } from "react-router-dom";

export function Signin() {
  return (
    <Container>
      <div id="logo">
        <img src={polygon} alt="foodexplorer logo" />
        <p>food explorer</p>
      </div>

      <form id="userInfoBox">
        <h1>Sign in</h1>
        <p>Email</p>
        <Input type="email" />
        <p>Password</p>
        <Input type="password" minLength="6" />
        <Button title="Sign in" />
        <Link to="/register">create an account</Link>
      </form>
    </Container>
  );
}
