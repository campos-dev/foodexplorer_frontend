import { Container, Logout } from "./styles";
import { FiX } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";

export function Menu({ menuIsOpen, setMenuIsOpen }) {
  const { signOut } = useAuth();

  return (
    <Container data-menuisopen={menuIsOpen}>
      <div id="closeMenuBar">
        <p>
          <FiX onClick={() => setMenuIsOpen(false)} />
          Menu
        </p>
      </div>
      <div className="contentBox">
        <Input
          Icon={HiOutlineMagnifyingGlass}
          placeholder="Search for a dish or by ingredients"
        />

        <Logout id="buttonLogout" onClick={signOut}>
          Sair
        </Logout>
        <div id="line"></div>
      </div>
      <Footer />
    </Container>
  );
}
