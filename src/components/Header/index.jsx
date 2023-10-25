import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Logo, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Menu } from "../../components/Menu";

import polygon_logo from "../../assets/Polygon 1.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Header() {
  let orderAmount = 0;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const navigateToAddDish = () => {
    navigate("/add");
  };

  return (
    <>
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Container>
        <button id="buttonMenuCellphone">
          <AiOutlineMenu onClick={() => setMenuIsOpen(true)} />
        </button>

        <div id="logoBox">
          <Logo id="logo">
            <img src={polygon_logo} alt="food explorer logo" />
            <span>food explorer</span>
          </Logo>
          {user.role === USER_ROLE.ADMIN ? (
            <span id="adminBadge">admin</span>
          ) : (
            <></>
          )}
        </div>

        <Input
          Icon={HiOutlineMagnifyingGlass}
          placeholder="Search for a dish or by ingredients"
        />
        {user.role === USER_ROLE.ADMIN ? (
          <Button
            id="addDish"
            title="Add dish"
            onClick={navigateToAddDish}
          ></Button>
        ) : (
          <Button
            id="buttonOrders"
            Icon={PiReceipt}
            title={`Orders (${orderAmount})`}
          ></Button>
        )}

        <Button id="buttonOrdersCellphone" Icon={PiReceipt} />
        <span id="amountButtonOrderCellphone">{orderAmount}</span>

        <Logout id="buttonLogout" onClick={signOut}>
          <MdOutlineLogout />
        </Logout>
      </Container>
    </>
  );
}
