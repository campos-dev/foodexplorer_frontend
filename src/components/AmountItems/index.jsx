import { Container } from "./styles";
import { useState, useEffect } from "react";

import { Button } from "../Button";
import { api } from "../../services/api";

import { useContext } from "react";
import { AmountContext } from "../../hooks/useAmount";

export function AmountItems({ id }) {
  const [amount, setAmount] = useState(0);
  const { cartUpdated, setCartUpdated } = useContext(AmountContext);

  async function handleBuy() {
    try {
      const response = await api.get(`/dishes/${id}`, {
        withCredentials: true,
      });
      const dish = response.data;

      if (amount > 0) {
        await api.post("/cart", { amount, id }, { withCredentials: true });
        setAmount(0);
        setCartUpdated((prevState) => !prevState);
        return alert(`${amount} ${dish.title} added to your shopping cart`);
      }
    } catch (error) {
      return console.error(error);
    }
  }

  function handleDecreaseAmount() {
    if (amount > 0) {
      return setAmount((prevState) => prevState - 1);
    }
    return;
  }

  function handleIncreaseAmount() {
    return setAmount((prevState) => prevState + 1);
  }

  useEffect(() => {
    localStorage.setItem("amount", amount);
  }, [amount]);

  return (
    <Container>
      <div id="changeNumBox">
        <button className="changeNum" onClick={handleDecreaseAmount}>
          -
        </button>
        <p>{amount}</p>
        <button className="changeNum" onClick={handleIncreaseAmount}>
          +
        </button>
        <Button id="buyButton" title="Buy" onClick={handleBuy} />
      </div>
    </Container>
  );
}
