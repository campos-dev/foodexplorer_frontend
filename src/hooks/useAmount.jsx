import React, { useState } from "react";

export const AmountContext = React.createContext({
  cartUpdated: false,
});

export function AmountProvider({ children }) {
  const [cartUpdated, setCartUpdated] = useState(false);

  return (
    <AmountContext.Provider value={{ cartUpdated, setCartUpdated }}>
      {children}
    </AmountContext.Provider>
  );
}
