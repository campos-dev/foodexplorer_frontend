import { useState } from "react";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import polygon from "../../assets/Polygon 1.svg";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup() {
    if (!name || !email || !password) {
      return alert("All fields must be filled");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User was successfully registered!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("It's not possible to register");
        }
      });
  }

  return (
    <Container>
      <div id="logo">
        <img src={polygon} alt="foodexplorer logo" />
        <p>food explorer</p>
      </div>

      <form id="userInfoBox">
        <h1>Create an account</h1>
        <p>Name</p>
        <Input type="text" onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button title="Sign up" onClick={handleSignup} />
        <Link to="/">already have an account</Link>
      </form>
    </Container>
  );
}
