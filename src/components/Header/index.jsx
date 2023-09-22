import { Container, Logo, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PiReceipt } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import polygon_logo from "../../assets/Polygon 1.svg";

export function Header() {
  let orderAmount = 0;

  return (
    <Container>
      <Logo>
        <img src={polygon_logo} alt="food explorer logo" />
        <span>food explorer</span>
      </Logo>
      <Input
        Icon={HiOutlineMagnifyingGlass}
        placeholder="Find by a dish or ingredients"
      />
      <Button Icon={PiReceipt} title={`Orders(${orderAmount})`}></Button>
      <Logout>
        <MdOutlineLogout />
      </Logout>
    </Container>
  );
}
