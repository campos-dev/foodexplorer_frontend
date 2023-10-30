import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Logo, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import polygon_logo from "../../assets/Polygon 1.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Menu } from "../../components/Menu";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { useContext } from "react";
import { SearchContext } from "../../hooks/useSearch";
import { AmountContext } from "../../hooks/useAmount";
import { api } from "../../services/api";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { search, setSearch } = useContext(SearchContext);
  const { cartUpdated, setCartUpdated } = useContext(AmountContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function navigateToAddDish() {
    navigate("/add");
  }

  function handleMenuOpen() {
    setSearch("");
    setMenuIsOpen(true);
  }

  useEffect(() => {
    async function printTotalAmount() {
      const userCart = await api.get(`/cart`);
      const tableRows = userCart.data;
      let tempTotal = 0;
      for (let row of tableRows) {
        tempTotal += row.amount;
      }
      setTotalAmount(tempTotal);
    }
    printTotalAmount();
  }, [cartUpdated]);

  return (
    <>
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Container>
        <button id="buttonMenuCellphone">
          <AiOutlineMenu onClick={handleMenuOpen} />
        </button>

        <div id="logoBox">
          <Logo id="logo">
            <img src={polygon_logo} alt="food explorer logo" />
            <span>food explorer</span>
          </Logo>
          {user.role === USER_ROLE.ADMIN ? (
            <span className="profileBadge">admin</span>
          ) : (
            <span className="profileBadge">{user.name}</span>
          )}
        </div>

        <Input
          Icon={HiOutlineMagnifyingGlass}
          placeholder="Search for a dish or by ingredients"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            navigate("/");
          }}
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
            title={`Orders (${totalAmount})`}
          ></Button>
        )}

        {user.role !== USER_ROLE.ADMIN ? (
          <>
            <Button id="buttonOrdersCellphone" Icon={PiReceipt} />
            <span id="amountButtonOrderCellphone">{totalAmount}</span>
          </>
        ) : (
          <></>
        )}

        <Logout id="buttonLogout" onClick={signOut}>
          <MdOutlineLogout />
        </Logout>
      </Container>
    </>
  );
}
