import { useState } from "react";

import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import polygon from "../../assets/Polygon 1.svg";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div id="logo">
        <img src={polygon} alt="foodexplorer logo" />
        <p>food explorer</p>
      </div>

      <form id="userInfoBox">
        <h1>Sign in</h1>
        <p>Email</p>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button title="Sign in" onClick={handleSignIn} />
        <Link to="/register">create an account</Link>
      </form>
    </Container>
  );
}
