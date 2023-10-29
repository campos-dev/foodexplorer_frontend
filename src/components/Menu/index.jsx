import { Container, Logout } from "./styles";
import { FiX } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../hooks/useSearch";

export function Menu({ menuIsOpen, setMenuIsOpen }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { search, setSearch } = useContext(SearchContext);

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
          value={search}
          onIconClick={() => {
            navigate("/");
            setMenuIsOpen(false);
          }}
          placeholder="Search for a dish or by ingredients"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <Logout id="buttonLogout" onClick={signOut}>
          Sign out
        </Logout>
        <div id="line"></div>
      </div>
      <Footer />
    </Container>
  );
}
