import { Container, Logo, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import polygon_logo from "../../assets/Polygon 1.svg";

export function Header() {
  let orderAmount = 0;

  return (
    <Container>
      <button id="buttonMenuCellphone">
        <AiOutlineMenu />
      </button>
      <Logo id="logo">
        <img src={polygon_logo} alt="food explorer logo" />
        <span>food explorer</span>
      </Logo>
      <Input
        Icon={HiOutlineMagnifyingGlass}
        placeholder="Search for a dish or by ingredients"
      />
      <Button
        id="buttonOrders"
        Icon={PiReceipt}
        title={`Orders (${orderAmount})`}
      ></Button>

      <Button id="buttonOrdersCellphone" Icon={PiReceipt} />
      <span id="amountButtonOrderCellphone">{orderAmount}</span>

      <Logout id="buttonLogout">
        <MdOutlineLogout />
      </Logout>
    </Container>
  );
}
